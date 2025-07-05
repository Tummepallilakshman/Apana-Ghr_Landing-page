import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-[#23272f]/80 shadow-md fixed top-0 left-0 z-40 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Image src="/3.png" alt="Logo" width={40} height={40} className="rounded-full" />
        <span className="font-bold text-lg text-[#00796B] dark:text-white">ApanaGhr</span>
      </div>
      <div className="flex gap-6">
        <Link href="#home" className="hover:text-[#00796B] dark:hover:text-white transition-colors">Home</Link>
        <Link href="#features" className="hover:text-[#00796B] dark:hover:text-white transition-colors">Features</Link>
        <Link href="#contact" className="hover:text-[#00796B] dark:hover:text-white transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
