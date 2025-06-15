// src/components/NavItem.tsx
import Link from "next/link";

type NavItemProps = {
  text: string;
  href: string;
  active?: boolean;
};

const NavItem = ({ text, href, active }: NavItemProps) => {
  return (
    <Link className={`nav__link ${active ? "active" : ""}`} href={href}>
      {text}
    </Link>
  );
};

export default NavItem;