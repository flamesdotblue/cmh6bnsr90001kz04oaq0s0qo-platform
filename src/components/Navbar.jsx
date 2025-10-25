import React from "react";
import { TrendingUp, User, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="group flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white shadow-lg">
            <TrendingUp size={20} />
          </div>
          <div className="leading-tight">
            <span className="block text-base font-semibold tracking-tight">PipJournal</span>
            <span className="block text-xs text-white/60">Forex Trade Journal</span>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-white/80 transition hover:text-white">Features</a>
          <a href="#pricing" className="text-sm text-white/80 transition hover:text-white">Pricing</a>
          <a href="#faq" className="text-sm text-white/80 transition hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10">
            <User size={16} />
            Sign in
          </button>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95"
          >
            <Settings size={16} />
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
