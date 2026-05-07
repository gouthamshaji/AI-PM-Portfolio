import { allPrds } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Building2, Clock, FileText, Download } from "lucide-react";
import { Markdown } from "@/components/ui/markdown";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return allPrds.map((prd) => ({ slug: prd.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const prd = allPrds.find((p) => p.slug === slug);
  if (!prd) return {};
  return { title: prd.title, description: prd.description };
}

export default async function PrdDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const prd = allPrds.find((p) => p.slug === slug);
  if (!prd) notFound();

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
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
              Product Requirements Document
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            {prd.title}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-6">
            {prd.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Building2 size={14} />
              <span className="text-blue-400 font-medium">{prd.company}</span>
            </div>
            {prd.type && (
              <>
                <span className="text-zinc-600">·</span>
                <span>{prd.type}</span>
              </>
            )}
            <span className="text-zinc-600">·</span>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{formatDate(prd.date)}</span>
            </div>
            <span className="text-zinc-600">·</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>~5 min read</span>
            </div>
          </div>
        </div>

        {/* Download PDF */}
        {prd.pdf && (
          <div className="mb-8">
            <a
              href={prd.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors text-sm font-medium"
            >
              <Download size={16} /> Download PRD PDF
            </a>
          </div>
        )}

        {/* Tags */}
        {prd.tags && prd.tags.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Key Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {prd.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-blue-400/10 text-blue-400 border border-blue-400/20 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
          <Markdown content={prd.content || ""} />
        </div>

        {/* Footer Actions */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4">
          <Link
            href="/prds"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all"
          >
            <ArrowLeft size={14} /> All PRDs
          </Link>
        </div>
      </div>
    </div>
  );
}
