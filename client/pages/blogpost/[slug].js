import React from "react";
import { useRouter } from "next/router";

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-3xl mt-10">Title of this page {slug}</h1>
            <div className="max-w-3/4 mt-10 text-lg">
                A black hole is a massive, compact astronomical object so dense that its
                gravity prevents anything from escaping, even light. Albert Einstein
                theory of general relativity predicts that a sufficiently compact mass
                will form a black hole. The boundary of no escape is called the event
                horizon. A black hole has a great effect on the fate and circumstances
                of an object crossing it, but has no locally detectable features
                according to general relativity. In many ways, a black hole acts like
                an ideal black body, as it reflects no light. Quantum field theory
                in curved spacetime predicts that event horizons emit Hawking radiation,
                with the same spectrum as a black body of a temperature inversely
                proportional to its mass. This temperature is of the order of billionths
                of a kelvin for stellar black holes, making it essentially impossible to
                observe directly.
            </div>
        </div>
    );
};

export default Slug;
