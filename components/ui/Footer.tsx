export function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white/80 dark:bg-[#23272f]/80 text-center text-gray-600 dark:text-gray-300 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        <span>&copy; {new Date().getFullYear()} ApanaGhr. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#00796B]">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#00796B]">Facebook</a>
          <a href="mailto:info@apanaghr.com" className="hover:text-[#00796B]">Contact</a>
        </div>
      </div>
    </footer>
  );
}
