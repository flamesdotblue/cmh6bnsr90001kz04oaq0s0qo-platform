import React from "react";
import { Notebook, Shield, Clock, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Notebook,
    title: "Structured entries",
    desc: "Log pair, session, setup, screenshots, and confluence in seconds with opinionated fields that keep you consistent.",
  },
  {
    icon: Clock,
    title: "Session-aware",
    desc: "Filter by London, New York, and Asia. See what truly performs for your schedule and market conditions.",
  },
  {
    icon: Shield,
    title: "Risk-first metrics",
    desc: "Track R, average RR, drawdown, and expectancy. Build habits that protect capital and grow your edge.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything your Forex journal needs</h2>
          <p className="mt-3 text-white/70">Purpose-built features that make reflection easy and decision-making clearer.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-white/80">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Fast keyboard flow</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> CSV import/export</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Tagging and filters</li>
              </ul>
            </div>
          ))}
        </div>

        <div id="pricing" className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Fair pricing for traders</h3>
              <p className="mt-2 text-sm text-white/70">Start free and upgrade only if it helps your trading. No hidden fees.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Free plan with unlimited entries</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Pro: Advanced analytics & screenshots</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Cancel anytime</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-end gap-3">
                <div>
                  <div className="text-sm text-white/60">Free</div>
                  <div className="text-3xl font-extrabold">$0</div>
                  <div className="text-xs text-white/60">forever</div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <div className="text-sm text-white/60">Pro</div>
                  <div className="text-3xl font-extrabold">$9<span className="text-base font-semibold">/mo</span></div>
                  <div className="text-xs text-white/60">or $84/yr</div>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#get-started" className="inline-flex flex-1 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-cyan-500/20">Start free</a>
                <a href="#get-started" className="inline-flex flex-1 items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10">Go Pro</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
