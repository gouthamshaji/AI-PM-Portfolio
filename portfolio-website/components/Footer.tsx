import Link from "next/link";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import { siteConfig } from "@/content/config/site";

const footerLinks = [
  { href: "/", label: "Privacy" },
  { href: "/", label: "Terms" },
  { href: "/", label: "Sitemap" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-serif font-bold gradient-text-blue-purple text-lg mb-1">
            {siteConfig.name}
          </p>
          <p className="text-[#71717a] text-sm">
            © 2026 Goutham Shaji CK. Built with AI, designed with purpose.
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6" role="list">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#71717a] hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-lg text-[#71717a] hover:text-white hover:bg-white/5 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-lg text-[#71717a] hover:text-white hover:bg-white/5 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.social.email}
            aria-label="Email me"
            className="p-2 rounded-lg text-[#71717a] hover:text-white hover:bg-white/5 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
