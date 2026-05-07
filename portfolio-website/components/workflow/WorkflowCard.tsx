"use client";

import { motion } from "framer-motion";
import { ArrowRight, Workflow, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface WorkflowCardProps {
  workflow: {
    title: string;
    description: string;
    slug: string;
    tech: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
}

export function WorkflowCard({ workflow }: WorkflowCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative"
    >
      <Link href={`/workflows/${workflow.slug}`}>
        <Card className="h-full flex flex-col hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] transition-all duration-300">
          <div className="mb-4 text-cyan-400 p-3 bg-cyan-400/10 rounded-xl w-fit">
            <Workflow size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
            {workflow.title}
          </h3>
          <p className="text-zinc-400 mb-6 flex-grow">{workflow.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {workflow.tech.map((t) => (
              <Badge key={t} variant="secondary" className="bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-sm font-medium text-cyan-400 mt-auto">
            View Workflow
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Card>
      </Link>
      
      {/* External Links */}
      {(workflow.liveUrl || workflow.githubUrl) && (
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {workflow.githubUrl && (
            <a
              href={workflow.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/50 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 backdrop-blur-md transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
          )}
          {workflow.liveUrl && (
            <a
              href={workflow.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/30 backdrop-blur-md transition-colors"
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
