import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2 mt-8 max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00796B] w-full md:w-auto"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-[#00796B] text-white rounded hover:bg-[#005f56] transition"
      >
        {submitted ? 'Thank you!' : 'Subscribe'}
      </button>
    </form>
  );
}
