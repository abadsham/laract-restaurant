import { React } from "react";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

export default function ListReservation({ reservation }) {
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
                Inertia.delete(`dashboard/reservation/${id}`);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };

    return (
        <table class="container w-full mx-10 mb-10 lg:mx-auto shadow-md shadow-gray-300 mt-20 lg:mt-24">
            <thead>
                <tr>
                    <th class="p-3 font-bold uppercase bg-gray-50 border-b-2 border-gray-500 text-gray-600 hidden lg:table-cell">
                        Name
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-50 border-b-2 border-gray-500 text-gray-600 hidden lg:table-cell">
                        Address
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-50 border-b-2 border-gray-500 text-gray-600 hidden lg:table-cell">
                        No Table
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-50 border-b-2 border-gray-500 text-gray-600 hidden lg:table-cell">
                        Date
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-50 border-b-2 border-gray-500 text-gray-600 hidden lg:table-cell">
                        Time
                    </th>
                    <th class="p-3 font-bold uppercase bg-gray-50 border-b-2 border-gray-500 text-gray-600 hidden lg:table-cell">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
                {reservation.map((item) => (
                    <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute my-3 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Name
                            </span>
                            {item.name}
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute my-3 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Address{" "}
                            </span>
                            {item.address}
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute my-3 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                No Table
                            </span>
                            <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold">
                                {item.no_table_id}
                            </span>
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute my-3 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Date
                            </span>
                            <span class="rounded bg-gray-300 py-1 px-3 text-xs font-bold">
                                {item.date}
                            </span>
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute my-3 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Time
                            </span>
                            <span class="rounded bg-yellow-300 py-1 px-3 text-xs font-bold">
                                {item.time}
                            </span>
                        </td>
                        <td class="w-full lg:w-auto p-3 text-gray-800 text-center block lg:table-cell relative lg:static">
                            <span class="lg:hidden absolute my-3 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                                Actions
                            </span>
                            <div class="flex justify-center gap-3">
                                <a href="#" class="text-blue-500 underline">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-6 w-6"
                                        x-tooltip="tooltip"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                        />
                                    </svg>
                                </a>
                                <button
                                    onClick={() => deletePost(item.id)}
                                    class="text-red-400 underline"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-6 w-6"
                                        x-tooltip="tooltip"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
