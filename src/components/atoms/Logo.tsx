'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { useTheme } from "next-themes";

const Logo = () => {
    // const { theme } = useTheme();

    return (
        <Link href="/" className="w-40 shrink-0 grow-0">
            <Image
                // src={
                //   theme === "dark"
                //     ? "/assets/plt-gamma-logo-weiß.png"
                //     : "/assets/plt-gamma-logo.png"
                // }
                src={'/assets/plt-gamma-logo-weiß.png'}
                width={1700}
                height={390}
                alt="Placetel Logo"
            />
        </Link>
    );
};

export default Logo;
