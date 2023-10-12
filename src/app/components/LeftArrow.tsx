import ArrowSvg from "./ArrowSvg";
import Link from "next/link";
import { FC } from 'react';
import { IconButton } from "@material-tailwind/react";

interface LeftArrowProps {
  href: string;
}

export const LeftArrow: FC<LeftArrowProps> = ({ href }) => {
  return (
    <>
      <div className="fixed left-0 align-middle transition hover:bg-slate-700">
        <Link href={href}>
          <ArrowSvg></ArrowSvg>
        </Link>
      </div>
    </>
  );
};
