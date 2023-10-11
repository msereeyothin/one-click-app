import React from "react";
import { LeftArrow } from "../components/LeftArrow";
import { RightArrow } from "../components/RightArrow";
import { ImageCarousel } from "../components/ImageCarousel";

function ProcessPage() {
  return (
    <div className="bg-slate-800 text-slate-100 mx-auto p-4 h-full">
      <LeftArrow href=".."></LeftArrow>
      <RightArrow href="../software"></RightArrow>
      <h1>Process and Ideation</h1>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-1/2 h-1/2">
          <ImageCarousel></ImageCarousel>
        </div>
      </div>
    </div>
  );
}

export default ProcessPage;
