import ArrowSvg from "./ArrowSvg";
import Link from "next/link";
import { FC } from 'react';

interface RightArrowProps {
  href: string;
}

export const RightArrow: FC<RightArrowProps> = ({ href }) => {
  return (
    <>
      <div className="rotate-180 fixed right-0 align-middle transition hover:bg-slate-700">
        <Link href={href}>
          <ArrowSvg></ArrowSvg>
        </Link>
      </div>
    </>
  );
};
