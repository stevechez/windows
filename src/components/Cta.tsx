import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Cta: NextPage = () => {
  return (
    <>
      <section className="flex flex-col w-full overflow-hidden bg-white lg:flex-row sm:mx-auto border border-gray-40">
        <div className="flex justify-end p-8 lg:py-32 lg:px-16 lg:pl-10 lg:w-1/2 0 ml-48 bg-blue-50">
          <div className="flex flex-col items-start justify-center w-full lg:max-w-lg">
            <h2 className="text-xl font-bold text-blue-900">
              CALL NOW: 650-793-8244
            </h2>
            <p className="py-3 mb-3 text-gray-600 lg:text-xl">
              Call us today to get your windows sparkling clean windows without
              hassle and worry-free.
            </p>
            <h2 className="text-xl font-bold uppercase text-blue-900">
              Request a Quote
            </h2>
            <p className="py-3 mb-3 text-gray-600 lg:text-xl">
              For window cleaning, or any of our other services, click here.
            </p>
            <h2 className="text-xl font-bold uppercase text-blue-900">
              Area Served
            </h2>
            <p className="py-3 mb-3 text-gray-600 lg:text-xl">
              Santa Cruz, Capitola, Aptos
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1578554700872-ef0e27c46d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2934&amp;q=80"
            alt="Hero Image"
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
        </div>

        {/* YOU’RE ONE STEP AWAY…
CALL NOW: (720) 442-3260
Call now to get your windows sparkling clean the way you want them without hassle and worry free!
REQUEST AN ESTIMATE
Click here to request an estimate for window cleaning and/or gutter cleaning
SERVING THE FOLLOWING AREAS
Boulder, Broomfield, Berthoud, Brighton, Erie, Firestone, Frederick, Johnstown, Lafayette, Longmont, Louisville, Loveland, Lyons, Mead, Niwot, Northglenn, Superior, Thornton, Westminster */}
      </section>
    </>
  );
};

export default Cta;
