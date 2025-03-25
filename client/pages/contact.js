import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { phone, name, email, desc };

        fetch("http://localhost:3000/api/postcontact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success " + data);
                alert("Thanks for contacting us")
                setDesc("");
                setEmail("");
                setName("");
                setPhone("");
            });
    };

    const handleChange = (e) => {
        e.preventDefault();

        if (e.target.name == "phone") {
            setPhone(e.target.value);
        } else if (e.target.name == "name") {
            setName(e.target.value);
        } else if (e.target.name == "email") {
            setEmail(e.target.value);
        } else if (e.target.name == "desc") {
            setDesc(e.target.value);
        }
    };

    return (
        <div className="bg-gray-600 h-screen flex justify-center items-center p-4">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/2 xl:h-3/4 bg-gray-100 rounded-2xl p-4">
                <h1 className="flex justify-center font-bold text-xl sm:text-2xl m-3 text-black">
                    Contact US
                </h1>
                <form
                    className="space-y-4 font-[sans-serif] text-[#333]  mx-auto"
                    onSubmit={handleSubmit}
                >
                    <div className="relative flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
                        />
                    </div>
                    <div className="relative flex items-center">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
                        />
                    </div>

                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Enter Phone"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
                        />
                    </div>
                    <div className="relative flex items-center">
                        <textarea
                            type="text"
                            placeholder="Elaborate your concern"
                            name="desc"
                            value={desc}
                            onChange={handleChange}
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all h-48"
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-2.5 w-full !mt-8 text-sm bg-black hover:bg-blue-600 text-white rounded active:bg-[#006bff]"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
