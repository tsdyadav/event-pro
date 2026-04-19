"use client";

import { Linkedin, Facebook, Dribbble, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c2d57] text-white px-[60px] pt-[60px] pb-[20px]">

      {/* TOP SECTION */}
      <div className="grid grid-cols-4  items-start">

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-[13px] tracking-[0.2em] font-semibold mb-6">
            QUICK LINKS
          </h4>
          <ul className="space-y-3 text-[14px] text-[#fafcfd]">
            <li>Home</li>
            <li>About us</li>
            <li>Blogs</li>
            <li>Venues</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-[13px] tracking-[0.2em] font-semibold mb-6">
            SUPPORT
          </h4>
          <ul className="space-y-3 text-[14px] text-[#cbd5e1]">
            <li>Help Center</li>
            <li>Report an Issue</li>
            <li>Documentation</li>
            <li>Live Chat Support</li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h4 className="text-[13px] tracking-[0.2em] font-semibold mb-6">
            LEGAL
          </h4>
          <ul className="space-y-3 text-[14px] text-[#cbd5e1]">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Data Processing</li>
          </ul>
        </div>

        {/* EMAIL SECTION (WIDER FIXED) */}
        <div className="flex justify-end">
          <div className="bg-white rounded-[20px] p-[40px] w-[900px]">

            <h3 className="text-[18px] font-semibold text-black mb-5">
              Signup to our Newsletter
            </h3>

            {/* INPUT + BUTTON */}
            <div className="flex items-center bg-[#f1eaee] rounded-full h-[56px] px-[6px]">

              <input
                type="email"
                placeholder="Enter Email address"
                className="flex-1 px-5 bg-transparent outline-none text-[14px] text-gray-700"
              />

              <button className="h-[44px] px-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[14px] font-semibold">
                Submit →
              </button>

            </div>

          </div>
        </div>

      </div>

      {/* DIVIDER (THICK FIXED) */}
      <div className="mt-[50px] border-t-[3px] border-[#ffffff40]"></div>

      {/* BOTTOM SECTION */}
      <div className="mt-[30px] flex items-center justify-between">

        {/* LOGO */}
        <div className="text-[26px] font-bold">
          DKG<span className="font-light">Pro</span>
        </div>

        {/* COPYRIGHT */}
        <p className="text-[14px] text-[#cbd5e1]">
          © 2025 Company Name. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4">

          <div className="w-[42px] h-[42px] rounded-full bg-[#173f73] flex items-center justify-center">
            <Linkedin size={18} />
          </div>

          <div className="w-[42px] h-[42px] rounded-full bg-[#173f73] flex items-center justify-center">
            <Facebook size={18} />
          </div>

          <div className="w-[42px] h-[42px] rounded-full bg-[#173f73] flex items-center justify-center">
            <Dribbble size={18} />
          </div>

          <div className="w-[42px] h-[42px] rounded-full bg-[#173f73] flex items-center justify-center">
            <X size={18} />
          </div>

        </div>

      </div>

    </footer>
  );
}