import React from "react";
import Header from "@/Components/Header";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Menus(props) {
    const { menu } = usePage().props;
    return (
        <>
            <Head title="Menu" />
            <Header auth={props.auth} />
            <div className="section my-28 mx-10 md:mx-20" id="recipe">
                <div className="flex flex-col items-center">
                    <div className="text-3xl text-center font-bold mb-16">
                        Our Menu
                    </div>
                    <div className="flex">
                        <Link href="#">
                            <button className="mb-5 block uppercase mx-auto shadow-md bg-cyan-600 hover:bg-cyan-700 focus:shadow-outline focus:outline-none text-white text-sm py-3 px-7 rounded">
                                + Add New Menu
                            </button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 mb-16">
                        {menu.map((recipe, index) => {
                            return (
                                <div
                                    className=" p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
                                    key={index}
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
                    <Link href={route("reservation.index")}>
                        <button className="block uppercase mx-auto shadow-md bg-cyan-600 hover:bg-cyan-700 focus:shadow-outline focus:outline-none text-white text-sm py-3 px-7 rounded">
                            + Make Reservation
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
