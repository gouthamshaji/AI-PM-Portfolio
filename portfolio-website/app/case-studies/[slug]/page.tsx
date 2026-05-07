import { allCaseStudies } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Briefcase, Clock, FileText, Download } from "lucide-react";
import { Markdown } from "@/components/ui/markdown";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return allCaseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = allCaseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.description };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = allCaseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

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
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
              Product Case Study
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            {cs.title}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-6">
            {cs.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Briefcase size={14} />
              <span className="text-emerald-400 font-medium">{cs.company}</span>
            </div>
            {cs.role && (
              <>
                <span className="text-zinc-600">·</span>
                <span>{cs.role}</span>
              </>
            )}
            {cs.duration && (
              <>
                <span className="text-zinc-600">·</span>
                <span>{cs.duration}</span>
              </>
            )}
            <span className="text-zinc-600">·</span>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{formatDate(cs.date)}</span>
            </div>
          </div>
        </div>

        {/* Document Viewer */}
        {cs.pdf && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                Case Study Document
              </h3>
              <a
                href={cs.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                download
              >
                <Download size={14} /> Download PDF
              </a>
            </div>
            <div className="w-full h-[70vh] rounded-2xl border border-white/10 bg-white/5 overflow-hidden relative">
              <iframe 
                src={`${cs.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none"
                title={`${cs.title} Document`}
              />
            </div>
          </div>
        )}

        {/* Tags */}
        {cs.tags && cs.tags.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Key Areas
            </h3>
            <div className="flex flex-wrap gap-2">
              {cs.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
          <Markdown content={cs.content || ""} />
        </div>

        {/* Footer Actions */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all"
          >
            <ArrowLeft size={14} /> All Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}
