"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface PrdCardProps {
  prd: {
    title: string;
    description: string;
    slug: string;
    tags: string[];
    pdf?: string;
  };
}

export function PrdCard({ prd }: PrdCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group"
    >
      <Link href={`/prds/${prd.slug}`}>
        <Card className="h-full flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
          <div className="mb-4 text-blue-400 p-3 bg-blue-400/10 rounded-xl w-fit">
            <FileText size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
            {prd.title}
          </h3>
          <p className="text-zinc-400 mb-6 flex-grow">{prd.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {prd.tags.slice(0, 3).map((t) => (
              <Badge key={t} variant="secondary" className="bg-blue-900/20 text-blue-300 border border-blue-800/30">
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-sm font-medium text-blue-400 mt-auto">
            {prd.pdf ? "View PRD & Download" : "View PRD"}
            <Download size={16} className="ml-2 group-hover:translate-y-1 transition-transform" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
