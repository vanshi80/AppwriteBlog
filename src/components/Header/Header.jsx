import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        { name: 'Home', slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='py-2 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg'> {/* Reduced padding from py-4 to py-2 */}
            <Container>
                <nav className='flex items-center justify-between'>
                    <Link to='/' className='mr-8'>
                        <Logo width='50px' /> {/* Reduced logo size */}
                    </Link>
                    <ul className='hidden md:flex space-x-6 text-white'>
                        {navItems.map((item) =>
                            item.active && (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='px-4 py-2 text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-200'> {/* Reduced padding inside buttons */}
                                        {item.name}
                                    </button>
                                </li>
                            )
                        )}
                        {authStatus && (
                            <li>
                                < LogoutBtn />
                            </li>
                        )}
                    </ul>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            className="text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                            onClick={toggleMenu}
                        >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                    <ul className='flex flex-col mt-2 space-y-2 text-white'>
                        {navItems.map((item) =>
                            item.active && (
                                <li key={item.name}>
                                    <button
                                        onClick={() => {
                                            navigate(item.slug);
                                            toggleMenu(); // Close the menu after navigation
                                        }}
                                        className='w-full px-4 py-2 text-sm font-semibold text-left rounded-lg hover:bg-blue-800 transition-colors duration-200'
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            )
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </div>
            </Container>
        </header>
    );
}

export default Header;
