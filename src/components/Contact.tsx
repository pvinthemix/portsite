import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Let's Connect
          </h2>
          <div className="space-y-6 mb-12">
            <p className="text-lg text-gray-600">
              This portfolio website highlights my experience leading product strategy, AI-driven workflow automation, and SaaS innovation across private equity, venture capital, fintech, and enterprise software. My work focuses on building scalable solutions that drive revenue growth, expand market reach, and enhance customer retention.
            </p>
            <p className="text-lg text-gray-600">
              With a background in both product management and software engineering, I have led the development of AI-powered investor engagement tools, fundraising automation platforms, and enterprise SaaS solutions. This portfolio provides an overview of key product initiatives, the impact they have driven, and the strategic vision behind them.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:paulvangelakos@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/paulvangelakos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}