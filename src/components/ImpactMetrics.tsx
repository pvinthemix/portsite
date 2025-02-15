import React from 'react';

const metrics = [
  {
    value: '~200%',
    label: 'Revenue Growth & Expansion',
    description: 'Drove revenue growth by optimizing pricing models, increasing ASP, and launching high-value features that expanded market reach and accelerated ARR.'
  },
  {
    value: '~95-100%',
    label: 'Retention & Engagement',
    description: 'Improved retention and engagement by streamlining onboarding, enhancing user workflows, and increasing feature adoption to drive long-term customer loyalty.'
  },
  {
    value: '110%',
    label: 'Efficiency & Adoption',
    description: 'Increased product efficiency and adoption by reducing time-to-value, improving UX, and minimizing support overhead through workflow automation and intuitive design.'
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