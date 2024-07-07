import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <Link
      href={"/"}
      className="px-24 font-bold text-lg h-[84px] w-full flex items-center"
    >
      <div>Opika</div>
    </Link>
  );
}
