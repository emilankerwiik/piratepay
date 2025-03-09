// Custom 404 page for Piratepay.ai
// Updated with Stripe-inspired design
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center bg-background dark:bg-accent">
      <div className="relative mb-8">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
        <Image
          src="/piratepay-logo.svg"
          alt="Piratepay.ai Logo"
          width={180}
          height={45}
          className="relative z-10"
        />
      </div>
      
      <div className="max-w-md">
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">
          Treasure Not Found
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Arrr! The page you&apos;re looking for has sailed away to unknown waters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary"
          >
            Back to Home Port
          </Link>
          <Link
            href="/contact"
            className="btn-secondary"
          >
            Contact Support
          </Link>
        </div>
      </div>
      
      <div className="mt-16 w-full max-w-lg">
        <div className="stripe-card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
              <span className="font-medium text-foreground">Page Not Found</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            The page you&apos;re looking for might have been moved, deleted, or never existed. 
            Check the URL for typos or navigate back to our homepage.
          </p>
        </div>
      </div>
    </div>
  );
} 