import { Bot } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" border-t border-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-xl ">Placetel AI</span>
            </Link>
            <p className="text-slate-400">
              Die Zukunft der Geschäftstelefonie ist AI.
            </p>
          </div>
          <div>
            <h4 className=" mb-4 text-white">Produkte</h4>
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
            <h4 className=" mb-4 text-white">Unternehmen</h4>
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
            <h4 className=" mb-4 text-white">Legal</h4>
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
