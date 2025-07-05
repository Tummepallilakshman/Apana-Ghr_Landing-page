import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { GooeyTextDemo } from '@/components/ui/demo';
import { Sun, Moon } from 'lucide-react';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { NewsletterSignup } from '@/components/ui/NewsletterSignup';
import { TestimonialSection } from '@/components/ui/TestimonialSection';

export default function App({ Component, pageProps }: AppProps) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4500); // 4.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar />
      {showWelcome && (
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-500 backdrop-blur-sm ${
            darkMode ? 'bg-[#121212]/80' : 'bg-white/80'
          } ${showWelcome ? 'opacity-100' : 'opacity-0'} transition-opacity`}
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute top-6 right-6 p-2 rounded-full border-2 border-gray-300 dark:border-gray-700 text-2xl bg-white dark:bg-[#23272f] dark:text-white text-[#00796B] hover:ring-2 hover:ring-[#00796B] dark:hover:ring-white focus:outline-none focus:ring-2 focus:ring-[#00796B]"
            aria-label="Toggle dark mode"
            title="Toggle light/dark mode"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <div className="flex flex-col items-center bg-white/80 dark:bg-[#23272f]/80 shadow-2xl rounded-xl px-8 py-8 max-w-md w-full mx-4">
            <img
              src="/3.png"
              alt="Welcome Illustration"
              className="mb-4 w-32 h-32 object-contain animate-fade-in-scale drop-shadow-lg"
            />
            <h2 className="text-2xl font-bold mb-2 text-[#00796B] dark:text-white text-center">Welcome to ApanaGhr</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-center text-base">Your smart home, reimagined. Experience seamless living with our modern platform.</p>
            <GooeyTextDemo />
            <div className="w-full mt-6">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-[#00796B] dark:bg-white animate-progress-bar" style={{animationDuration: '4.5s'}} />
              </div>
            </div>
          </div>
        </div>
      )}
      <main className="pt-20 min-h-screen">
        <Component {...pageProps} />
        <TestimonialSection />
        <NewsletterSignup />
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 1s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes progress-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-bar {
          animation: progress-bar 4.5s linear forwards;
        }
      `}</style>
    </div>
  );
}
