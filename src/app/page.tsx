import Image from "next/image";
import { ImageCarousel } from "./components/ImageCarousel";
import ClickTracker from "./components/ClickTracker";
import { NavBar } from "./components/NavBar";
import { RightArrow } from "./components/RightArrow";

export default function Home() {
  return (
    <>
      <RightArrow href="../process"></RightArrow>
    </>
  );
}
