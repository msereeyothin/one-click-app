"use client";
import { useState, useEffect } from "react";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";

const ClickTracker = () => {
  const [clickCount, setClickCount] = useState(1000);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleClick = () => {
      setClickCount((count) => {
        if (count <= 1) {
          console.log("Click count has reached 0");
          handleOpen();
          return 0;
        }
        return count - 1;
      });
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="text-center text-blue-500">
      <h1>You have {clickCount} remaining clicks</h1>
      <>
        <Dialog open={open} handler={handleOpen} size="xxl">
          <DialogHeader>You ran out of clicks!</DialogHeader>
          <DialogBody divider>
            You only get 10 clicks! Better use them more wisely.
          </DialogBody>
        </Dialog>
      </>
    </div>
  );
};

export default ClickTracker;
