import type { NextPage } from "next";

const ServiceArea: NextPage = () => {
  return (
    <div className="container w-3/4 mx-auto">
      <h1 className="text-4xl font-black text-blue-950 text-center my-14">
        Service Area
      </h1>
      <p className="text-xl mb-48 text-center">
        Currently we are serving Santa Cruz/Capitola/Aptos areas.
      </p>
    </div>
  );
};

export default ServiceArea;
