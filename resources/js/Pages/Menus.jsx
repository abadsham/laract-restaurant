import { React } from "react";
import Header from "@/Components/Header";
import { Head, Link, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";

export default function Menus(props) {
    const { menu } = usePage().props;
    const auth = props.auth;
    const deletePost = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(`/dashboard/menu/${id}`);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    return (
        <>
            <Head title="Menu" />
            <Header auth={props.auth} />
            <div
                className="font-poppins section my-28 mx-10 md:mx-20"
                id="recipe"
            >
                <div className="flex flex-col ">
                    <div className="text-3xl text-center font-bold mb-10">
                        Our Menu
                    </div>
                    <div className="flex justify-center gap-3">
                        {auth.user.name == "admin" && (
                            <Link href={route("menu.create")}>
                                <button className="mb-5  uppercase shadow-md bg-cyan-800 hover:bg-cyan-700 focus:shadow-outline focus:outline-none text-white text-sm py-3 px-7 rounded">
                                    + Add New Menu
                                </button>
                            </Link>
                        )}
                        <Link href={route("reservation.index")}>
                            <button className="mb-5  shadow-md uppercase bg-cyan-600 hover:bg-cyan-700 focus:shadow-outline focus:outline-none text-white text-sm py-3 px-7 rounded">
                                + Make Reservation
                            </button>
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-8 mb-16">
                        {menu.map((recipe, index) => {
                            return (
                                <div
                                    className="p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
                                    key={index}
                                >
                                    <img
                                        src={recipe.image}
                                        className="rounded-md mb-4"
                                    />
                                    <div className="mb-4">
                                        <div className="md:text-xl text-[1rem] font-semibold">
                                            {recipe.name}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        {auth.user.name == "admin" && (
                                            <div>
                                                <Link
                                                    href={`/dashboard/menu/${recipe.id}/edit`}
                                                >
                                                    <button className="p-1 text-blue-600 hover:bg-cyan-700">
                                                        edit
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deletePost(recipe.id)
                                                    }
                                                    className="p-1 text-red-600"
                                                >
                                                    deleted
                                                </button>
                                            </div>
                                        )}
                                        <span className="lg:text-xl font-semibold">
                                            ${recipe.price}.00
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
