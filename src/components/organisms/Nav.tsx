import Link from "next/link";
import { Button } from "../ui/button";

const Nav = () => {
  return (
    <nav className="fixed inset-x-0 top-0 p-2 z-50">
      <div className="w-full rounded-xl overflow-hidden bg-black p-4 text-white flex justify-between items-center">
        <ul className="flex gap-4 items-center">
          <Link href="/">Placetel.ai</Link>
          <Link href="/ai-agents">
            <li>Ai Agents</li>
          </Link>
          <Link href="/ai-pro">
            <li>Ai Pro</li>
          </Link>
        </ul>

        <ul className="flex gap-4 items-center">
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
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
