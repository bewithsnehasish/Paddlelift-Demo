import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons from React Icons

const Footer = () => {
  return (
    <div className=" py-6">
      <div
        className="max-w-7xl mx-auto flex flex-col justify-center antialiased relative border border-dark-300 rounded-xl mb-5 bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-xl p-4"
        id="contact"
      >
        <div>
          <div className="space-y-4 p-4">
            <h1 className="text-3xl font-bold max-w-2xl leading-[110%] relative z-10">
              <Link
                href="/contact"
                className="text-primary hover:text-primary/80 border-b-2 border-primary hover:border-primary/80 transition-colors duration-200"
              >
                Contact Us
              </Link>{" "}
            </h1>
          </div>

          <div className="mt-8 p-4 border-t border-dark-200 dark:border-white/10 flex flex-col md:flex-row justify-between gap-4 md:gap-0">
            <div className="space-y-2">
              <h3 className="text-lg font-bold relative z-10">
                PaddleLift Pvt. Ltd.
              </h3>
              <p className="text-dark-200/70 dark:text-stone-200/70 relative z-10">
                &copy; 2024 | All rights reserved.
              </p>
            </div>

            <div className="flex justify-between gap-0 sm:gap-8">
              <ul className="space-y-2 relative z-10 text-sm sm:text-base">
                <li className="text-base sm:text-lg font-semibold">Navigate</li>
                <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                  <Link href="/about">About</Link>
                </li>
                <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                  <Link href="/services">Services</Link>
                </li>
                <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                  <Link href="/expertise">Expertise</Link>
                </li>
                <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>

              <ul className="space-y-2 relative z-10 text-sm sm:text-base">
                <li className="text-lg font-semibold">Socials</li>
                <li className="flex items-center gap-2 text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                  <FaLinkedin className="text-xl" />
                  <Link
                    href="https://www.linkedin.com/company/paddlelift/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="flex items-center gap-2 text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                  <FaInstagram className="text-xl" />
                  <Link
                    href="https://www.instagram.com/paddlelift/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <BackgroundBeams className="hidden sm:flex" />
        {/* Footer attribution */}
        <div className="py-4 text-center text-sm text-gray-500">
          Developed by{" "}
          <a
            href="https://www.getsetdeployed.com/"
            target="_blank"
            className="text-blue-500 hover:underline relative inline-block"
          >
            GetSetDeployed
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>{" "}
          . All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
