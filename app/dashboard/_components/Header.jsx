"use client";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <header className=" flex items-center justify-between p-5 shadow-sm">
      <Image
        src="/logo.svg"
        width={100}
        height={100}
        alt="logo"
        className=" w-[120px]  md:w-[130px] "
      />

      <ul className=" hidden  md:flex gap-x-10 font-medium">
        <li
          className={`hover:text-primary transition-all duration-150 cursor-pointer ${
            path == "/dashboard" ? "text-blue-700 font-bold" : "text-black"
          }`}
        >
          DashBoard
        </li>
        <li
          className={`hover:text-primary transition-all duration-150 cursor-pointer ${
            path == "/dashboard/upgrade"
              ? "text-blue-700 font-bold"
              : "text-black"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary transition-all duration-150 cursor-pointer ${
            path == "/dashboard/questions"
              ? "text-blue-700 font-bold"
              : "text-black"
          }`}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary transition-all duration-150 cursor-pointer ${
            path == "/dashboard/how-it-work"
              ? "text-blue-700 font-bold"
              : "text-black"
          }`}
        >
          How it Works?
        </li>
      </ul>
      <UserButton />
    </header>
  );
};

export default Header;
