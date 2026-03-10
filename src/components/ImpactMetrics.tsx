import React from 'react';

const metrics = [
  {
    value: '200%+',
    label: 'ARR Growth',
    description: 'Helped drive over 200% ARR growth by leading product initiatives that expanded platform capabilities, improved investor facing workflows, and increased the commercial impact of the products I supported.'
  },
  {
    value: 'AI',
    label: 'AI Product Development',
    description: 'Fluent in modern AI technologies including LLMs, agent based workflows, and prompt driven systems, applying tools such as Claude, GPT, and LangChain to design AI powered automation for investor research, prospecting, and outreach operations.'
  },
  {
    value: 'Platform',
    label: 'Platform Innovation',
    description: 'Led development of new platform capabilities including customizable landing pages and investor engagement tools that improved usability, differentiated the platform, and increased product value for customers.'
  }
];

export default function ImpactMetrics() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Impact & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
             key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {metric.value}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {metric.label}
              </h3>
              <p className="text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
