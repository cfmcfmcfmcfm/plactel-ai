'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../atoms/Logo';

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200 backdrop-blur-sm dark:border-slate-700">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Logo />

                    <div className="hidden items-center space-x-8 md:flex">
                        <Link
                            href="/ai-smartdesk"
                            className={cn(
                                'transition-colors hover:text-purple-600 dark:hover:text-purple-300',
                                pathname === '/ai-smartdesk'
                                    ? 'text-purple-700 dark:text-purple-500'
                                    : 'text-slate-500 dark:text-slate-400'
                            )}
                        >
                            AI SmartDesk
                        </Link>

                        <Link
                            href="/ai-pro"
                            className={cn(
                                'transition-colors hover:text-purple-600 dark:hover:text-purple-300',
                                pathname === '/ai-pro'
                                    ? 'text-purple-700 dark:text-purple-500'
                                    : 'text-slate-500 dark:text-slate-400'
                            )}
                        >
                            AI Pro
                        </Link>

                        <div className="flex gap-4">
                            <Button variant="outline">Demo ansehen</Button>

                            <Button>Kostenlos testen</Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
