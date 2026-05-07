"use client";

import { motion } from "framer-motion";
import { ArrowRight, Workflow } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface WorkflowCardProps {
  workflow: {
    title: string;
    description: string;
    slug: string;
    tech: string[];
  };
}

export function WorkflowCard({ workflow }: WorkflowCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
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
    </motion.div>
  );
}
