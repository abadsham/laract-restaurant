import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Header from "@/Components/Header";
import image2 from "@/assets/food10.jpg";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

export default function CreateMenus(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    //function "storePost"
    const storeMenu = async (e) => {
        e.preventDefault();

        Inertia.post(
            "/dashboard/menu",
            {
                name: name,
                image: image,
                price: price,
            });
            {
                Swal.fire({
                    title: "Success!",
                    text: "Data created successfully!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
    };

    return (
        <>
            <Head title="Create Menu" />
            <Header auth={props.auth} />
            <div className="font-poppins flex items-center flex-wrap h-screen w-full justify-center ">
                <div className=" flex rounded-xl shadow-lg shadow-gray-500 mt-16">
                    <div className="flex shadow-md">
                        <div className="hidden lg:block content-center">
                            <img
                                className="w-96 overflow-hidden h-full bg-center bg-no-repeat bg-cover rounded-l-xl"
                                src={image2}
                            />
                        </div>
                    </div>

                    <div className=" flex items-center justify-center p-7">
                        <div className="mx-auto w-full max-w-[550px]">
                            <p className="mb-7 text-lg text-center font-semibold -mt-5">
                                Add New Menu
                            </p>
                            <form onSubmit={storeMenu}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="fName"
                                        className="mb-1 block text-base font-medium text-[#07074D]"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fName"
                                        id="fName"
                                        placeholder="Food Name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="price"
                                        className="mb-1 block text-base font-medium text-[#07074D]"
                                    >
                                        Image
                                    </label>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        min="0"
                                        onChange={(e) =>
                                            setImage(e.target.files[0])
                                        }
                                        required
                                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white p-2 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="price"
                                        className="mb-1 block text-base font-medium text-[#07074D]"
                                    >
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        placeholder="-"
                                        value={price}
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                        required
                                        min="0"
                                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="hover:shadow-form rounded-md bg-teal-700 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
