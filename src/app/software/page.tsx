import React from "react";
import { LeftArrow } from "../components/LeftArrow";
import { RightArrow } from "../components/RightArrow";
import { SoftwareCarousel } from "../components/SoftwareCarousel";
function SoftwarePage() {
  return (
    <>
      <LeftArrow href="../process"></LeftArrow>
      <RightArrow href="../buy"></RightArrow>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl p-2">OneClick app wireframes</h1>
        <p className="py-3"> OneClick app coming soon! </p>
        <div className="w-3/5 h-3/5 border border-black border-2 rounded-xl">
          <SoftwareCarousel></SoftwareCarousel>
        </div>
      </div>
    </>
  );
}

export default SoftwarePage;
