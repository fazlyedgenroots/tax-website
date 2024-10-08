import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-3 xl:px-0">
      <div className="container-x py-8 mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-5/12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Zillur Tax, Accounting & Insurance{" "}
            <span className="text-primary">Inc.</span>
          </h2>
          <p className="mb-4">
            88-11A, 169th St.(2nd fl) Jamaica, NY 11432 <br />
            Phone: (646) 322-3254 <br />
            Email:{" "}
            <Link
              href="mailto:zillurincometaxnyc@gmail.com"
              className="text-white hover:text-white"
            >
              zillurincometaxnyc@gmail.com
            </Link>
          </p>
          <div className="flex space-x-2">
            <a
              href="#"
              className="text-white hover:text-white bg-gray-800 p-1 rounded"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white hover:text-white bg-gray-800 p-1 rounded"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-white hover:text-white bg-gray-800 p-1 rounded"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/12">
          <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            {siteConfig.navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-2/12">
          <h3 className="text-xl font-semibold text-white mb-4">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/tax-and-account" className="hover:underline">
                Tax & Accounting
              </Link>
            </li>
            <li>
              <Link href="/insurance" className="hover:underline">
                Insurance
              </Link>
            </li>
            <li>
              <Link href="/real-estate" className="hover:underline">
                Real Estate
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-3/12">
          <h3 className="text-xl font-semibold text-white mb-4">Lets Talk!</h3>
          <p className="mb-4">
            If your need any services or have any questions, feel free to
            contact us.
          </p>
          <a
            href="#"
            className="inline-block bg-transparent border border-gray-300 text-gray-300 py-2 px-4 rounded hover:bg-gray-800 hover:text-white"
          >
            Contact Us →
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center container-x">
        <p>
          &copy; 2023 -{" "}
          <a href="#" className="text-primary hover:underline">
            Zillur Tax & Insurance
          </a>{" "}
          - All Rights Reserved by codemine.com
        </p>
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Services
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
