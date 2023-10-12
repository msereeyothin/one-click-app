import React from "react";
import { LeftArrow } from "../components/LeftArrow";

function BuyPage() {
  return (
    <>
      <LeftArrow href="../software"></LeftArrow>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p>This product is not for sale</p>
      </div>
    </>
  );
}

export default BuyPage;
