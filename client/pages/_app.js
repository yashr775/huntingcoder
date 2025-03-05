// pages/_app.js
import Layout from "@/components/Layout";
import "../src/app/globals.css"; // Make sure Tailwind is imported

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
