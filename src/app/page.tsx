"use client";
import { RightArrow } from "./components/RightArrow";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      <RightArrow href="../process"></RightArrow>
      <div className="ml-20 p-5 mx-auto h-full flex items-center justify-center min-h-screen">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-4xl">Introducing the OneClick Mouse</p>
          <div className="py-5 flex-col">
            <p
              className={`text-xl mr-4 transition-opacity duration-3000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              One Button
            </p>
            <p
              className={`text-xl mr-4 transition-opacity delay-1000 duration-3000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Limited Clicks
            </p>
            <p
              className={`text-xl mr-4 transition-opacity delay-2000 duration-3000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Make them count.
            </p>
          </div>
          <div
            className={`text-xl mr-4 transition-opacity delay-3000 duration-3000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src="/angle1.png"
              alt="mouse angle 1"
              width={700}
              height={700}
            ></Image>
          </div>
        </div>
      </div>
      <div className="py-10 p-5 mx-auto h-full flex items-center justify-center min-h-screen">
            <Image
              src="/diagram.png"
              alt="diagram"
              width={900}
              height={900}
            ></Image>
          </div>
    </>
  );
}
