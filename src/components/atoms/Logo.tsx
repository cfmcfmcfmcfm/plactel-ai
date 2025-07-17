import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="w-40 shrink-0 grow-0">
      <Image
        src="/assets/plt-gamma-logo-weiß.png"
        width={1700}
        height={390}
        alt="Placetel Logo"
      />
    </Link>
  );
};

export default Logo;
