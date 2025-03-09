// Navbar component for Piratepay.ai
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/piratepay-logo.svg"
              alt="Piratepay.ai Logo"
              width={180}
              height={45}
              priority
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          {isHomePage ? (
            <>
              <Link 
                href="#features" 
                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              >
                How It Works
              </Link>
              <Link 
                href="#pricing" 
                className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              >
                Pricing
              </Link>
            </>
          ) : (
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              Home
            </Link>
          )}
          <Link 
            href="/contact" 
            className={`text-sm font-medium ${
              pathname === '/contact' 
                ? 'text-primary' 
                : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
            }`}
          >
            Contact
          </Link>
          <a
            href="https://book.stripe.com/3csbKncED80N5dC144"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition-all"
          >
            Reserve Your Seat
          </a>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 shadow-md">
          <div className="flex flex-col space-y-4">
            {isHomePage ? (
              <>
                <Link 
                  href="#features" 
                  className="text-base font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="#how-it-works" 
                  className="text-base font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  href="#pricing" 
                  className="text-base font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </>
            ) : (
              <Link 
                href="/" 
                className="text-base font-medium text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            )}
            <Link 
              href="/contact" 
              className={`text-base font-medium ${
                pathname === '/contact' 
                  ? 'text-primary' 
                  : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://book.stripe.com/3csbKncED80N5dC144"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary text-white px-4 py-2 text-base font-medium hover:bg-opacity-90 transition-all inline-block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reserve Your Seat
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 