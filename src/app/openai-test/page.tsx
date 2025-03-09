// OpenAI test page
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OpenAITest from "@/components/OpenAITest";

export const metadata = {
  title: 'OpenAI Test - Piratepay.ai',
  description: 'Test the OpenAI integration for Piratepay.ai',
};

export default function OpenAITestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-24">
        <div className="w-full max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
            OpenAI Integration Test
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            This page allows you to test the OpenAI API integration. Enter a prompt and see the response from the API.
          </p>

          <OpenAITest />
        </div>
      </section>

      <Footer />
    </div>
  );
} 