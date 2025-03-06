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
        <div className="text-5xl font-bold mt-24">Hunting Coder</div>
        <Image src={"/coder.jpg"} alt="Coder" width={400} height={400} className="mt-10" />
        <div className=" mt-10 mb-20">A blog for hunting coders by hunting coder</div>
        <div className="blogs">
          <div className="blogItem">
            <div className="popular text-2xl mb-2 font-semibold">Latest blogs</div>
            <h1 className="text-3xl font-bold">How to learn next in 2025?</h1>
            <p className="mb-5">Next is a framework built over react</p>
            <h1 className="text-3xl font-bold">How to learn next in 2025?</h1>
            <p className="mb-5">Next is a framework built over react</p>
            <h1 className="text-3xl font-bold">How to learn next in 2025?</h1>
            <p className="mb-5">Next is a framework built over react</p>
            <h1 className="text-3xl font-bold">How to learn next in 2025?</h1>
            <p className="mb-5">Next is a framework built over react</p>
          </div>
        </div>
      </div>
    </div>
  );
}
