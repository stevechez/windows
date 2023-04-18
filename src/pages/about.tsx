import type { NextPage } from "next";
import Image from "next/image";
const about: NextPage = () => {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-black text-blue-950 text-center mb-8">
        About Us
      </h1>
      <div className="w-10/12 mx-auto">
        <div className="mb-8 md:float-right md:m-4">
          <Image
            src="/images/windowcleaner2.webp"
            alt="About Us Image"
            width={300}
            height={300}
            className="w-96 h-96 object-cover"
          />
        </div>

        <p className="text-lg mb-4 w-full">
          Welcome to A Shine On Windows, the premier window washing company
          serving the Santa Cruz/Capitola/Aptos area. Our team of experienced
          professionals is committed to providing our customers with top-quality
          window cleaning services that are reliable, efficient, and affordable.
        </p>

        <p className="text-lg mb-4">
          At A Shine On Windows, we believe that clean windows can make a huge
          difference in the appearance and value of your property. Our team uses
          only the best equipment and materials to ensure that your windows are
          spotless and streak-free every time. We take pride in our work and are
          committed to exceeding your expectations.
        </p>
        <p className="text-lg mb-4">
          Our company is locally owned and operated, and we have been serving
          the Santa Cruz/Capitola/Aptos. We have built our reputation on
          providing exceptional customer service and high-quality workmanship.
          We understand that each of our customers has unique needs and
          preferences, which is why we offer a range of services that can be
          customized to meet your specific requirements.
        </p>
        <p className="text-lg mb-4">
          Our team consists of highly trained and experienced professionals who
          are passionate about what they do. We take the time to listen to our
          customers and understand their needs, so we can provide personalized
          services that exceed their expectations. We are dedicated to providing
          a seamless and stress-free experience for our customers, from the
          moment you contact us until the job is complete.
        </p>
        <p className="text-lg mb-4">
          At A Shine On Windows, we are committed to sustainability and the
          environment. That is why we use eco-friendly cleaning products and
          methods whenever possible, to minimize our impact on the environment.
          We believe in giving back to our community, and we support local
          charities and organizations that make a difference in the lives of
          people in our community.
        </p>
        <p className="text-lg mb-4">
          Thank you for considering A Shine On Windows for your window cleaning
          needs. We are confident that we can provide you with exceptional
          service and quality workmanship that will leave your windows sparkling
          clean. Contact us today to schedule your window cleaning appointment.
        </p>
      </div>
    </div>
  );
};

export default about;
