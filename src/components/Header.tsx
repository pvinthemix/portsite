import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/80" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Paul Vangelakos
          </h1>
          <h2 className="text-xl sm:text-2xl text-blue-600 mb-8">
            Product Manager | Software Engineer | AI & Workflow Automation | SaaS & Fintech
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <a
              href="mailto:paulvangelakos@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/paulvangelakos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}