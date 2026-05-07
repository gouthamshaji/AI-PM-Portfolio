"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    slug: string;
    tags: string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="h-full flex flex-col hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-300">
          <div className="mb-4 text-purple-400 p-3 bg-purple-400/10 rounded-xl w-fit">
            <Sparkles size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-400 mb-6 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((t) => (
              <Badge key={t} variant="secondary" className="bg-purple-900/20 text-purple-300 border border-purple-800/30">
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-sm font-medium text-purple-400 mt-auto">
            Explore
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
