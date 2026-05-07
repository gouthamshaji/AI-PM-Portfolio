import Link from "next/link";
import { ArrowLeft, Download, FileText } from "lucide-react";

export const metadata = {
  title: "Resume | Goutham Shaji CK",
  description: "View my professional resume.",
};

export default function ResumePage() {
  const resumeUrl = "/pdfs/resume.pdf";

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-8">
          <ArrowLeft size={14} /> Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={20} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">
              Experience
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Resume
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed mb-8">
            A summary of my professional experience, skills, and education as an AI Product Manager.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              download
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        {/* Document Viewer */}
        <div className="w-full h-[80vh] rounded-2xl border border-white/10 bg-white/5 overflow-hidden relative shadow-2xl">
          <iframe 
            src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full border-none bg-white"
            title="Goutham Shaji CK Resume"
          />
        </div>
      </div>
    </div>
  );
}
