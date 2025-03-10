import React from 'react';

const metrics = [
  {
    value: '200%+',
    label: 'Revenue Growth & Expansion',
    description: 'Drove revenue growth by optimizing pricing, increasing ASP, and launching high-value features—achieving 200%+ ARR growth through market expansion and maximizing customer value.'
  },
  {
    value: '95%+',
    label: 'Retention & Engagement',
    description: 'Led product initiatives to achieve 95-100% Gross Retention YoY by streamlining onboarding, enhancing user workflows, and increasing feature adoption, ensuring long-term customer loyalty and engagement.'
  },
  {
    value: '110%+',
    label: 'Efficiency & Adoption',
    description: 'Improved efficiency and adoption by reducing time-to-value, enhancing UX, and minimizing support overhead, achieving 110%+ Net Retention through expansion revenue and long-term customer engagement.'
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