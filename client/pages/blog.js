import React, { useEffect, useState } from "react";
import Link from "next/link";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/blogs");
                const data = await res.json();

                // Ensure content is parsed from JSON string to object
                const parsedBlogs = data.map((blog) => ({
                    fileName: blog.fileName,
                    content: JSON.parse(blog.content), // ✅ Parse JSON
                }));

                setBlogs(parsedBlogs);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };

        fetchBlogs();
    }, []);

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
            </div>
        </div>
    );
};

export default Blog;
