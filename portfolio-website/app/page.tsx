import Link from "next/link";
import { ArrowRight, Mail, Bot, BarChart2, Palette, Wrench, TrendingUp, MessageSquare, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { allWorkflows, allProjects, allPrds } from "content-collections";

const competencies = [
  { icon: Bot, title: "Agentic AI Systems", desc: "Multi-agent workflows & automation", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { icon: BarChart2, title: "Product Strategy", desc: "PRD Development & Market Analysis", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Palette, title: "User-Centric Design", desc: "User Research & Persona Dev", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: Wrench, title: "Technical Skills", desc: "n8n, Next.js, API Integration", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: TrendingUp, title: "Business Metrics", desc: "KPI Definition & ROI Analysis", color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: MessageSquare, title: "Communication", desc: "Stakeholder Management", color: "text-pink-400", bg: "bg-pink-400/10" },
];

const stats = [
  { value: "+85%", label: "DAU Growth", sub: "Peeko Daily Companion" },
  { value: "96%", label: "Faster Onboarding", sub: "CloudEagle RPA" },
  { value: "<5min", label: "Idea → PRD", sub: "AI PRD System" },
  { value: "100%", label: "Research-Backed", sub: "All Projects" },
];

const techStack = [
  { category: "AI/ML", items: ["Gemini", "Claude", "GPT"], color: "cyan" },
  { category: "Automation", items: ["n8n", "Zapier", "Playwright"], color: "blue" },
  { category: "Development", items: ["Next.js", "React", "TypeScript"], color: "purple" },
  { category: "Database", items: ["Supabase", "Sheets", "JSON"], color: "emerald" },
  { category: "Design", items: ["Figma", "IA", "VDS"], color: "pink" },
  { category: "Analytics", items: ["Plausible", "PostHog", "KPIs"], color: "orange" },
  { category: "Documentation", items: ["PRDs", "Specs", "Stories"], color: "blue" },
  { category: "Frameworks", items: ["ICE/RICE", "MoSCoW", "A/B Test"], color: "purple" },
];

const colorMap: Record<string, string> = {
  cyan: "border-cyan-500/20 text-cyan-400",
  blue: "border-blue-500/20 text-blue-400",
  purple: "border-purple-500/20 text-purple-400",
  emerald: "border-emerald-500/20 text-emerald-400",
  pink: "border-pink-500/20 text-pink-400",
  orange: "border-orange-500/20 text-orange-400",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] animate-[float_10s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[80px] animate-[float_12s_ease-in-out_infinite]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-5xl md:text-[5rem] font-bold font-serif leading-none tracking-tight text-white mb-4">
            Goutham Shaji CK
          </h1>
          <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            AI Product Manager · Startup PM
          </p>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Building intelligent products at the intersection of AI, design, and strategy.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://linkedin.com/in/gouthamshaji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
            <a
              href="mailto:gouthamshaji@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} /> Get in Touch
            </a>
            <a
              href="https://github.com/gouthamshaji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-zinc-600" />
          <span className="text-xs tracking-widest uppercase">scroll</span>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-zinc-300">{s.label}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]" id="about">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
              PM at the AI frontier
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              I bridge business strategy and technical execution — turning AI capabilities into products people actually love.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {competencies.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group p-5 rounded-2xl border border-white/5 bg-[#111111] hover:border-white/10 transition-all hover:-translate-y-1"
                >
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
      </section>

      {/* ─── AI WORKFLOWS ────────────────────────────────────── */}
      <section className="py-24 bg-[#111111]" id="workflows">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Agentic AI</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">Automation Workflows</h2>
            </div>
            <Link href="/workflows" className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mt-1 shrink-0">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {allWorkflows.slice(0, 2).map((wf) => (
              <Link
                href={`/workflows/${wf.slug}`}
                key={wf.slug}
                className="group p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-cyan-500/20 transition-all hover:-translate-y-1 block"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">Live Workflow</span>
                  </div>
                  <ArrowRight size={16} className="text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{wf.title}</h3>
                <p className="text-sm text-zinc-400 mb-5 leading-relaxed line-clamp-2">{wf.description}</p>
                <div className="flex flex-wrap gap-2">
                  {wf.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY ──────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]" id="case-studies">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
            <div>
              <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Work</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">Product Case Studies</h2>
            </div>
            <Link href="/case-studies" className="flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mt-1 shrink-0">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          {/* Featured */}
          <Link href="/case-studies/cloudeagle-rpa" className="block rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 rounded-full">
                Featured · CloudEagle
              </span>

              <h3 className="text-2xl font-bold text-white mt-4 mb-2 group-hover:text-emerald-400 transition-colors">AI-Driven Web Automation (RPA)</h3>
              <p className="text-zinc-400 mb-8 max-w-2xl text-sm leading-relaxed">
                40% of SaaS apps lack user-management APIs. I designed an AI agent that uses browser automation + semantic element detection to provision and deprovision users automatically — eliminating manual ops.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[["96%", "Faster Onboarding"], ["98%", "Faster Deprovision"], ["50%+", "Reduced SaaS Spend"]].map(([val, lbl]) => (
                  <div key={lbl} className="p-4 rounded-xl bg-[#0a0a0a] border border-white/5 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{val}</div>
                    <div className="text-xs text-zinc-400 mt-1">{lbl}</div>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 group-hover:bg-emerald-500 text-white text-sm font-medium transition-all group-hover:shadow-lg group-hover:shadow-emerald-500/25">
                Read Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── PROJECTS ────────────────────────────────────────── */}
      <section className="py-24 bg-[#111111]" id="projects">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
            <div>
              <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">Vibe Coding</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">Built Projects</h2>
            </div>
            <Link href="/projects" className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors mt-1 shrink-0">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {allProjects.slice(0, 3).map((proj) => (
              <div key={proj.slug} className="group rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-purple-500/30 transition-all hover:-translate-y-1 flex flex-col overflow-hidden relative">
                <Link href={`/projects/${proj.slug}`} className="p-6 flex-grow flex flex-col z-10">
                  <div className="text-3xl mb-4">{proj.title.includes("Peeko") ? "👶" : proj.title.includes("Timely") ? "💍" : "🌍"}</div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{proj.title}</h3>
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed flex-grow line-clamp-3">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                    {proj.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">{t}</span>
                    ))}
                  </div>
                </Link>
                {proj.liveUrl && (
                  <div className="px-6 pb-6 pt-0 z-20">
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-purple-400 hover:text-white bg-purple-500/10 hover:bg-purple-500 transition-colors border border-purple-500/20 w-full px-3 py-2.5 rounded-xl">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRDs ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]" id="prds">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4">
            <div>
              <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Documentation</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">PRDs & Specs</h2>
            </div>
            <Link href="/prds" className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-1 shrink-0">
              View all <ArrowRight size={14} />
            </Link>
          </div>

          {allPrds.slice(0, 1).map((prd) => (
            <Link key={prd.slug} href={`/prds/${prd.slug}`} className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 flex flex-col md:flex-row md:items-center gap-6 group hover:border-blue-500/40 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📄</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{prd.title}</h3>
                <p className="text-sm text-zinc-400">{prd.description}</p>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/30 text-blue-400 group-hover:bg-blue-500/10 text-sm font-medium transition-all shrink-0">
                View PRD <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── TECH STACK ──────────────────────────────────────── */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest mb-3">Toolbox</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {techStack.map((stack) => (
              <div
                key={stack.category}
                className={`p-4 rounded-xl border ${colorMap[stack.color]} bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors`}
              >
                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${colorMap[stack.color].split(" ")[1]}`}>
                  {stack.category}
                </p>
                <div className="flex flex-col gap-0.5">
                  {stack.items.map((item) => (
                    <span key={item} className="text-sm text-zinc-300">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]" id="contact">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Let's Talk</p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            Open to Opportunities
          </h2>
          <p className="text-zinc-400 mb-10">
            Interested in product strategy, AI applications, or building something impactful together? Let's connect.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:gouthamshaji@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 bg-[#111111] hover:border-white/20 hover:bg-[#161616] text-white text-sm font-medium transition-all"
            >
              <Mail size={18} className="text-zinc-400" />
              gouthamshaji@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/gouthamshaji"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
