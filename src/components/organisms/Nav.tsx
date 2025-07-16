import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="sticky inset-x-0 top-0 p-2 z-50">
      <div className="w-full rounded-xl overflow-hidden bg-black/90 px-4 py-3 text-neutral-200 flex justify-between items-center">
        <Link href="/" className="w-40 shrink-0">
          <Image
            src="/assets/plt-gamma-logo-weiß.png"
            width={1700}
            height={390}
            alt="Placetel Logo"
          />
        </Link>

        <ul className="flex gap-12 items-center">
          <div className="flex items-center">
            <Button variant="ghost">
              <Link href="/ai-agents">
                <li>Ai Agents</li>
              </Link>
            </Button>

            <Button variant="ghost">
              <Link href="/ai-pro">
                <li>Ai Pro</li>
              </Link>
            </Button>
          </div>

          <div className="h-8 w-px bg-neutral-600" />

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
