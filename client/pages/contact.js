import React from 'react'

const Contact = () => {


    return (
        <div className="bg-gray-600 h-screen flex justify-center items-center p-4">
            <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-gray-100 rounded-2xl p-4">
                <h1 className="flex justify-center font-bold text-xl sm:text-2xl m-3">
                    Login To Continue!
                </h1>
                <form className="space-y-4 font-[sans-serif] text-[#333] max-w-md mx-auto" >
                    <div className="relative flex items-center">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#bbb"
                            stroke="#bbb"
                            className="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 682.667 682.667"
                        >
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                </clipPath>
                            </defs>
                            <g
                                clipPath="url(#a)"
                                transform="matrix(1.33 0 0 -1.33 0 682.667)"
                            >
                                <path
                                    fill="none"
                                    strokeMiterlimit="10"
                                    strokeWidth="40"
                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                    data-original="#000000"
                                ></path>
                                <path
                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                    data-original="#000000"
                                ></path>
                            </g>
                        </svg>
                    </div>

                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Enter Password"
                            name="password"
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