import React from "react";
import img from "../assets/mentahan/menu1.jpg";
import { Link } from "@inertiajs/react";

export default function Image({ auth }) {
    return (
        <>
            <div id="image" className=" flex items-center justify-start">
                <div>
                    <img src={img} className="max-sm:h-52" />
                </div>
                {auth.user ? (
                    <div className="max-sm:hidden mt-20 w-1/2 absolute z-10 ml-10 lg:text-3xl text-slate-50 font-semibold">
                        <p>
                            Hi, {auth.user.name},
                        </p>
                        <div className="flex mt-3">
                            <p>Thanks for your reservation</p>
                        </div>
                    </div>
                ) : (
                    <div className="max-sm:hidden mt- w-1/2 absolute z-10 ml-10 lg:text-3xl text-slate-50 font-semibold">
                        <p>
                            Welcome guest, Create your account to make your
                            reservations
                        </p>
                        <div className="flex mt-3">
                            <div className="btn py-3">
                                <Link href={route("login")}>
                                    <button className="group relative h-12 w-36 overflow-hidden rounded-lg bg-white text-lg shadow">
                                        <div className="absolute inset-0 w-10 bg-emerald-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                        <span className="relative text-black group-hover:text-white">
                                            {auth.user
                                                ? "Dashboard"
                                                : "Sign in"}
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
