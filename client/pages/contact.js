import { useState } from 'react'


const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [desc, setDesc] = useState();




    return (
        <div className="bg-gray-600 h-screen flex justify-center items-center p-4">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-100 rounded-2xl p-4">
                <h1 className="flex justify-center font-bold text-xl sm:text-2xl m-3">
                    Login To Continue!
                </h1>
                <form className="space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto" >
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
                        />

                    </div>
                    <div className="relative flex items-center">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
                        />

                    </div>

                    <div className="relative flex items-center">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
                        />
                    </div>
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Elaborate your concern"
                            name="comments"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
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
    )
}

export default Contact