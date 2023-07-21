import React from "react";

export default function FormMenu() {
    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[650px] shadow-lg shadow-gray-400 p-7">
                <form action={route("dashboard.reservation")} method="POST">
                    <div className="mb-5">
                        <label
                            for="table"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Menu Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Menu Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            for="subject"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="$50"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div>
                        <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}