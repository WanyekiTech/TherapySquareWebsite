import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import Button from './Button';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="flex items-center space-x-2">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                TheraSquare<span className="text-brand-600">EMR</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-brand-600 ${location.pathname === link.path ? 'text-brand-600' : 'text-gray-600'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" href={import.meta.env.VITE_APP_URL} className="text-sm px-3">
                Sign In
              </Button>
              <Button variant="primary" href={`${import.meta.env.VITE_APP_URL}/signup`} className="text-sm px-4 py-2">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg absolute w-full left-0 top-20">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-gray-700 hover:text-brand-600 hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                <Button href={import.meta.env.VITE_APP_URL} variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
                <Button href={`${import.meta.env.VITE_APP_URL}/signup`} variant="primary" className="w-full justify-center">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <ShieldCheck className="h-6 w-6 text-brand-500" />
                <span className="font-bold text-xl text-white">
                  TheraSquare<span className="text-brand-500">EMR</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Secure, compliant electronic medical records designed for Kenyan therapists.
              </p>
              <div className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} TheraSquare Solutions.<br />
                Nairobi, Kenya.
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/features" className="hover:text-brand-400">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-brand-400">Pricing</Link></li>
                <li><Link to="/how-it-works" className="hover:text-brand-400">How It Works</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/faqs" className="hover:text-brand-400">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-brand-400">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="hover:text-brand-400">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-brand-400">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;