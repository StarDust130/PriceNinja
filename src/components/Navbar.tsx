import { Heart, Search, User } from "lucide-react";
import Link from "next/link";
import { Theme } from "./Theme";

const Navbar = () => {
  return (
    <header className="w-full h-20 flex justify-between   items-center px-5 md:px-20">
      {/* Left side logo and text */}
      <div className="flex  items-center space-x-2">
        <Link className="text-2xl font-bold " href="/">
          Price<span className="text-red-500">Wise</span>
        </Link>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-5">
        <Link href="/">
          <Search className="w-6 h-6 cursor-pointer " />
        </Link>
        <Link href="/">
          <Heart className="w-6 h-6 cursor-pointer " />
        </Link>
        <Link href="/">
          <User className="w-6 h-6 cursor-pointer " />
        </Link>
        <Theme />
      </div>
    </header>
  );
};
export default Navbar;
