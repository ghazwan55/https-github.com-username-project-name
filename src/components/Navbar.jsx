import React from 'react';
import Logo from '../assets/logo.png';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBook } from 'react-icons/fa6';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hotels', path: '/hotel' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        setIsScrolled(window.scrollY > 10);
      } else {
        setIsScrolled(true);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? 'bg-white shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4'
          : 'py-4 md:py-6'
      }`}
    >
      {/* Logo */}
      <a href="/">
        <img
          src={Logo}
          className={`h-35 w-35 ${isScrolled ? 'invert opacity-80' : ''}`}
          alt="Logo"
        />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}

        {/* Dashboard Button */}
        {user && (
          <button
            onClick={() => navigate('/dashboard')}
            className={`border px-4 py-1 text-sm font-light rounded-full transition-all ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            Dashboard
          </button>
        )}
      </div>

      {/* Right Side Desktop */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<FaBook />}
                onClick={() => navigate('/bookings')}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
              isScrolled ? 'text-white bg-black' : 'bg-white text-black'
            }`}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        {user && (
          <button
            onClick={() => navigate('/dashboard')}
            className="border px-3 py-1 rounded-full text-sm"
          >
            Dashboard
          </button>
        )}
        <UserButton />
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? 'invert' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        {user && (
          <button
            onClick={() => navigate('/dashboard')}
            className="border px-4 py-1 text-sm font-light rounded-full"
          >
            Dashboard
          </button>
        )}

        {!user && (
          <button
            onClick={openSignIn}
            className="bg-black text-white px-8 py-2.5 rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
