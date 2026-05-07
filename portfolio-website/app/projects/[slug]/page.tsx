import { allProjects } from "content-collections";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink, FileText, Layout, Palette, Clock } from "lucide-react";
import { Github } from "@/components/icons";
import { Markdown } from "@/components/ui/markdown";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

const projectEmojis: Record<string, string> = {
  "peeko-daily-companion": "👶",
  "timely-ai-wedding-planner": "💍",
  "nomadai-mvp": "🌍",
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-6">
          <ArrowLeft size={14} /> Home
        </Link>

        {/* Header */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <div className="text-5xl mb-4">{projectEmojis[project.slug] ?? "🚀"}</div>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
              Vibe Coding Project
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{formatDate(project.date)}</span>
            </div>
            {project.type && (
              <>
                <span className="text-zinc-600">·</span>
                <span className="text-purple-400 font-medium">{project.type}</span>
              </>
            )}
            <span className="text-zinc-600">·</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>~3 min read</span>
            </div>
          </div>
        </div>

        {/* External Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="mb-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 transition-colors text-sm font-medium"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 transition-colors text-sm font-medium"
              >
                <Github size={14} /> GitHub
              </a>
            )}
          </div>
        )}

        {/* Documentation Links */}
        {(project.prd || project.infoArchitecture || project.uiux) && (
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Documentation
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.prd && (
                <a
                  href={project.prd}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 transition-colors text-sm"
                >
                  <FileText size={14} /> PRD
                </a>
              )}
              {project.infoArchitecture && (
                <a
                  href={project.infoArchitecture}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 transition-colors text-sm"
                >
                  <Layout size={14} /> Info Architecture
                </a>
              )}
              {project.uiux && (
                <a
                  href={project.uiux}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 transition-colors text-sm"
                >
                  <Palette size={14} /> UI/UX
                </a>
              )}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        {project.tags && project.tags.length > 0 && (
          <div className="mb-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
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
          <Markdown content={project.content || ""} />
        </div>

        {/* Footer Actions */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all"
          >
            <ArrowLeft size={14} /> All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
