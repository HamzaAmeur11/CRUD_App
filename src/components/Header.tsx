"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data } = useSession();
  console.log("session header", data);

  return (
    <header className="bg-blue-700 p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href={"/"} className="text-2xl font-bold text-white">
          MY BLOGS
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href={"/blogs"} className="text-white hover:underline">
              BLOGS
            </Link>
          </li>
          <li>
            {data ? (
              <Link
                href={"/api/auth/signout"}
                className="text-white hover:underline"
              >
                Logout
              </Link>
            ) : (
              <Link
                href={"/api/auth/signin"}
                className="text-white hover:underline"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
