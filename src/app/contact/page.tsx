// Contact page for Piratepay.ai
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center">
            Have questions about Piratepay? We're here to help!
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tell us how we can help you"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-primary text-white px-6 py-3 text-base font-medium hover:bg-opacity-90 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Prefer to email us directly?
            </p>
            <a 
              href="mailto:info@piratepay.ai" 
              className="text-primary hover:underline"
            >
              info@piratepay.ai
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 