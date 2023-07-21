import { Link } from "@inertiajs/react";
import React from "react";

export default function Menu({ menu, auth }) {
    return (
        <div className="section my-28 mx-10 md:mx-20" id="recipe">
            <div className="flex flex-col items-center">
                <div className="text-3xl text-center font-bold mb-10">
                    Our Menu Today
                    <p className="text-sm font-normal opacity-70 mt-3">
                        <i>
                            This is our menu list. We always have a special dish
                            that will be served for you
                        </i>
                    </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                    {menu.map((recipe) => {
                        return (
                            <div
                                className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
                                key={recipe.id}
                            >
                                <img
                                    src={recipe.image}
                                    className="rounded-md mb-4"
                                />
                                <div className="flex justify-between mb-4">
                                    <div className="md:text-xl text-[1rem] font-semibold">
                                        {recipe.name}
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <span className="text-xl font-semibold">
                                        ${recipe.price}.00
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {auth.user ? (
                    <Link href={route("menu.index")}>
                        <button className="group relative h-12 w-72 overflow-hidden rounded-lg bg-white text-lg font-medium lg:font-semibold shadow">
                            <div className="absolute inset-0 w-3 bg-emerald-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-black group-hover:text-white">
                                View Dashboard Menus
                            </span>
                        </button>
                    </Link>
                ) : (
                    <Link href={route("login")}>
                        <button className="group relative h-12 w-52 overflow-hidden rounded-lg bg-white text-lg font-medium lg:font-semibold shadow">
                            <div className="absolute inset-0 w-3 bg-emerald-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-black group-hover:text-white">
                                View All Menus
                            </span>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}
