// Footer component for Piratepay.ai
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src="/piratepay-logo.svg"
                alt="Piratepay.ai Logo"
                width={150}
                height={38}
              />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Enabling AI-powered commerce
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/#features" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Features</Link></li>
                <li><Link href="/#how-it-works" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">How It Works</Link></li>
                <li><Link href="/#pricing" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">About</Link></li>
                <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Privacy</Link></li>
                <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Piratepay.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 