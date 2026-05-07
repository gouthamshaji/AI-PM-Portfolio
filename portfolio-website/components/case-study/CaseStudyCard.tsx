"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface CaseStudyCardProps {
  caseStudy: {
    title: string;
    description: string;
    slug: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative"
    >
      <Link href={`/case-studies/${caseStudy.slug}`}>
        <Card className="h-full flex flex-col hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] transition-all duration-300">
          <div className="mb-4 text-emerald-400 p-3 bg-emerald-400/10 rounded-xl w-fit">
            <Briefcase size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors">
            {caseStudy.title}
          </h3>
          <p className="text-zinc-400 mb-6 flex-grow">{caseStudy.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.slice(0, 3).map((t) => (
              <Badge key={t} variant="secondary" className="bg-emerald-900/20 text-emerald-300 border border-emerald-800/30">
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-sm font-medium text-emerald-400 mt-auto">
            View Case Study
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Card>
      </Link>
      
      {/* External Links */}
      {(caseStudy.liveUrl || caseStudy.githubUrl) && (
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {caseStudy.githubUrl && (
            <a
              href={caseStudy.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/50 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 backdrop-blur-md transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
          )}
          {caseStudy.liveUrl && (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/30 backdrop-blur-md transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
