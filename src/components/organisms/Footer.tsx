import { Bot } from "lucide-react";
import Link from "next/link";
import Logo from "../atoms/Logo";

const Footer = () => {
  return (
    <footer className=" border-t border-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-8">
            <Logo />

            <p className="text-slate-400">
              Die Zukunft der Geschäftstelefonie ist AI.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-white text-xs uppercase">Produkte</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link
                  href="/smartdesk"
                  className="hover:text-white transition-colors"
                >
                  AI SmartDesk
                </Link>
              </li>
              <li>
                <Link
                  href="/pro"
                  className="hover:text-white transition-colors"
                >
                  AI Pro
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" mb-4 text-white text-xs uppercase">Unternehmen</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className=" mb-4 text-white text-xs uppercase">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
