import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Contact: NextPage = () => {
  return (
    <>
      <div className="py-10 bg-white md:py-16">
        <div className="px-10 mx-auto max-w-7xl md:px-16">
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-4xl font-black text-blue-950 mb-6 lg:text-4xl text-center md:mt-2">
              Request A Quote
            </h2>
          </div>
          <form className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-lg"
              >
                First name
              </label>
              <input
                name="first-name"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-lg"
              >
                Last name
              </label>
              <input
                name="last-name"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-lg"
              >
                Address
              </label>
              <input
                name="address"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-lg"
              >
                City
              </label>
              <input
                name="city"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-lg"
              >
                Email
              </label>
              <input
                name="email"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-lg"
              >
                Phone
              </label>
              <input
                name="phone"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>

            <div className="sm:col-span-2 text-lg">
              <h2 className="font-semibold text-gray-700 my-2">
                Services desired:
              </h2>
              <p>
                <input type="checkbox" value="Window Washing" />
                <span className="ml-2 font-medium text-gray-500">
                  Window Washing
                </span>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Power Washing"
                  name="Power Washing"
                />
                <span className="ml-2 font-medium text-gray-500">
                  Power Washing
                </span>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Screen Washing"
                  name="Screen Washing"
                />
                <span className="ml-2 font-medium text-gray-500">
                  Screen Washing
                </span>
              </p>
              <p>
                <input type="checkbox" value="Gutters" name="gutters" />
                <span className="ml-2 font-medium text-gray-500">Gutters</span>
              </p>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="inline-block mb-2 text-lg font-medium text-gray-500 sm:text-lg"
              >
                Message
              </label>
              <textarea
                name="message"
                className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              ></textarea>
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button className="inline-block px-8 py-3 text-lg font-semibold text-center text-white transition duration-100 bg-blue-600 rounded-md outline-none hover:bg-blue-500 active:bg-blue-700 ring-blue-300 md:text-lg  w-full mx-auto">
                Send Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
