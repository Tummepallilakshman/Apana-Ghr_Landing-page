export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#121212] text-center">
      <h1 className="text-6xl font-bold text-[#00796B] dark:text-white mb-4">404</h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">Oops! Page not found.</p>
      <a href="/" className="px-6 py-2 bg-[#00796B] text-white rounded hover:bg-[#005f56] transition">Go Home</a>
    </div>
  );
}
