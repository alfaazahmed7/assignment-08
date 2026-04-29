import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import footerImage from "@/assets/logo.png"

const Footer = () => {
    return (
        <footer className='bg-gradient-to-br from-[#0b1220] via-[#111827] to-[#1f3b4d] md:pt-12 md:pb-6'>
            <div className='w-11/12 sm:w-10/12 mx-auto'>

                {/* Top Section */}
                <div className='grid gap-3 md:gap-10 md:grid-cols-2 lg:grid-cols-3 items-center text-center lg:justify-items-center md:text-left'>

                    {/* Brand */}
                    <div>
                        <div >
                            <Link href={"/"}>
                                <Image
                                    src={footerImage}
                                    alt="tilix logo"
                                    width={100}
                                    height={80}
                                    className='mx-auto md:mx-0'
                                />
                            </Link>
                        </div>

                        <p className='text-white opacity-70 text-sm sm:text-base max-w-md mx-auto md:mx-0'>
                            Tilix is your modular tile-based space for organizing, exploring, and managing everything that matters in one clean grid experience.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div>
                        <p className='text-white text-lg font-medium mb-4'>
                            Social Links
                        </p>

                        <div className="flex justify-center md:justify-start gap-4">
                            <ul className="flex items-center gap-4">

                                <li className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-lg sm:text-xl cursor-pointer hover:scale-105 active:scale-95">
                                    <FaInstagram />
                                </li>

                                <li className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-lg sm:text-xl cursor-pointer hover:scale-105 active:scale-95">
                                    <FaFacebookF />
                                </li>

                                <li className='w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-lg sm:text-xl cursor-pointer hover:scale-105 active:scale-95'>
                                    <FaXTwitter />
                                </li>

                                <li className='w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-[#0f1117] text-lg sm:text-xl cursor-pointer hover:scale-105 active:scale-95'>
                                    <FaLinkedinIn />
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className=''>
                        <p className='text-white text-lg font-medium mb-4'>
                            Contact Us
                        </p>

                        <div className='space-y-2 text-white opacity-70 text-sm sm:text-base'>
                            <p>Email: support@tilix.com</p>
                            <p>Phone: +880 1234-567890</p>
                            <p>Location: Bangladesh</p>
                        </div>

                        <div className='mt-4 flex justify-center md:justify-start'>
                            <button className='flex items-center gap-2 px-5 py-2.5 bg-white text-[#244D3F] text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-100 active:scale-95'>
                                <HiOutlineMail size={18} />
                                Contact Now
                            </button>
                        </div>
                    </div>

                </div>

                {/* Divider */}
                <hr className='border-white opacity-10 my-5 md:my-10' />

                {/* Bottom Section */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-1 md:gap-4 text-center md:text-left'>
                    <p className='text-white opacity-70 text-sm'>
                        © 2026 Tilix. All rights reserved.
                    </p>

                    <ul className='flex flex-wrap justify-center md:justify-start gap-4 text-white opacity-70 text-sm cursor-pointer'>
                        <li className='hover:opacity-100'>Privacy Policy</li>
                        <li className='hover:opacity-100'>Terms of Service</li>
                        <li className='hover:opacity-100'>Cookies</li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;