import React from "react";
import { LeftArrow } from "../components/LeftArrow";
import { RightArrow } from "../components/RightArrow";
import { SketchCarousel } from "../components/SketchCarousel";
import { Container } from "postcss";

function ProcessPage() {
  return (
    <div className="mx-auto h-full">
      <LeftArrow href=".."></LeftArrow>
      <RightArrow href="../software"></RightArrow>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl p-4">Process and Ideation</h1>
        <div className="w-3/5 h-3/5 p-2">
          <SketchCarousel></SketchCarousel>
        </div>
      </div>
    </div>
  );
}

export default ProcessPage;
