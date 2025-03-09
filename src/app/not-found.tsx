// Custom 404 page for Piratepay.ai
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
      <Image
        src="/piratepay-logo.svg"
        alt="Piratepay.ai Logo"
        width={180}
        height={45}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        404 - Treasure Not Found
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        Arrr! The page you're looking for has sailed away to unknown waters.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary text-white px-6 py-3 text-lg font-medium hover:bg-opacity-90 transition-all"
      >
        Back to Home Port
      </Link>
    </div>
  );
} 