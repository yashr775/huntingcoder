import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
            <h1 className="text-5xl font-extrabold mb-6">About Hunting Coder</h1>
            <p className="text-lg max-w-3xl text-center leading-relaxed">
                Hunting Coder is a platform where developers can share their insights, experiences, and knowledge through blogs.
                Whether you are a beginner learning JavaScript or an expert diving into advanced programming concepts,
                this is the place to publish and explore quality content from fellow coders.
            </p>

            <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold mb-2 flex ">Why Choose Hunting Coder?</h2>
                <ul className="text-lg list-disc list-inside space-y-2 flex-col justify-items-start">
                    <li>📌 Share your coding journey with the world</li>
                    <li>⚡ Discover and learn from fellow developers</li>
                    <li>💡 Publish articles on trending technologies</li>
                    <li>📝 Engage with the developer community</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
