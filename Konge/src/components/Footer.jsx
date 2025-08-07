import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Konge Parents Primary School
          </h3>
          <p>
            Empowering the next generation with quality education and values.
            Located in the heart of our community, we nurture young minds for a
            brighter future.
          </p>
        </div>

        {/* Helpful Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Helpful Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/admissions" className="hover:underline">
                Admissions
              </a>
            </li>
            <li>
              <a href="/academics" className="hover:underline">
                Academics
              </a>
            </li>
            <li>
              <a href="/news" className="hover:underline">
                News & Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Kampala, Uganda
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +256 700 000000
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@kongeparents.ac.ug
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-10 border-t border-white/30 pt-6">
        <p>
          &copy; {new Date().getFullYear()} Konge Parents Primary School. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
