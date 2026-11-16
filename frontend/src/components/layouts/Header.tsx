import Link from "next/link";
import {  ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              OAuth<span className="text-blue-400">2.0</span>
            </h1>
            <p className="text-xs text-zinc-500">
              Implementation Playground
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#home"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="#flow"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            OAuth Flow
          </Link>

          <Link
            href="#concepts"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Concepts
          </Link>
        </nav>

        {/* GitHub */}
        <a
          href="https://github.com/your-username/OAuth2-Implementation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
        >
          <FaGithub size={18} />
          <span>GitHub</span>
        </a>

      </div>
    </header>
  );
};

export default Header;