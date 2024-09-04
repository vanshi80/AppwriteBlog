import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <section className="relative overflow-hidden py-6 bg-blue-600 border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex justify-center">
                        <Logo />
                    </div>
                    <div className="flex justify-center md:space-x-12">
                        <div className="text-center md:text-left">
                            <h3 className="text-xs font-semibold text-white mb-2 uppercase">
                                Company
                            </h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xs font-semibold text-white mb-2 uppercase">
                                Support
                            </h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xs font-semibold text-white mb-2 uppercase">
                                Legals
                            </h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-xs text-white hover:text-gray-300"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-6 text-center text-white text-xs">
                    &copy; 2023. All Rights Reserved by DevUI.
                </div>
            </div>
        </section>
    );
}

export default Footer;
