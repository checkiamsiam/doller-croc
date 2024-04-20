import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Tokenomics",
    href: "/#tokenomics",
  },
  {
    label: "How to Buy",
    href: "/#how-to-buy",
  },
];

const NavBar = () => {
  return (
    <div className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 w-full z-50 px-2">
      <nav className="max-w-6xl mx-auto border-2 border-black rounded-full px-5 py-2 bg-secondary shadow-primaryShadow">
        <div className="flex items-center justify-between gap-4">
          {/* Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="text-base  text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo/logo.png"
              alt="logo"
              width={170}
              height={65}
              priority
            />
          </Link>

          {/* Social  */}
          <div className="flex justify-center items-center gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-white border-2 border-black shadow-primaryShadow rounded-full flex justify-center items-center"
            >
              <img src="/icons/twitter.png" alt="twitter" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white border-2 border-black shadow-primaryShadow rounded-full flex justify-center items-center"
            >
              <img src="/icons/telegram.png" alt="telegram" />
            </a>
            <button className="outline-none rounded-full border-2 border-black py-3 px-6">
              BUY $CROC
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
