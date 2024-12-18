"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        if (currentScrollY > 100) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    router.push(path);
  };

  const menuVariants = {
    hidden: {
      x: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Expertise", path: "/expertise" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`max-w-7xl fixed top-4 mx-auto inset-x-0 z-40 transition-all duration-300 ${
          isScrolled ? "w-[90%] bg-black/50 border" : "w-[95%] bg-transparent"
        } rounded-md lg:w-full ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0"
        } ${isMobileMenuOpen ? "hidden" : ""}`}
      >
        {/* Desktop Navigation */}
        <div className="hidden lg:block w-full">
          <div className="w-full flex relative justify-between px-4 py-3 rounded-md transition duration-200 mx-auto">
            <div className="flex flex-row gap-2 items-center">
              <Link
                href="/"
                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
              >
                <Image
                  src="/Plogo.png"
                  alt="Paddlelite Logo"
                  className="max-h-24 max-w-24 object-contain opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  width={84}
                  height={84}
                />
              </Link>
              <div className="flex items-center gap-1.5">
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="flex items-center justify-center text-lg font-bold leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="m-auto" asChild>
                <Link
                  className="text-xl text-white font-black [text-shadow:_0_0_2px_rgba(0,0,0,0.75)]"
                  href="/jobs"
                >
                  Job Board <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex h-full w-full items-center lg:hidden">
          <div className="flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200">
            <Link
              href="/"
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
            >
              <Image
                src="/Paddlelite Logo.png"
                alt="Paddlelite Logo"
                className="max-h-24 max-w-24 object-contain opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                width={33}
                height={33}
              />
              <span className="text-white font-bold">PaddleLift</span>
            </Link>

            <button onClick={toggleMobileMenu} className="text-white h-6 w-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-white h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16-7.2 16 16s-7.2 16-16 16z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-50 flex flex-col justify-center items-center"
          >
            <button
              onClick={toggleMobileMenu}
              className="absolute top-8 right-8 text-white"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-6.2 6.2-6.2 16.4 0 22.6L233.4 256l-68.2 68.2c-6.2 6.2-6.2 16.4 0 22.6 6.2 6.2 16.4 6.2 22.6 0L256 278.6l68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" />
              </svg>
            </button>

            <div className="space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.5,
                    },
                  }}
                >
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-white text-4xl font-bold"
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
