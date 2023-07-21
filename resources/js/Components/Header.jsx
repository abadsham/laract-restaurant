import React from "react";
import Dropdown from "@/Components/Dropdown";
import { Link } from "@inertiajs/react";

export default function Header({ auth }) {
    return (
        <div
            className="bg-gray-50 shadow-md
          fixed top-0 left-0 w-full z-20"
        >
            <header className=" font-poppins container lg:px-16 px-6 flex flex-wrap items-center py-2 mx-auto justify-between">
                <div>
                    <a href="/">
                        <h4 className="md:text-xl text-emerald-600 font-semibold ">
                            RestoKamp.
                        </h4>
                        <span className="text-sm font-bold opacity-50">
                            Restaurant Reservation
                        </span>
                    </a>
                </div>
                <Dropdown>
                    <Dropdown.Trigger>
                        <button>
                            <svg
                                className="fill-current text-gray-900 lg:hidden block"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                            >
                                <title>menu hamburger</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </Dropdown.Trigger>
                    <Dropdown.Content>
                        <Dropdown.Link href="/dashboard">Home</Dropdown.Link>
                        <Dropdown.Link href={route("menu.index")}>
                            Menu
                        </Dropdown.Link>
                        <Dropdown.Link href={route("reservation.create")}>
                            Make Reservation
                        </Dropdown.Link>
                        <hr className="m-3 border border-stone-300" />
                        <Dropdown.Link href={route("profile.edit")}>
                            Profile
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div
                    className="hidden lg:flex lg:items-center lg:w-auto w-full"
                    id="menu"
                >
                    <nav>
                        <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                            <li>
                                <Link
                                    href="/dashboard"
                                    className="text-emerald-600 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-500"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("menu.index")}
                                    className="text-emerald-600 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-500"
                                >
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("reservation.create")}
                                    className="text-emerald-600 lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-500"
                                >
                                    Make Reservation
                                </Link>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
