import type { NextPage } from "next";
import Image from "next/image";

const Services: NextPage = () => {
  return (
    <div className="container w-4/5 mx-auto py-10">
      <h1 className="text-4xl font-black text-blue-950 text-center mb-18">
        Our Services
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-12">
        <div className="mr-12">
          <p className="text-lg">
            At A Shine On Windows, we offer a range of window washing services
            to meet the needs of our customers in the Santa Cruz/Capitola/Aptos
            area. Our services are designed to provide you with sparkling clean
            windows that enhance the appearance and value of your property. Here
            are some of the services we offer:
          </p>
          <ol className="list-disc ml-6 mt-4">
            <li className="text-lg mb-4">
              Residential Window Washing: We offer residential window washing
              services for homes of all sizes. Our team of professionals will
              clean your windows inside and out, removing dirt, grime, and
              streaks to leave them crystal clear.
            </li>
            <li className="text-lg mb-4">
              Commercial Window Washing: We provide commercial window washing
              services for businesses and commercial properties of all types and
              sizes. We use the latest equipment and techniques to clean
              storefronts and more, ensuring that your windows look their best.
            </li>
            <li className="text-lg mb-4">
              Pressure Washing: In addition to window washing, we offer pressure
              washing services for concrete, brick, driveways, sidewalks,
              steps​, decks for your home or business. We can clean sidewalks,
              driveways, and more, removing dirt, grime, and stains to give your
              property a fresh, clean look.
            </li>
            <li className="text-lg mb-4">
              Screen Cleaning: We provide screen cleaning services for your
              windows and doors, removing dirt and dust to improve visibility
              and air flow.
            </li>
            <li className="text-lg mb-4">
              Screen Cleaning: We provide screen cleaning services for your
              windows and doors, removing dirt and dust to improve visibility
              and air flow.
            </li>
          </ol>
          {/* Gutter Cleaning: We offer gutter cleaning services to keep your gutters free of debris and functioning properly. Our team will remove leaves, twigs, and other debris from your gutters to prevent clogs and ensure proper drainage. */}
          Screen Cleaning: We provide screen cleaning services for your windows
          and doors, removing dirt and dust to improve visibility and air flow.
          <p className="text-lg mb-4">
            At A Shine On Windows, we pride ourselves on providing exceptional
            customer service and high-quality workmanship. We use only the best
            equipment and materials to ensure that your windows are cleaned to
            the highest standards. Contact us today to schedule your window
            washing service and experience the difference of Shine On Window
            Washing!
          </p>
        </div>
        <div className="text-center">
          <img
            className="rounded shadow-lg h=[300px] mb-12"
            src="/images/hero-image.jpg"
            // width={200}
            // height={500}
            alt=""
          />

          <img
            className="w-full h-48 rounded shadow-lg lg:rounded-none lg:shadow-none"
            src="/images/powerwash.jpg"
            // width={200}
            // height={300}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
