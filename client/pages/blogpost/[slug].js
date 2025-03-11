import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return; // ✅ Prevent API call if slug is undefined

        const fetchBlogs = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
                const responseData = await res.json();
                setData(responseData);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, [slug]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!data) return <p className="text-center mt-10">Blog not found!</p>;

    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl mt-10">Title: {data.title}</h1>
            <div className="max-w-3/4 mt-10 text-lg">{data.content}</div>
        </div>
    );
};

export default Slug;
