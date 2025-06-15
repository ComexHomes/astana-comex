// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/logo.jpg"; // Make sure this path is correct
import NavItem from "./NavItem";

// Define types for menu items
interface MenuItem {
  text: string;
  href: string;
}

const MENU_LIST: MenuItem[] = [
  { text: "Home", href: "/" },
  { text: "Residences", href: "/residences" },
  { text: "Amenities", href: "/amenities" },
  { text: "Location", href: "/location" },
  { text: "Investors Guide", href: "/investorsguide" },
  { text: "Contact", href: "/contact" },
  { text: "Comex Homes", href: "https://www.comexhomes.ke/"  },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  return (
    <header>
      <nav className="nav">
        <Link href="/">
          <Image
            src='/001.jpg'
            className="nav-image"
            priority
            height={70}
            alt="Astana Residence logo"
            width={120} // Add width for better layout performance
          />
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className="nav__menu-bar"
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className={`${navActive ? "active" : ""} nav__menu-list`}
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              key={menu.text}
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;