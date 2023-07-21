import React from "react";

export default function Contact () {
  return (
      <div className="container w-screen mx-3 sm:mx-auto section" id="contact">
          <div className="border-solid border-black border-b pb-8 flex justify-between items-end gap-4 flex-wrap">
              <div>
                  <div className="uppercase">let's talk</div>
                  <div className="text-xl font-bold">
                      Any related questions?
                  </div>
              </div>
              <div className="rounded-[0.5rem] bg-emerald-700 hover:bg-emerald-600 text-white p-4 text-[0.85rem]">
                  <a href="http://wa.me/6282133460786">Contact us now</a>
              </div>
          </div>
      </div>
  );
};

