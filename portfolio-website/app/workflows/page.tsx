import { allWorkflows } from "content-collections";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Bot } from "lucide-react";

export const metadata = {
  title: "Agentic AI Workflows",
  description: "Sophisticated automation pipelines powered by LLMs and API integrations.",
};

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8">
          <ArrowLeft size={14} /> Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Bot size={20} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              Agentic AI
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Automation Workflows
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
            Sophisticated multi-agent pipelines built with n8n and LLMs that automate complex cognitive tasks end-to-end.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid gap-6">
          {allWorkflows.map((wf) => (
            <Link
              key={wf.slug}
              href={`/workflows/${wf.slug}`}
              className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-[#111] hover:border-cyan-500/30 hover:bg-[#0f0f0f] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Status Indicator */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                      Live Workflow
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock size={12} />
                      ~2 min read
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {wf.title}
                  </h2>

                  <p className="text-zinc-400 mb-4 leading-relaxed line-clamp-2">
                    {wf.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {wf.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center">
                  <ArrowRight
                    size={20}
                    className="text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {allWorkflows.length === 0 && (
          <div className="text-center py-16 border border-white/5 rounded-2xl bg-[#111]">
            <Bot size={48} className="text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">No workflows published yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
