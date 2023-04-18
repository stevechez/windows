import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <section className="box-border pt-5 leading-7 text-gray-900 bg-white border-0 border-gray-200 border-solid pb-7">
        <div className="box-border px-4 mx-auto border-solid md:px-6 lg:px-8 max-w-7xl">
          <div className="ml-36 relative flex flex-col items-start justify-between leading-7 text-gray-900 border-0 border-gray-200 md:flex-row md:items-center">
            <Link
              href="/"
              className="left-0 flex items-center justify-center order-first w-full mb-4 font-medium text-gray-900 md:justify-start md:absolute md:w-64 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
            >
              <img
                src="/images/logo.png"
                width={200}
                height={82}
                alt="A Shine On Windows"
              />
            </Link>
            <ul className="box-border flex mx-auto my-6 space-x-6">
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0"></li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                <Link
                  href="/privacy-policy"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                <Link
                  href="/terms"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                <Link
                  href="/about"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  About
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                <Link
                  href="/services"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Services
                </Link>
              </li>
              <li className="relative mt-2 leading-7 text-left text-gray-900 border-0 border-gray-200 md:border-b-0 md:mt-0">
                <Link
                  href="/contact"
                  className="box-border items-center block w-full px-4 text-base font-normal leading-normal text-gray-900 no-underline border-solid cursor-pointer hover:text-blue-600 focus-within:text-blue-700 sm:px-0 sm:text-left"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* <div className="box-border right-0 flex justify-center border-solid md:w-auto md:justify-end md:absolute md:mt-0">
              <div className="group cursor-pointer relative inline-block w-18 mt-3 ml-12 text-center">
                <Link
                  href="#_"
                  className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer"
                >
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0h24v24H0z" stroke="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3V3h-3a5 5 0 00-5 5v2H7"></path>
                  </svg>
                </Link>
              </div> */}

            {/* second */}
            {/* <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="group cursor-pointer relative inline-block w-48">
                  <Link
                    href="#_"
                    className="inline-flex items-center leading-7 text-gray-900 no-underline border-0 border-gray-200 cursor-pointer"
                  >
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0h24v24H0z" stroke="none"></path>
                      <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M16.5 7.5v.001"></path>
                    </svg>
                  </Link>
                  <div className="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none">
                    Coming Soon
                    <svg
                      className="absolute text-black h-2 w-full left-0 top-full"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                      xmlSpace="preserve"
                    >
                      <polygon
                        className="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
        <div className="pt-4 mt-4 leading-7 text-center text-gray-600 border-t border-gray-200 md:mt-5 md:pt-5 md:mt-6 md:pt-6">
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
