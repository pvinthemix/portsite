import React from 'react';
import Header from './components/Header';
import ImpactMetrics from './components/ImpactMetrics';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ImpactMetrics />
        <CaseStudies />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-2">© {new Date().getFullYear()} Paul Vangelakos. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Built by Paul Vangelakos using{' '}
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">React</a>
            {' '}and{' '}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tailwind CSS</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;