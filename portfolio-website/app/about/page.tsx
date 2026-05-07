import Link from "next/link";
import { ArrowLeft, Mail, User, MapPin, Calendar } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { Bot, BarChart2, Palette, Wrench, TrendingUp, MessageSquare } from "lucide-react";

export const metadata = {
  title: "About",
  description: "AI Product Manager bridging business strategy and technical execution.",
};

const competencies = [
  { icon: Bot, title: "Agentic AI Systems", desc: "Multi-agent workflows & automation", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { icon: BarChart2, title: "Product Strategy", desc: "PRD Development & Market Analysis", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Palette, title: "User-Centric Design", desc: "User Research & Persona Dev", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: Wrench, title: "Technical Skills", desc: "n8n, Next.js, API Integration", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: TrendingUp, title: "Business Metrics", desc: "KPI Definition & ROI Analysis", color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: MessageSquare, title: "Communication", desc: "Stakeholder Management", color: "text-pink-400", bg: "bg-pink-400/10" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8">
          <ArrowLeft size={14} /> Home
        </Link>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
              About
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
            PM at the AI Frontier
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-4">
            I'm Goutham Shaji CK — an AI Product Manager at a fast-growing startup. I bridge the gap between business strategy and technical execution, leveraging AI to build products that are both innovative and practical.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            My work spans agentic AI workflows, vibe-coding rapid prototypes, and full product strategy from ideation to measurable impact.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-serif text-white mb-6">Core Competencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {competencies.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="p-5 rounded-2xl border border-white/5 bg-[#111] hover:border-white/10 transition-all">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-3`}>
                    <Icon size={20} className={c.color} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{c.title}</h3>
                  <p className="text-xs text-zinc-500">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-white/10 pt-10">
          <h2 className="text-2xl font-bold font-serif text-white mb-6">Get in Touch</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:gouthamshaji@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-[#111] hover:border-white/20 hover:bg-white/5 text-white text-sm transition-all"
            >
              <Mail size={16} className="text-zinc-400" /> gouthamshaji@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/gouthamshaji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/gouthamshaji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-[#111] hover:border-white/20 hover:bg-white/5 text-white text-sm transition-all"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
