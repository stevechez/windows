import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Footer: NextPage = () => {
  return (
    <>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <section className="box-border ">
        <div className="leading-7 text-gray-90">
          <Link href="/" className="mb-4">
            <img
              src="/images/logo.png"
              width={200}
              height={82}
              alt="A Shine On Windows"
              className="w-56 mx-auto "
            />
          </Link>
          <div className="flex justify-center">
            <ul className="flex flex-row justify-center my-6 space-x-4 w-full">
              <li className="leading-7 text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0"></li>
              <li className=" mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:block">
                <Link
                  href="/privacy-policy"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:block">
                <Link
                  href="/terms"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 hidden md:block">
                <Link
                  href="/about"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  About
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 hidden md:block">
                <Link
                  href="/services"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Services
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 hidden md:block">
                <Link
                  href="/service-area"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Service Area
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 hidden md:block">
                <Link
                  href="/testimonials"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Testimonials
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 hidden md:block">
                <Link
                  href="/contact"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 py-8 mt-4 leading-7 text-center text-gray-600 border-t border-gray-200 px-10">
          <p className="box-border mt-0 text-sm border-0 border-solid">
            © 2023 A Shine On Windows. A subsidiary of Dunn Consulting. All
            Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
