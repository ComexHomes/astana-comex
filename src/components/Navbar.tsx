// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import TourModal from "./TourModal";

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
  { text: "Comex Homes", href: "https://www.comexhomes.ke/" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const [tourOpen, setTourOpen] = useState<boolean>(false);

  return (
    <>
      <header>
        <nav className="nav">
          <Link href="/">
            <Image
              src="/ASTANA-RESIDENCE-LOGO.png"
              className="nav-image"
              priority
              height={70}
              alt="Astana Residence logo"
              width={120}
            />
          </Link>

          <div onClick={() => setNavActive(!navActive)} className="nav__menu-bar">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
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
            <div onClick={() => { setNavActive(false); }}>
              <button
                className="nav__link nav__tour-btn"
                onClick={() => setTourOpen(true)}
              >
                3D Tour
              </button>
            </div>
          </div>
        </nav>
      </header>

      <TourModal open={tourOpen} onClose={() => setTourOpen(false)} />
    </>
  );
};

export default Navbar;
