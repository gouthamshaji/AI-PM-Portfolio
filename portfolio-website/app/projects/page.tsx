import { allProjects } from "content-collections";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Clock, Code2 } from "lucide-react";
import { Github } from "@/components/icons";

export const metadata = {
  title: "Projects",
  description: "Rapid prototypes and production applications built with modern AI stacks.",
};

const projectEmojis: Record<string, string> = {
  "peeko-daily-companion": "👶",
  "timely-ai-wedding-planner": "💍",
  "nomadai-mvp": "🌍",
};

export default function ProjectsPage() {
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
            <Code2 size={20} className="text-purple-400" />
            <span className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
              Vibe Coding
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Built Projects
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
            Zero-to-one product execution — from PRD to deployed app, built with modern AI stacks.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6">
          {allProjects.map((project) => (
            <div
              key={project.slug}
              className="group rounded-2xl border border-white/5 bg-[#111] hover:border-purple-500/30 hover:bg-[#0f0f0f] transition-all duration-300 relative flex flex-col"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="p-6 md:p-8 flex-grow flex flex-col md:flex-row md:items-start gap-4 z-10"
              >
                {/* Emoji */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{projectEmojis[project.slug] ?? "🚀"}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {project.type && (
                      <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
                        {project.type}
                      </span>
                    )}
                    <span className="text-zinc-600">·</span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1">
                      <Clock size={12} />
                      ~3 min read
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-zinc-400 mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-zinc-500">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 text-xs">
                    {project.githubUrl && (
                      <div className="flex items-center gap-1.5 text-zinc-500">
                        <Github size={12} /> GitHub
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 self-center hidden md:block">
                  <ArrowRight
                    size={20}
                    className="text-zinc-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
              
              {/* Live Demo Action - positioned below the main content on mobile, or in flow */}
              {project.liveUrl && (
                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 z-20 flex sm:justify-start">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors border border-purple-500/20"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {allProjects.length === 0 && (
          <div className="text-center py-16 border border-white/5 rounded-2xl bg-[#111]">
            <Code2 size={48} className="text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">No projects published yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
