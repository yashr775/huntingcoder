import React from "react";
import { useRouter } from "next/router";


// const router = useRouter();
// const { slug } = router.query;

// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//     if (!slug) return; // ✅ Prevent API call if slug is undefined

//     const fetchBlogs = async () => {
//         try {
//             const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//             const responseData = await res.json();
//             setData(responseData);
//             setLoading(false);
//         } catch (err) {
//             console.error("Error fetching blogs:", err);
//             setLoading(false);
//         }
//     };

//     fetchBlogs();
// }, [slug]);

const Slug = ({ data }) => {
    const router = useRouter();

    // If the page is not yet generated, Next.js will show a fallback loading state.
    if (router.isFallback) {
        return <p className="text-center mt-20 text-white">Loading...</p>;
    }

    if (!data) {
        return <p className="text-center mt-20 text-white">Blog not found!</p>;
    }

    return (
        <div className="blog-container flex justify-center min-h-screen bg-gray-900 text-white">
            <div className="blog-post flex flex-col items-center mt-20 w-full max-w-2xl p-6">
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
                <p className="text-lg">{data.content}</p>
            </div>
        </div>
    );
};

// **🔥 Fixed getServerSideProps**
export async function getServerSideProps(context) {

    const { slug } = context.params; // Get dynamic slug from the URL

    try {
        const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);

        if (!res.ok) {
            return { notFound: true }; // If blog post is not found, return 404
        }

        const data = await res.json();

        return {
            props: { data }, // Pass data to the component
        };
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return { notFound: true }; // Show 404 page if error occurs
    }
}

export default Slug;
