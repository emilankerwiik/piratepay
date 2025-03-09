// Contact page for Piratepay.ai
// Updated with Stripe-inspired design
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-24">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about Piratepay? We&apos;re here to help!
            </p>
          </div>

          <div className="stripe-card">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background dark:bg-accent/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background dark:bg-accent/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-border rounded-md bg-background dark:bg-accent/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="What&apos;s this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-md bg-background dark:bg-accent/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Tell us how we can help you"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Prefer to email us directly?
            </p>
            <a 
              href="mailto:info@piratepay.ai" 
              className="text-primary hover:underline font-medium"
            >
              info@piratepay.ai
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 lg:px-8 bg-muted dark:bg-accent/20 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stripe-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Visit Us</h3>
              <p className="text-muted-foreground">
                123 AI Commerce Street<br />
                San Francisco, CA 94103<br />
                United States
              </p>
            </div>
            
            <div className="stripe-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Email Us</h3>
              <p className="text-muted-foreground mb-2">
                General Inquiries:<br />
                <a href="mailto:info@piratepay.ai" className="text-primary hover:underline">info@piratepay.ai</a>
              </p>
              <p className="text-muted-foreground">
                Support:<br />
                <a href="mailto:support@piratepay.ai" className="text-primary hover:underline">support@piratepay.ai</a>
              </p>
            </div>
            
            <div className="stripe-card text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Call Us</h3>
              <p className="text-muted-foreground mb-2">
                Sales:<br />
                <a href="tel:+1-555-123-4567" className="text-primary hover:underline">+1 (555) 123-4567</a>
              </p>
              <p className="text-muted-foreground">
                Support:<br />
                <a href="tel:+1-555-987-6543" className="text-primary hover:underline">+1 (555) 987-6543</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 