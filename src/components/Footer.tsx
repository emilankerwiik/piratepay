// Footer component for Piratepay.ai
// Updated with Stripe-inspired design
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background dark:bg-accent py-16 px-6 lg:px-8 border-t border-border dark:border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">piratepay</span>
            </Link>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Payments</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Billing</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Connect</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Invoicing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">E-commerce</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">SaaS</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Marketplaces</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">AI Platforms</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Customers</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border dark:border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Piratepay, Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </Link>
            <div className="flex items-center space-x-2">
              <select className="bg-transparent text-muted-foreground text-sm border border-border rounded-md px-2 py-1">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 