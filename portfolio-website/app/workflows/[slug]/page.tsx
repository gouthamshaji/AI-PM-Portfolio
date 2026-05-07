import { allWorkflows } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ExternalLink } from "lucide-react";
import { Markdown } from "@/components/ui/markdown";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return allWorkflows.map((wf) => ({ slug: wf.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wf = allWorkflows.find((w) => w.slug === slug);
  if (!wf) return {};
  return { title: wf.title, description: wf.description };
}

export default async function WorkflowDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wf = allWorkflows.find((w) => w.slug === slug);
  if (!wf) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-6">
          <ArrowLeft size={14} /> Home
        </Link>

        {/* Header */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              Agentic AI Workflow
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            {wf.title}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-6">
            {wf.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{formatDate(wf.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>Read time: ~2 min</span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {wf.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tags */}
        {wf.tags && wf.tags.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {wf.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-zinc-400 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
          <Markdown content={wf.content || ""} />
        </div>

        {/* Footer Actions */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4">
          <Link
            href="/workflows"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all"
          >
            <ArrowLeft size={14} /> All Workflows
          </Link>
        </div>
      </div>
    </div>
  );
}
