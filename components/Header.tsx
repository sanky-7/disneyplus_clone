import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "@/components/ThemeToggler"
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 dark:bg-gradient-to-t dark:from-gray-200/0 dark:via-gray-900/25 dark:to-gray-900">
      <Link href="/" className="mr-10 flex flex-row">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          height={100}
          width={120}
          className="cursor-pointer invert-0 dark:invert"
        />
        <h1 className="text-[30px] ml-1">+</h1>
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
