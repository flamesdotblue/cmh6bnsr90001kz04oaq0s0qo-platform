import React from "react";
import { ArrowRight, BarChart3, Calendar, Upload } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:pt-16 sm:px-6 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Now tracking multi-pair performance and sessions
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Journal smarter. Trade better.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            PipJournal is a focused Forex trade journal that helps you capture entries, annotate charts, measure edge, and refine your strategy with real insights. Less guessing. More consistency.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95"
            >
              Start free
              <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              View features
            </a>
          </div>
          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-sm text-white/75 md:grid-cols-2">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />No credit card needed</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Unlimited journal entries</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Export to CSV</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Dark mode by default</li>
          </ul>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4 shadow-2xl shadow-cyan-500/10">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/90"><BarChart3 size={18} /> Metrics</div>
                  <span className="text-xs text-emerald-400">+3.2%</span>
                </div>
                <div className="mt-3 h-20 w-full rounded-md bg-gradient-to-r from-cyan-500/30 to-indigo-500/30" />
                <dl className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-white/70">
                  <div><dt className="text-white/50">Win%</dt><dd className="font-semibold">54</dd></div>
                  <div><dt className="text-white/50">RR</dt><dd className="font-semibold">1.8</dd></div>
                  <div><dt className="text-white/50">Streak</dt><dd className="font-semibold">W3</dd></div>
                </dl>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/90"><Calendar size={18} /> Sessions</div>
                  <span className="text-xs text-indigo-300">London</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  <li className="flex justify-between"><span>EURUSD</span><span className="text-emerald-400">+18 pips</span></li>
                  <li className="flex justify-between"><span>GBPUSD</span><span className="text-rose-400">-7 pips</span></li>
                  <li className="flex justify-between"><span>USDCAD</span><span className="text-emerald-400">+9 pips</span></li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                <div className="flex items-center gap-2 text-white/90"><Upload size={18} /> Quick add trade</div>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <input className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm placeholder-white/40 outline-none focus:border-cyan-400/50" placeholder="Pair e.g. EURUSD" />
                  <input className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm placeholder-white/40 outline-none focus:border-cyan-400/50" placeholder="Entry e.g. 1.07250" />
                  <button className="rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-cyan-500/20">Add</button>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-white/50">Clean, focused UI designed for Forex journaling</p>
        </div>
      </div>
    </section>
  );
}
