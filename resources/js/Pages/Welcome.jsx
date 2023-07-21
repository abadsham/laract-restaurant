import React from "react";
import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Image from "@/Components/Image";
import { Link, Head } from "@inertiajs/react";
import Home from "./../Components/Home";
import Menu from "./../Components/Menu";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome - RestoKamp." />
            <div className="font-poppins">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-400 hover:text-indigo-600 underline"
                            >
                                Log in
                            </Link>

                            <Link href={route("register")}>
                                <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-emerald-600 rounded-lg hover:bg-green-600">
                                    Register
                                </button>
                            </Link>
                        </>
                    )}
                </div>
                <Image auth={props.auth} />
                <Home />
                <About auth={props.auth} />
                <Menu menu={props.menu} auth={props.auth} />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
