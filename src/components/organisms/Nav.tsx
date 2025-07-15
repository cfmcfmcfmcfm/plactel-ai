import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="fixed inset-x-0 top-0 p-2 z-50">
      <div className="w-full rounded-xl overflow-hidden bg-black/90 px-4 py-3 text-neutral-200 flex justify-between items-center">
        <ul className="flex gap-4 items-center">
          <Link href="/">
            <Image
              src="/assets/plt-gamma-logo-weiß.png"
              width={1700}
              height={390}
              className="w-48"
              alt=""
            />
          </Link>
        </ul>

        <ul className="flex gap-12 items-center">
          <div className="flex gap-4 items-center">
            <Link href="/ai-agents" className="hover:text-white transition">
              <li>Ai Agents</li>
            </Link>

            <Link href="/ai-pro" className="hover:text-white transition">
              <li>Ai Pro</li>
            </Link>
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
