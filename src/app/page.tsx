import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Accept Payments from <span className="text-primary">AI Agents</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mb-10">
          Piratepay enables merchants to seamlessly accept payments from AI agents, 
          unlocking a new frontier in commerce.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://book.stripe.com/3csbKncED80N5dC144"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary text-white px-8 py-4 text-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Reserve Your Seat - $10
          </a>
          <Link
            href="#how-it-works"
            className="rounded-full border border-gray-300 dark:border-gray-700 px-8 py-4 text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Why Choose Piratepay?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">AI-Native Integration</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Built specifically for AI agents to make payments on behalf of users, with seamless authentication and verification.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Secure Transactions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enterprise-grade security with advanced fraud detection and compliance with global payment regulations.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-accent">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Real-time Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive dashboard with insights into AI-driven purchases, customer behavior, and revenue trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            How Piratepay Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">For Merchants</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-medium">1</span>
                    <p className="text-gray-600 dark:text-gray-400">Integrate our API with your e-commerce platform or service</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-medium">2</span>
                    <p className="text-gray-600 dark:text-gray-400">Configure payment options and authentication requirements</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-medium">3</span>
                    <p className="text-gray-600 dark:text-gray-400">Start accepting payments from AI agents on behalf of their users</p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">For AI Developers</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-medium">1</span>
                    <p className="text-gray-600 dark:text-gray-400">Implement our SDK in your AI application</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-medium">2</span>
                    <p className="text-gray-600 dark:text-gray-400">Set up secure user authentication and payment authorization</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-medium">3</span>
                    <p className="text-gray-600 dark:text-gray-400">Enable your AI to make purchases from compatible merchants</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Early Access Pricing
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
            Be among the first to integrate Piratepay and shape the future of AI-powered commerce.
          </p>
          
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-primary p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Founder's Circle</h3>
              <p className="opacity-90">Limited early access</p>
            </div>
            <div className="p-8">
              <div className="flex justify-center items-baseline mb-8">
                <span className="text-5xl font-extrabold text-gray-900 dark:text-white">$10</span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">one-time payment</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">Early access to the platform</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">Priority integration support</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">Influence product roadmap</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">Discounted transaction fees at launch</span>
                </li>
              </ul>
              <div className="text-center">
                <a
                  href="https://book.stripe.com/3csbKncED80N5dC144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block rounded-full bg-primary text-white px-6 py-3 text-lg font-medium hover:bg-opacity-90 transition-all"
                >
                  Reserve Your Seat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
