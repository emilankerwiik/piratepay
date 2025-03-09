import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="stripe-hero pt-32 pb-24 lg:py-32 px-6 lg:px-8">
        <div className="stripe-hero-content max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Capture payment volume from shopping agents.
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl">
              Join first-movers that use Piratepay to accept payments online from millions of agents making purchases for humans.
            </p>
            
            <div className="stripe-input-group max-w-md">
              <input 
                type="email" 
                placeholder="Email address" 
                className="stripe-input"
              />
              <button className="flex items-center">
                Start now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white w-5 h-5">
                        <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"></path>
                        <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"></path>
                        <line x1="12" x2="12" y1="22" y2="13"></line>
                        <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"></path>
                      </svg>
                    </div>
                    <span className="font-medium text-white">AI Payment Dashboard</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Today&apos;s Volume</span>
                      <span className="text-white/60 text-xs">Updated 5m ago</span>
                    </div>
                    <div className="text-2xl font-bold text-white">$24,892.50</div>
                    <div className="mt-1 text-green-400 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m6 9 6-6 6 6"/><path d="M6 12h12"/><path d="m6 15 6 6 6-6"/></svg>
                      +18.3% from yesterday
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">AI Agent Transactions</span>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <div className="text-2xl font-bold text-white">1,284</div>
                        <div className="mt-1 text-white/60 text-sm">Total today</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">$19.38</div>
                        <div className="mt-1 text-white/60 text-sm">Avg. value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 px-6 lg:px-8 bg-muted dark:bg-accent border-y border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-muted-foreground text-sm font-medium mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, i) => (
              <div key={i} className="h-8 flex items-center">
                <span className="text-muted-foreground/50 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-background dark:bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Built for the AI commerce revolution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform is designed specifically for merchants who want to capture the growing market of AI-powered shopping.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="stripe-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI-Native Integration</h3>
              <p className="text-muted-foreground">
                Built specifically for AI agents to make payments on behalf of users, with seamless authentication and verification.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="stripe-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Secure Transactions</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with advanced fraud detection and compliance with global payment regulations.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="stripe-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Real-time Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive dashboard with insights into AI-driven purchases, customer behavior, and revenue trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 lg:px-8 bg-muted dark:bg-accent/20 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              How Piratepay Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A seamless integration process for both merchants and AI developers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="stripe-card">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold mr-4">1</div>
                <h3 className="text-xl font-semibold text-foreground">For Merchants</h3>
              </div>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Integrate our API</p>
                    <p className="text-muted-foreground text-sm">Simple integration with your e-commerce platform or service using our RESTful API or SDKs.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Configure payment options</p>
                    <p className="text-muted-foreground text-sm">Set up authentication requirements and customize the payment flow to match your brand.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Start accepting AI payments</p>
                    <p className="text-muted-foreground text-sm">Begin accepting payments from AI agents on behalf of their users with real-time transaction monitoring.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="stripe-card">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold mr-4">2</div>
                <h3 className="text-xl font-semibold text-foreground">For AI Developers</h3>
              </div>
              <ol className="space-y-6">
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Implement our SDK</p>
                    <p className="text-muted-foreground text-sm">Easily integrate our SDK into your AI application with just a few lines of code.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Set up secure authentication</p>
                    <p className="text-muted-foreground text-sm">Implement user authentication and payment authorization with our secure protocols.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Enable AI-powered purchases</p>
                    <p className="text-muted-foreground text-sm">Allow your AI to make secure purchases from compatible merchants on behalf of users.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join the AI commerce revolution?</h2>
          <p className="text-xl mb-10 opacity-90">
            Start accepting payments from AI shopping agents today and stay ahead of the competition.
          </p>
          
          <div className="stripe-input-group max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email address" 
              className="stripe-input"
            />
            <button className="flex items-center">
              Start now
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
