import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "../atoms/Logo";

const Nav = () => {
  return (
    <nav className="sticky inset-x-0 top-0 p-2 z-50">
      <div className="w-full rounded-xl overflow-hidden bg-gray-800 px-4 py-3 text-gray-200 flex justify-between items-center">
        <Logo />

        <ul className="flex gap-12 items-center">
          <div className="flex items-center">
            <Button variant="ghost">
              <Link href="/ai-smartdesk">
                <li>Ai SmartDesk</li>
              </Link>
            </Button>

            <Button variant="ghost">
              <Link href="/ai-pro">
                <li>Ai Pro</li>
              </Link>
            </Button>
          </div>

          <div className="h-8 w-px bg-gray-400" />

          <div className="flex gap-4 items-center">
            <li>
              <Button variant="outline">
                <Link href="/">Contact Sales</Link>
              </Button>
            </li>

            <li>
              <Button variant={"secondary"}>
                <Link href="/">Start free trial</Link>
              </Button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
