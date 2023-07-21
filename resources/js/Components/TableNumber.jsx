import React from "react";
import { Link } from "@inertiajs/react";

export default function TableNumber({ auth }) {
    return (
        <>
            <div className="h-full">
                <div className="px-16 w-full mt-28">
                    <div className="mb-7">
                        <h2>Hi, Welcome {auth.user.name}</h2>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <p className="mb-16 font-semibold text-xl">
                                List Table Number{" "}
                            </p>
                        </div>
                        <Link href={route("reservation.create")}>
                            <button className="block uppercase mx-auto shadow-md bg-cyan-600 hover:bg-cyan-700 focus:shadow-outline focus:outline-none text-white text-sm py-3 px-7 rounded">
                                + Make Reservation
                            </button>
                        </Link>
                    </div>
                    <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                        <div className="bg-green-500 shadow-md shadow-gray-500 hover:shadow-none text-center py-3 rounded-md">
                            <a href="#">Table 02</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
