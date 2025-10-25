import React from "react";
import { TrendingUp, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-white/80">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white">
              <TrendingUp size={18} />
            </div>
            <span className="text-sm">PipJournal © {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
          >
            <Star size={16} />
            Leave feedback
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">
          Risk warning: Trading Forex involves significant risk of loss and is not suitable for all investors. This site provides journaling tools and does not offer financial advice.
        </p>
      </div>
    </footer>
  );
}
