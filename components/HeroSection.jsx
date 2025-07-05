"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Eye, EyeOff } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 24 * 60 * 60);

  // New state for modals and forms
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Login form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  // Signup form state
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: ""
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s) => {
    const d = Math.floor(s / (60 * 60 * 24));
    const h = Math.floor((s % (60 * 60 * 24)) / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${d}d ${h}h ${m}m ${sec}s`;
  };

  // Handle login form changes
  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  // Handle signup form changes
  const handleSignupChange = (e) => {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value
    });
  };

  // Handle login submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login submitted:", loginForm);
    setShowLoginModal(false);
  };

  // Handle signup submit
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Add your signup logic here
    console.log("Signup submitted:", signupForm);
    setShowSignupModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}> 
      <section className="relative min-h-screen px-4 py-10 bg-white dark:bg-[#121212] text-[#004D40] dark:text-white transition-colors duration-500 overflow-hidden">
        <style>{`
          @keyframes illusionGlowLight {
            0% { box-shadow: 0 0 60px 20px #26a69a33, 0 0 0 0 #fff0; transform: scale(1); }
            50% { box-shadow: 0 0 120px 40px #26a69a66, 0 0 0 0 #fff0; transform: scale(1.05); }
            100% { box-shadow: 0 0 60px 20px #26a69a33, 0 0 0 0 #fff0; transform: scale(1); }
          }
          @keyframes illusionGlowDark {
            0% { box-shadow: 0 0 60px 20px #26a69a55, 0 0 0 0 #fff0; transform: scale(1); }
            50% { box-shadow: 0 0 120px 40px #26a69a99, 0 0 0 0 #fff0; transform: scale(1.05); }
            100% { box-shadow: 0 0 60px 20px #26a69a55, 0 0 0 0 #fff0; transform: scale(1); }
          }
        `}</style>
        <img 
          src="/illusion.png" 
          alt="Illusion Background" 
          className={`hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] object-cover rounded-full opacity-70 pointer-events-none select-none z-0 ${darkMode ? '' : ''}`}
          style={{ 
            animation: darkMode ? 'illusionGlowDark 6s ease-in-out infinite' : 'illusionGlowLight 6s ease-in-out infinite',
            boxShadow: darkMode ? '0 0 60px 20px #26a69a55' : '0 0 60px 20px #26a69a33',
            transition: 'box-shadow 0.5s, transform 0.5s',
          }}
        />
        
        <div className="flex justify-between items-center mb-10 relative z-10">
          <img src="/logo.png" alt="ApanaGhr Logo" className="h-12" />
          <div className="flex gap-3 items-center">
            <button 
              onClick={() => setShowLoginModal(true)} 
              className="border px-4 py-2 rounded text-[#00796B] border-[#00796B] hover:bg-[#00796B] hover:text-white"
            >
              Login
            </button>
            <button 
              onClick={() => setShowSignupModal(true)} 
              className="bg-[#00796B] text-white px-4 py-2 rounded hover:bg-[#004D40]"
            >
              Sign Up
            </button>
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded border hover:bg-white/10">
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-xl max-w-md w-full mx-4">
              <div className="flex flex-col items-center mb-6">
                <img src="/logo.png" alt="ApanaGhr Logo" className="h-12 mb-2" />
                <span className="text-xl font-bold text-[#00796B] mb-2">ApanaGhr</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#00796B]">Login</h2>
                <button 
                  onClick={() => setShowLoginModal(false)}
                  className="text-[#555555] hover:text-[#00796B]"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email / Mobile Number</label>
                  <input
                    type="text"
                    name="email"
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[38px] text-[#555555] hover:text-[#00796B]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#26A69A] to-[#00796B] text-white py-2 rounded-lg font-semibold hover:from-[#00796B] hover:to-[#26A69A] transition"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Signup Modal */}
        {showSignupModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-xl max-w-md w-full mx-4">
              <div className="flex flex-col items-center mb-6">
                <img src="/logo.png" alt="ApanaGhr Logo" className="h-12 mb-2" />
                <span className="text-xl font-bold text-[#00796B] mb-2">ApanaGhr</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#00796B]">Sign Up</h2>
                <button 
                  onClick={() => setShowSignupModal(false)}
                  className="text-[#555555] hover:text-[#00796B]"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleSignupSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={signupForm.name}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={signupForm.email}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={signupForm.mobile}
                    onChange={handleSignupChange}
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={signupForm.password}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[38px] text-[#555555] hover:text-[#00796B]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium mb-2">Confirm Password</label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={signupForm.confirmPassword}
                    onChange={handleSignupChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] focus:outline-none focus:ring-2 focus:ring-[#26A69A]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-[38px] text-[#555555] hover:text-[#00796B]"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#26A69A] to-[#00796B] text-white py-2 rounded-lg font-semibold hover:from-[#00796B] hover:to-[#26A69A] transition"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Coming Soon: <span className="text-[#26A69A]">Smarter Room & Roommate Matching</span>
            </h1>
            <p className="text-lg text-[#555555] dark:text-[#CCCCCC]">
              Find PGs, Flats, and Compatible Roommates – Powered by AI.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center bg-white/80 dark:bg-[#23272f]/80 p-4 rounded-xl shadow-lg border border-[#e0e0e0] dark:border-[#2a2a2a] max-w-xl mx-auto mt-4">
              <div className="relative w-full">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="peer px-4 py-3 rounded-lg border border-[#E0E0E0] dark:border-[#2A2A2A] bg-white dark:bg-[#1E1E1E] w-full focus:outline-none focus:ring-2 focus:ring-[#26A69A] transition"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#26A69A] peer-focus:text-[#00796B]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v.217l8 5.333 8-5.333V6.5a.5.5 0 0 0-.5-.5h-15Zm15 13a.5.5 0 0 0 .5-.5v-8.217l-7.5 5-7.5-5V17.5a.5.5 0 0 0 .5.5h15Z"/></svg>
                </span>
              </div>
              <button className="bg-gradient-to-r from-[#26A69A] to-[#00796B] text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:from-[#00796B] hover:to-[#26A69A] transition w-full sm:w-auto">
                Notify Me
              </button>
            </form>
            {submitted && <p className="text-green-500 text-sm mt-2 font-medium">Thank you! You'll be notified when we launch.</p>}
            <p className="text-sm text-[#26A69A] mt-4">Launching in: {formatTime(timeLeft)}</p>
          </div>
          <div className="w-full md:w-1/2">
            {/* Illustration image removed as requested */}
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Features You'll Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#E0E0E0] dark:border-[#2A2A2A] rounded bg-white dark:bg-[#1E1E1E]">
              <h3 className="text-lg font-semibold text-[#26A69A]">Verified PG Listings</h3>
              <p className="text-[#555555] dark:text-[#CCCCCC]">Browse verified listings tailored to students and professionals.</p>
            </div>
            <div className="p-6 border border-[#E0E0E0] dark:border-[#2A2A2A] rounded bg-white dark:bg-[#1E1E1E]">
              <h3 className="text-lg font-semibold text-[#26A69A]">AI Roommate Matching</h3>
              <p className="text-[#555555] dark:text-[#CCCCCC]">Smart algorithm connects you with the best roommates based on lifestyle.</p>
            </div>
            <div className="p-6 border border-[#E0E0E0] dark:border-[#2A2A2A] rounded bg-white dark:bg-[#1E1E1E]">
              <h3 className="text-lg font-semibold text-[#26A69A]">Secure Pre-Connect</h3>
              <p className="text-[#555555] dark:text-[#CCCCCC]">Chat anonymously before committing — privacy first.</p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <img src="/tags-sample.jpg" alt="Tags Example" className="rounded shadow-lg w-64 h-40 object-cover" />
          </div>
        </div>

        <footer className="text-center py-6 border-t border-[#E0E0E0] dark:border-[#2A2A2A]">
          <div className="flex justify-center gap-5 mb-2">
            <a href="#"><FaInstagram className="hover:text-[#26A69A]" /></a>
            <a href="#"><FaLinkedin className="hover:text-[#26A69A]" /></a>
          </div>
          <p className="text-sm text-[#555555] dark:text-[#CCCCCC]">© 2025 ApanaGhr. Built with ❤️ in India.</p>
        </footer>
      </section>
    </div>
  );
}
