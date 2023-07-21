import { Link } from "@inertiajs/react";
import React from "react";
import hero from "../assets/pasta.png";

export default function Home() {
    return (
        <>
            <div
                className="text-gray-700 mx-7 md:mx-24 mt-24 section flex items-center md:justify-center flex-wrap"
                id="home"
            >
                <div className="flex flex-col items-start gap-10">
                    <div className="">
                        <p className="text-[2rem] sm:text-[2.5rem]  font-bold">
                            Delicious Food <br /> is Waiting <br /> For you
                        </p>
                    </div>
                    <div className="btn">
                        <Link href={route("login")}>
                            <button className="group relative h-12 w-40 overflow-hidden rounded-lg bg-white text-lg font-medium lg:font-semibold shadow">
                                <div className="absolute inset-0 w-3 bg-emerald-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                <span className="relative text-black group-hover:text-white">
                                    View Menu
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="min-w-[100px] flex justify-end my-0 lg:my-0 sm:ml-16 md:w-[500px]">
                    <img src={hero} className="w-[450px] mx-auto" />
                </div>
            </div>
        </>
    );
}
