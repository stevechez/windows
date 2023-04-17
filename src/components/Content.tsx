import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

const Content: NextPage = () => {
  return (
    <>
      <section className="w-full py-4 bg-gray-50">
        <div className="px-10 mx-auto max-w-7xl">
          <div className="px-10 mb-8 mt-8 space-y-5 lg:px-0 lg:text-center lg:mb-10">
            <h2 className="text-4xl font-bold sm:text-5xl">Our Process</h2>
          </div>
          <div className="grid overflow-hidden lg:rounded-xl">
            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                <h3 className="text-xl font-semibold sm:text-4xl">
                  Spectacular Windows
                </h3>

                <p className="text-xl text-gray-600">
                  Window cleaning is a detailed process that requires a
                  systematic approach to ensure that each window is cleaned to a
                  high standard. The process usually starts with an assessment
                  of the windows to determine the most effective way to clean
                  them. This assessment takes into account factors such as the
                  type of window, the degree of dirt and grime buildup, and the
                  location of the windows.
                </p>
              </div>
              <div className="overflow-hidden bg-gray-100 h-96">
                <img
                  src="/images/cleaning.webp"
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
                <img
                  src="/images/windowcleaner2.webp"
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                <h3 className="text-xl font-semibold sm:text-4xl">
                  Peace Of Mind
                </h3>
                <p className="text-xl text-left text-gray-600">
                  Once the assessment is complete, the cleaning process begins.
                  Typically, the first step involves removing any debris or
                  loose dirt from the window using a soft-bristled brush or a
                  special cleaning solution. This is followed by a thorough
                  washing of the window with a cleaning solution and a squeegee.
                  The squeegee is used to remove any excess cleaning solution
                  and to ensure that the window is completely clean and
                  streak-free.
                </p>
              </div>
            </div>

            <div className="grid items-center lg:grid-cols-2">
              <div className="flex flex-col items-start justify-center h-full py-16 pl-16 pr-16 space-y-4 bg-white lg:pr-20 lg:py-0">
                <h3 className="text-xl font-semibold sm:text-4xl mt-6">
                  The Difference Is Clear
                </h3>
                <p className="text-xl text-gray-600">
                  Finally, the windows are dried using a lint-free cloth or
                  chamois to remove any remaining moisture and to leave the
                  windows looking shiny and clean. For particularly difficult
                  jobs, such as cleaning windows on tall buildings, specialized
                  equipment such as ladders, scaffolding, or water-fed poles may
                  be required to ensure the safety of the window cleaning
                  professionals and to achieve the desired level of cleanliness.
                  Overall, the window cleaning process is a detailed and
                  thorough process that requires skill, experience, and
                  attention to detail to achieve the best results.
                </p>
              </div>
              <div className="bg-gray-100 h-96">
                <img
                  src="/images/windowcleaner1.webp"
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
