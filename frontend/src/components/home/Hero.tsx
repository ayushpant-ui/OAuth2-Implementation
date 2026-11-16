import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  KeyRound,
  Server,
  UserRound,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#09090b] px-6 pt-24"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <ShieldCheck size={16} />
            <span>Learn OAuth 2.0 by Building</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Understand
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              OAuth 2.0
            </span>
            Beyond Theory.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
            Explore how modern applications handle authorization,
            access tokens, and third-party authentication.

            Learn the concepts by implementing real OAuth 2.0
            flows using Next.js and NestJS.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#flow"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Explore OAuth Flow
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#concepts"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Concepts
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <span className="text-sm text-zinc-500">Built with:</span>

            <span className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-zinc-300">
              Next.js
            </span>

            <span className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-zinc-300">
              NestJS
            </span>

            <span className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-zinc-300">
              TypeScript
            </span>
          </div>
        </div>

        {/* Right Content - OAuth Visualization */}
        <div
          id="flow"
          className="relative rounded-2xl border border-white/10 bg-[#111114] p-6 shadow-2xl shadow-blue-950/20 md:p-8"
        >
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-white">
                Authorization Flow
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Authorization Code Flow
              </p>
            </div>

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">
              OAuth 2.0
            </span>
          </div>

          {/* Flow Nodes */}
          <div className="flex flex-col items-center gap-3">

            {/* User */}
            <div className="flex w-full max-w-xs items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="rounded-lg bg-purple-500/10 p-3 text-purple-400">
                <UserRound size={22} />
              </div>

              <div>
                <p className="font-medium text-white">Resource Owner</p>
                <p className="text-xs text-zinc-500">The User</p>
              </div>
            </div>

            <ArrowRight className="rotate-90 text-blue-400" />

            {/* Client */}
            <div className="flex w-full max-w-xs items-center gap-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
              <div className="rounded-lg bg-blue-500/10 p-3 text-blue-400">
                <LockKeyhole size={22} />
              </div>

              <div>
                <p className="font-medium text-white">Client Application</p>
                <p className="text-xs text-zinc-500">Next.js + NestJS</p>
              </div>
            </div>

            <ArrowRight className="rotate-90 text-blue-400" />

            {/* Authorization Server */}
            <div className="flex w-full max-w-xs items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="rounded-lg bg-orange-500/10 p-3 text-orange-400">
                <Server size={22} />
              </div>

              <div>
                <p className="font-medium text-white">Authorization Server</p>
                <p className="text-xs text-zinc-500">Google / GitHub</p>
              </div>
            </div>

            <ArrowRight className="rotate-90 text-blue-400" />

            {/* Access Token */}
            <div className="flex w-full max-w-xs items-center gap-4 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
              <div className="rounded-lg bg-green-500/10 p-3 text-green-400">
                <KeyRound size={22} />
              </div>

              <div>
                <p className="font-medium text-white">Access Token</p>
                <p className="text-xs text-zinc-500">
                  Access Protected Resources
                </p>
              </div>
            </div>

          </div>

          <div className="mt-8 rounded-lg border border-white/5 bg-white/[0.03] p-4">
            <p className="text-center text-xs leading-6 text-zinc-500">
              Understand how authorization codes are exchanged
              for access tokens through OAuth 2.0.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;