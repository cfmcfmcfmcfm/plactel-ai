import Link from 'next/link';
// import Logo from '@/components/atoms/Logo';
import { ModeToggle } from '@/components/atoms/ModeToggle';

const Footer = () => {
    return (
        <footer className="border-t py-12 backdrop-blur-sm dark:border-slate-700">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-8">
                        {/* <Logo /> */}
                        <ModeToggle />

                        <p className="text-slate-500 dark:text-slate-400">
                            Die Zukunft der Geschäftstelefonie ist AI.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-xs uppercase">Produkte</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li>
                                <Link
                                    href="/smartdesk"
                                    className="transition-colors hover:text-slate-950 dark:hover:text-slate-100"
                                >
                                    AI SmartDesk
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pro"
                                    className="transition-colors hover:text-slate-950 dark:hover:text-slate-100"
                                >
                                    AI Pro
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-xs uppercase">Unternehmen</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-slate-950 dark:hover:text-slate-100"
                                >
                                    Über uns
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-slate-950 dark:hover:text-slate-100"
                                >
                                    Kontakt
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-xs uppercase">Legal</h4>
                        <ul className="space-y-2 text-slate-500 dark:text-slate-400">
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-slate-950 dark:hover:text-slate-100"
                                >
                                    Impressum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="transition-colors hover:text-slate-950 dark:hover:text-slate-100"
                                >
                                    Datenschutz
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* 
                    <div className="col-span-full">
                        <ModeToggle />
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
