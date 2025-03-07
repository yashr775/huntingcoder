import React from "react";
import Link from "next/link";

const Blog = () => {
    return (
        <div className="blog-container flex justify-center min-h-screen bg-gray-900 text-white">
            <div className="blogs flex flex-col  items-center mt-20 w-full max-w-2xl p-6">
                <h1 className="text-3xl font-bold mb-2"><Link href="/blogpost/learnjavascript">How to learn Next.js in 2025?</Link></h1>
                <p className="mb-5">Next.js is a framework built over React.</p>

                <h1 className="text-3xl font-bold mb-2">How to master Next.js?</h1>
                <p className="mb-5">It offers SSR, SSG, and API routes.</p>

                <h1 className="text-3xl font-bold mb-2">Next.js vs React: What’s better?</h1>
                <p className="mb-5">Next.js enhances React by adding server-side capabilities.</p>
            </div>
        </div>
    );
};

export default Blog;
