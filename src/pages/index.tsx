import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Content from "@/components/Content";
import Cta from "@/components/Cta";
import ServicesFaq from "@/components/ServicesFaq";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Content />
      <ServicesFaq />
      <Cta />
    </>
  );
}
