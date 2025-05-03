"use client";

import { memo, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { navLinks } from '@/data/data';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const NavbarPage = memo(function NavbarPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="absolute inset-0 -z-10 bg-background" />
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navLinks} />
          <div className="flex items-center gap-3">
            <ModeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-3">
              <ModeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
          >
            {navLinks.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={closeMobileMenu}
                className="relative text-foreground/60"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
});

export default NavbarPage;