'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Logo = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Or render a placeholder image

    const logoSrc =
        theme === 'dark'
            ? '/assets/plt-gamma-logo-weiß.png'
            : '/assets/plt-gamma-logo.png';

    return (
        <Link href="/" className="w-40 shrink-0 grow-0">
            <Image
                src={logoSrc}
                width={1700}
                height={390}
                alt="Placetel Logo"
            />
        </Link>
    );
};

export default Logo;
