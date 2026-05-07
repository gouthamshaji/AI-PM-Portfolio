import { allCaseStudies } from "content-collections";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, FileText, Clock, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Product Case Studies",
  description: "Deep dives into complex product challenges and strategic solutions.",
};

export default function CaseStudiesPage() {
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
            <TrendingUp size={20} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
              Work
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Product Case Studies
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
            Deep dives into complex product challenges, strategic solutions, and measurable outcomes.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid gap-6">
          {allCaseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group p-6 md:p-8 rounded-2xl border border-white/5 bg-[#111] hover:border-emerald-500/30 hover:bg-[#0f0f0f] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase size={20} className="text-emerald-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                      {cs.company}
                    </span>
                    {cs.role && (
                      <>
                        <span className="text-zinc-600">·</span>
                        <span className="text-xs text-zinc-500">{cs.role}</span>
                      </>
                    )}
                    {cs.duration && (
                      <>
                        <span className="text-zinc-600">·</span>
                        <span className="text-xs text-zinc-500">{cs.duration}</span>
                      </>
                    )}
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock size={12} />
                      ~4 min read
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {cs.title}
                  </h2>

                  <p className="text-zinc-400 mb-4 leading-relaxed line-clamp-2">
                    {cs.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cs.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20"
                      >
                        {t}
                      </span>
                    ))}
                    {cs.tags.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-500">
                        +{cs.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {cs.pdf && (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <FileText size={12} />
                      <span>Presentation deck available</span>
                    </div>
                  )}
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center">
                  <ArrowRight
                    size={20}
                    className="text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {allCaseStudies.length === 0 && (
          <div className="text-center py-16 border border-white/5 rounded-2xl bg-[#111]">
            <TrendingUp size={48} className="text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">No case studies published yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
