import React from 'react';

const skillCategories = [
  {
    name: 'AI & Machine Learning',
    skills: ['GPT & Claude.ai Integration', 'AI Prototyping', 'Machine Learning Design', 'Predictive Analytics']
  },
  {
    name: 'Product Development',
    skills: ['SaaS Strategy', 'Agile/Scrum', 'Roadmap Planning', 'Feature Prioritization']
  },
  {
    name: 'Technical Skills',
    skills: ['JavaScript/React', 'API Development', 'SQL & Analytics', 'UI/UX Design']
  },
  {
    name: 'Domain Expertise',
    skills: ['Private Equity', 'Venture Capital', 'Workflow Automation', 'Enterprise Software']
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-600 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}