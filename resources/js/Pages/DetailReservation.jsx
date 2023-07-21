import React, {useState} from "react";
import { Head, usePage } from "@inertiajs/react";
import Header from "@/Components/Header";
import image2 from "@/assets/recipe01.jpg";
import { Inertia } from '@inertiajs/inertia';

export default function DetailReservation(props) {
    const { tables } = usePage().props
    // define state
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [noTableId, setTableId] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    //function "storePost"
    const storeReservation = async (e) => {
        e.preventDefault();

        Inertia.post("/dashboard/reservation", {
            name: name,
            address: address,
            no_table_id: noTableId,
            date: date,
            time: time,
        });
    };

    return (
        <>
            <Head title="Reservation" />
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
                                Make Reservation
                            </p>
                            <form onSubmit={storeReservation}>
                                <div className=" flex flex-wrap">
                                    <div className="w-full pr-2 sm:w-1/2">
                                        <div className="mb-3">
                                            <label
                                                for="fName"
                                                className="mb-1 block text-base font-medium text-[#07074D]"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="fName"
                                                id="fName"
                                                placeholder="First Name"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                required
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full pr-2 sm:w-1/2">
                                        <div className="mb-3">
                                            <label
                                                for="fName"
                                                className="mb-1 block text-base font-medium text-[#07074D]"
                                            >
                                                Table
                                            </label>
                                            <select
                                                className="formselect"
                                                value={noTableId}
                                                onChange={(e) =>
                                                    setTableId(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    -- Select Table --
                                                </option>
                                                {tables.map((table) => (
                                                    <option
                                                        value={table.id}
                                                        key={table.id}
                                                    >
                                                        {table.no_table}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label
                                        for="lName"
                                        className="mb-1 block text-base font-medium text-[#07074D]"
                                    >
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="lName"
                                        id="lName"
                                        placeholder="Address"
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                        required
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="w-full pr-2 sm:w-1/2">
                                        <div className="mb-3">
                                            <label
                                                for="date"
                                                className="mb-1 block text-base font-medium text-[#07074D]"
                                            >
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                id="date"
                                                value={date}
                                                onChange={(e) =>
                                                    setDate(e.target.value)
                                                }
                                                required
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full  sm:w-1/2">
                                        <div className="mb-3">
                                            <label
                                                for="time"
                                                className="mb-1 block text-base font-medium text-[#07074D]"
                                            >
                                                Time
                                            </label>
                                            <input
                                                type="time"
                                                name="time"
                                                id="time"
                                                value={time}
                                                onChange={(e) =>
                                                    setTime(e.target.value)
                                                }
                                                className="w-full rounded-md border border-[#e0e0e0] bg-white px-5 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
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
