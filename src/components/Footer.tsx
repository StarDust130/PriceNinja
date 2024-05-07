import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-20 rounded-2xl border-dashed ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center  sm:justify-start">
            <div className="flex  items-center space-x-2">
              <Link className="text-2xl font-bold " href="/">
                Price<span className="text-red-500">Ninja</span>
              </Link>
            </div>
          </div>

          <p className="mt-4 text-center text-sm  lg:mt-0 lg:text-right">
            Copyright{" "}
            <span className="hover:underline text-yellow-300 ">
              <Link href={"https://github.com/StarDust130"} target="_blank">
                {" "}
                StarDust
              </Link>
            </span>
            🌟&copy; {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
