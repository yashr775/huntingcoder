import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Hunting coder",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title key="title">Hunting Coder</title>{" "}
        <meta
          name="description"
          content="A blog for coders by a hunting coder"
        />
      </Head>
      <Navbar />

      {/* Centering Content */}
      <div className="flex flex-col items-center flex-grow bg-gray-600">
        <div className="text-3xl font-bold mt-8">Hunting Coder</div>
        <div className="w-52 h-52 rounded-full overflow-hidden mt-2">
          <Image
            src="/coder.jpg"
            alt="Coder"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" mt-10 mb-4">A blog for hunting coders by hunting coder</div>
        <div className="blogs">
          <div className="blogItem">
            <div className="popular text-xl mb-2 font-semibold">Latest blogs</div>
            <h1 className="text-2xl font-bold">How to learn next in 2025?</h1>
            <p className="">Next is a framework built over react</p>
            <div className="btn mb-6">Read More</div>
            <h1 className="text-2xl font-bold">How to learn next in 2025?</h1>
            <p className="mb-2">Next is a framework built over react</p>
            <div className="btn mb-6">Read More</div>
            <h1 className="text-2xl font-bold">How to learn next in 2025?</h1>
            <p className="mb-2">Next is a framework built over react</p>
            <div className="btn mb-6">Read More</div>
            <h1 className="text-2xl font-bold">How to learn next in 2025?</h1>
            <p className="mb-2">Next is a framework built over react</p>
            <div className="btn mb-6">Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
}
