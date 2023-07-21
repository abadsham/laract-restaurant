import React from "react";

export default function Guest({ children }) {
    return (
        <div className="font-poppins min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-bl from-emerald-500 to-green-500">
            <div>
                
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
