"use client";

import { memo } from "react";
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { footerLinks } from "@/data/data";

// Animation variants defined outside component to prevent recreation on each render
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Social icon mapping for cleaner rendering
const SocialIcon = ({ icon, size = 18 }) => {
  switch (icon) {
    case "facebook":
      return <IconBrandFacebookFilled size={size} />;
    case "instagram":
      return <IconBrandInstagramFilled size={size} />;
    case "linkedin":
      return <IconBrandLinkedinFilled size={size} />;
    default:
      return null;
  }
};

const Footer = () => {
  // Dynamic year calculation instead of hardcoded value
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-16 pb-8 border-t border-foreground/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div variants={childVariants}>
            <Link href="/" className="flex items-center text-foreground mb-6">
              <Image
                src="/logo.webp"
                alt="CreativeWebPro Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <span className="ml-3 text-xl font-bold">CreativeWebPro</span>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-xs">
              Where Cosmic Insight Meets Digital Design.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {footerLinks.social.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors hover:scale-125 inline-flex items-center justify-center w-10 h-10 rounded-full border border-foreground/10 hover:border-foreground/30 bg-background"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SocialIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={childVariants}>
            <h3 className="text-foreground font-semibold text-lg mb-6 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.link}
                    className="text-foreground/70 hover:text-foreground inline-flex hover:translate-x-1 transform transition-transform"
                  >
                    <span className="border-b border-transparent hover:border-foreground transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={childVariants}>
            <h3 className="text-foreground font-semibold text-lg mb-6 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.link}
                    className="text-foreground/70 hover:text-foreground inline-flex hover:translate-x-1 transform transition-transform"
                  >
                    <span className="border-b border-transparent hover:border-foreground transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={childVariants}>
            <h3 className="text-foreground font-semibold text-lg mb-6 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start text-foreground/70 hover:text-foreground transition-colors group">
                <IconMapPin className="flex-shrink-0 mt-1 w-5 h-5 group-hover:text-primary-500 transition-colors" />
                <span className="ml-3">{footerLinks.contact.address}</span>
              </li>
              <li className="flex items-start text-foreground/70 hover:text-foreground transition-colors group">
                <IconMail className="flex-shrink-0 mt-1 w-5 h-5 group-hover:text-primary-500 transition-colors" />
                <Link
                  href={`mailto:${footerLinks.contact.email}`}
                  className="ml-3"
                >
                  {footerLinks.contact.email}
                </Link>
              </li>
              <li className="flex items-start text-foreground/70 hover:text-foreground transition-colors group">
                <IconPhone className="flex-shrink-0 mt-1 w-5 h-5 group-hover:text-primary-500 transition-colors" />
                <Link
                  href={`tel:${footerLinks.contact.phone}`}
                  className="ml-3"
                >
                  {footerLinks.contact.phone}
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center text-foreground/70"
        >
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} CreativeWebPro. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(Footer);
