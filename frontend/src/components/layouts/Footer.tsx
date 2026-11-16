import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#09090b] px-6">
      <div className="mx-auto max-w-7xl py-10">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="text-blue-400" size={24} />

            <span className="font-semibold text-white">
              OAuth2.0 Playground
            </span>
          </Link>

          {/* Description */}
          <p className="text-center text-sm text-zinc-500">
            Learning OAuth 2.0 through practical implementation.
          </p>

          {/* GitHub */}
          <a
            href="https://github.com/your-username/OAuth2-Implementation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <FaGithub size={18} />
            GitHub Repository
          </a>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Ayush Pant. Built for learning and experimentation.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;