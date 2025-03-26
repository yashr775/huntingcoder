import React, { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);

    // ✅ Fetch Blogs with Pagination
    const fetchBlogs = useCallback(async () => {
        if (loading || !hasMore) return; // Prevent unnecessary calls

        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3000/api/blogs?page=${page}`);
            const data = await res.json();

            const newBlogs = data.blogs.map((blog) => ({
                fileName: blog.fileName,
                content: JSON.parse(blog.content),
            }));

            setBlogs((prev) => [...prev, ...newBlogs]);
            setHasMore(data.hasMore);
            setPage((prev) => prev + 1);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
        setLoading(false);
    }, [loading, hasMore, page]);

    // ✅ Infinite Scroll with IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchBlogs();
                }
            },
            { threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [fetchBlogs]);

    return (
        <div className="blog-container flex justify-center min-h-screen bg-gray-900 text-white">
            <div className="blogs flex flex-col items-center mt-20 w-full max-w-2xl p-6">
                {blogs.map((blog, index) => (
                    <div key={blog.fileName || index} className="mb-5">
                        <h1 className="text-3xl font-bold mb-2">
                            <Link href={`/blogpost/${blog.fileName.replace(".json", "")}`}>
                                {blog.content.title}
                            </Link>
                        </h1>
                        <p className="mb-5">{blog.content.content.substr(0, 100)}...</p>
                    </div>
                ))}

                {/* Loader Element (Used for Infinite Scroll Detection) */}
                <div ref={loaderRef} className="mt-5">
                    {loading && <p className="text-blue-600">Loading more blogs...</p>}
                    {!hasMore && <p className="text-gray-400">No more blogs available.</p>}
                </div>
            </div>
        </div>
    );
};

export default Blog;
