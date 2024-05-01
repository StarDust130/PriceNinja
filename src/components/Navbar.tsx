import { Heart, Search, User } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full h-20 flex justify-between  items-center px-20">
      {/* Left side logo and text */}
      <div className="flex items-center space-x-2">
        <Link className="text-2xl font-bold text-gray-800 " href="/">
          Price<span className="text-red-500">Wise</span>
        </Link>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-5">
        <Link href="/">
          <Search className="w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-800" />
        </Link>
        <Link href="/">
          <Heart className="w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-800" />
        </Link>
        <Link href="/">
          <User className="w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-800" />
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
