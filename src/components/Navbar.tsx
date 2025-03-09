// Navbar component for Piratepay.ai
// Updated with Stripe-inspired design
'use client';

import { useState, useEffect } from 'react';
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
          ? 'bg-white/95 dark:bg-accent/95 backdrop-blur-md shadow-sm border-b border-border dark:border-border' 
          : isHomePage ? 'bg-transparent text-white' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold mr-1">piratepay</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <button className="text-sm font-medium flex items-center gap-1 hover:opacity-80 transition-opacity">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-sm font-medium flex items-center gap-1 hover:opacity-80 transition-opacity">
                Solutions
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-sm font-medium flex items-center gap-1 hover:opacity-80 transition-opacity">
                Developers
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
            
            <div className="relative group">
              <button className="text-sm font-medium flex items-center gap-1 hover:opacity-80 transition-opacity">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
            
            <Link 
              href="/pricing" 
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Pricing
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard" 
              className="text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Dashboard
            </Link>
            <a
              href="https://book.stripe.com/3csbKncED80N5dC144"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white text-primary border border-transparent px-4 py-2 text-sm font-medium hover:bg-opacity-90 transition-all"
            >
              Contact sales
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background dark:bg-accent px-6 py-6 shadow-md border-b border-border dark:border-border">
          <div className="flex flex-col space-y-6">
            <button className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between">
              Products
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            <button className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between">
              Solutions
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            <button className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between">
              Developers
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            <button className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between">
              Resources
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            <Link 
              href="/pricing" 
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            
            <Link 
              href="/dashboard" 
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            
            <a
              href="https://book.stripe.com/3csbKncED80N5dC144"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact sales
            </a>
          </div>
        </div>
      )}
    </nav>
  );
} 