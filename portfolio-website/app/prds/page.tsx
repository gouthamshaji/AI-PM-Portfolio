import { allPrds } from "content-collections";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FileText, Building2, Clock, Download } from "lucide-react";

export const metadata = {
  title: "PRDs & Documentation",
  description: "Comprehensive product specifications and strategy documents.",
};

export default function PrdsPage() {
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
            <FileText size={20} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Documentation
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            PRDs & Specs
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
            Clear, actionable product requirement documents that align engineering, design, and business goals.
          </p>
        </div>

        {/* PRD Cards */}
        <div className="grid gap-6">
          {allPrds.map((prd) => (
            <Link
              key={prd.slug}
              href={`/prds/${prd.slug}`}
              className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-[#111] hover:border-blue-500/30 hover:bg-[#0f0f0f] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText size={20} className="text-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                      {prd.company}
                    </span>
                    {prd.type && (
                      <>
                        <span className="text-zinc-600">·</span>
                        <span className="text-xs text-zinc-500">{prd.type}</span>
                      </>
                    )}
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock size={12} />
                      ~5 min read
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {prd.title}
                  </h2>

                  <p className="text-zinc-400 mb-4 leading-relaxed line-clamp-2">
                    {prd.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {prd.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20"
                      >
                        {t}
                      </span>
                    ))}
                    {prd.tags.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-500">
                        +{prd.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {prd.pdf && (
                    <div className="flex items-center gap-1.5 text-xs text-blue-400">
                      <Download size={12} />
                      <span>PDF available</span>
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center">
                  <ArrowRight
                    size={20}
                    className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {allPrds.length === 0 && (
          <div className="text-center py-16 border border-white/5 rounded-2xl bg-[#111]">
            <FileText size={48} className="text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">No PRDs published yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
