import React from "react";
import pasta from "../assets/mentahan/udang.png";
import chef from "../assets/chef1.jpg";
import { Link } from "@inertiajs/react";

export default function About ({ auth }) {
    return (
        <div className="section mx-7 md:mx-24" id="about">
            <div className="grid md:grid-cols-2 -mt-0 lg:-mt-24">
                <div className="flex flex-col justify-center items-start m-5">
                    <div className="text-3xl  text-gray-700 font-bold mb-5">
                        Login to make your reservation
                    </div>
                    <p className="text-sm opacity-70">
                        You have login to make your reservation. Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Aperiam
                        exercitationem quo esse sapiente possimus deleniti!
                    </p>
                    <div className="btn mt-5">
                        <Link href={route("login")}>
                            <button className="group relative h-12 w-40 overflow-hidden rounded-lg bg-white text-lg font-medium lg:font-semibold shadow">
                                <div className="absolute inset-0 w-3 bg-emerald-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                <span className="relative text-black group-hover:text-white">
                                    {auth.user ? "Dashboard" : "Sign in"}
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="md:row-start-1 -mt-32 md:mt-auto">
                    <img src={pasta} className="w-[400px] rounded-xl" />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-16 items-center justify-items-center">
                <div className="">
                    <div className="sm:text-3xl text-xl font-bold mb-6">
                        Our team of registered nurses and skilled healthcare
                        professionals.
                    </div>
                    <p className="text-sm opacity-70">
                        Here we have cooks who are reliable and can be fun.
                        Their experience and official certificates are of the
                        utmost importance. They already serve super delicious
                        dishes all day long. Enjoy our service!
                    </p>
                </div>
                <figure className="">
                    <img
                        className="w-96 rounded-xl shadow-lg mt-20 lg:mt-0"
                        src={chef}
                        alt="image description"
                    />
                </figure>
            </div>
        </div>
    );
}
