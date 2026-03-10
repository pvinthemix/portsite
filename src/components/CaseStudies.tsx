import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Modal from './Modal';

const caseStudiesDetails = {
  'Landing Pages': {
    context: 'Led research and market validation with Investor Relations & Fundraising teams to identify gaps in investor onboarding and engagement. Defined and delivered MVP for customized, branded investor portals with embedded fund materials, reporting dashboards, and targeted communications.',
    role: [
      'Led research and market validation with Investor Relations & Fundraising teams',
      'Defined MVP for customized, branded investor portals',
      'Spearheaded go-to-market strategy for rapid adoption',
      'Delivered ongoing enhancements based on customer analytics'
    ],
    outcomes: [
      '25% increase in investor engagement',
      'Reduced LP onboarding time from weeks to days',
      'Expanded market reach with tailored investor experiences'
    ],
    link: 'https://altvia.com/sharesecure-landing-pages-and-workspaces/',
    linkText: 'Landing Pages Blog Post'
  },
  'Workspaces': {
    context: 'Identified market need for structured, secure collaboration spaces to replace fragmented document-sharing workflows. Designed and implemented permission-controlled workspace environment with pre-configured templates for fundraising, due diligence, and portfolio monitoring.',
    role: [
      'Designed permission-controlled workspace environment',
      'Developed pre-configured workspace templates',
      'Aligned product with broader SaaS ecosystem',
      'Drove cross-sell of complementary investor management tools'
    ],
    outcomes: [
      '30% increase in adoption',
      'Improved customer retention through essential collaboration tools',
      'Higher revenue per customer through up-sell strategy'
    ],
    link: 'https://www.prweb.com/releases/altvia-elevates-investor-engagement-and-strengthens-digital-brand-with-innovative-sharesecure-features-landing-pages-and-workspaces-302243994.html',
    linkText: 'Workspaces Blog Post'
  },
  'AI Powered Investor Relations Operations': {
    context: 'Led product development of AI driven workflows for investor relations operations, enabling secure distribution of capital calls, K 1s, and investor reports. Focused on automating LP communications while improving permission control, engagement visibility, and operational efficiency across investor communications.',
    role: [
      'Defined the MVP for AI enabled investor communications and secure LP document distribution',
      'Partnered with engineering to implement LLM driven workflow automation using Claude, GPT, and LangChain',
      'Designed automated workflows for capital calls, investor reporting, and fund communications',
      'Developed engagement tracking to measure LP interaction with distributed materials'
    ],
    outcomes: [
      'Reduced manual investor communication and fundraising operations through automated workflows',
      'Enabled secure, permission based distribution of sensitive fund documents across LPs and funds',
      'Introduced engagement visibility into investor communications and document access',
      'Positioned AI driven investor relations operations as a differentiated capability within the platform'
    ],
    link: 'https://altvia.com/ir-operations/',
    linkText: 'IR Operations'
  },
  'Online Courses': {
    context: 'Spearheaded the development and launch of a comprehensive online learning platform, focusing on user experience and engagement metrics.',
    role: [
      'Led product strategy and roadmap development',
      'Implemented analytics-driven feature prioritization',
      'Coordinated cross-functional team collaboration',
      'Managed enterprise client relationships'
    ],
    outcomes: [
      'Successful acquisition of 2 major enterprise clients: Deparment of Defense, FEMA',
    ],
    link: 'https://deployedmedicine.com/',
    linkText: 'Online Courses Platform Case Study'
  },
  'B2C to B2B Pivot & 3PL Solution': {
    context: 'Successfully led the strategic pivot from B2C to B2B model, developing and launching an integrated 3PL solution.',
    role: [
      'Developed integrated 3PL solution architecture',
      'Led cross-functional team collaboration',
      'Implemented Shopify integration strategy'
    ],
    outcomes: [
      'Successful market transition to B2B',
      'Expanded market reach by 30%'
    ],
    link: 'https://sg.finance.yahoo.com/news/shyp-seamless-outsourced-fulfillment-shopify-130000140.html',
    linkText: 'B2B Pivot Success Story'
  },
  'Mobile Age Verification Compliance': {
    context: 'Led product development for mobile age verification across iOS and Android to meet new app store regulatory requirements. Designed a cross platform compliance framework using Apple and Google age signal APIs to enforce regulatory rules while minimizing disruption to existing users.',
    role: [
      'Defined product requirements and business rules for age verification workflows across iOS and Android',
      'Partnered with engineering to integrate Apple Declared Age Range APIs and Google Age Signals',
      'Designed approval, rejection, and parental consent flows based on regulatory requirements',
      'Structured a scalable framework to support jurisdiction specific compliance rules in the future'
    ],
    outcomes: [
      'Enabled platform compliance with emerging mobile age verification requirements',
      'Reduced legal and platform risk through automated regulatory gating in the mobile apps',
      'Established a reusable compliance framework for future regional regulations',
      'Maintained a low friction experience for legitimate users while enforcing required controls'
    ],
    link: '',
    linkText: ''
  },
  'RE2000 Hardware Platform Launch': {
    context: 'Led product development for the RE2000 biometric workforce time clock, a next generation hardware device designed to improve reliability, authentication accuracy, and workforce clock in workflows. The initiative required coordination across hardware manufacturing, firmware, and SaaS platform integrations.',
    role: [
      'Defined product requirements and feature scope for the RE2000 hardware release',
      'Partnered with manufacturing and engineering teams on device capabilities, firmware requirements, and platform compatibility',
      'Led product decisions around biometric authentication, device management, and workforce clock in workflows',
      'Coordinated cross functional delivery across hardware vendors, firmware teams, and the cloud platform'
    ],
    outcomes: [
      'Delivered a next generation workforce time clock integrated with the uAttend platform',
      'Improved biometric authentication reliability and workforce clock in accuracy',
      'Enabled scalable device management and platform integration for workforce customers',
      'Expanded the product platform with a modern hardware offering'
    ],
    link: '',
    linkText: ''
  }
};

const caseStudies = [
  {
    title: 'Landing Pages',
    company: 'SaaS Fintech Platform',
    description: 'Led development of customized investor portals, transforming fundraising and reporting workflows with enhanced engagement features.',
    impact: '25% increase in investor engagement',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Workspaces',
    company: 'SaaS Fintech Platform',
    description: 'Recognized a market gap in private equity and venture capital for structured, secure collaboration spaces to replace fragmented document-sharing workflows.',
    impact: '30% increase in adoption',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'AI Powered Investor Relations Operations',
    company: 'SaaS Fintech Platform',
    description: 'Led product development of AI driven workflows for investor relations operations with secure LP communications and document distribution.',
    impact: 'Automated investor communications with secure, permission based document distribution',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Online Courses',
    company: 'LMS platform',
    description: 'Spearheaded the launch of Online Courses as a core feature, leveraging UX design and advanced frontend capabilities to enhance user engagement and drive a 25% increase in client acquisition.',
    impact: 'Client acquisition of 2 major enterprise clients',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: "B2C to B2B Pivot & 3PL Solution",
    company: "Series B Startup",
    description:
      "Partnered with the founder to pivot from B2C to B2B, leading cross-functional collaboration with product and engineering to launch a 3PL/Inventory Management solution integrated with Shopify.",
    impact: "Successful market transition and increased B2B adoption",
    image:
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: 'Mobile Age Verification Compliance',
    company: 'Mobile Platform Compliance',
    description: 'Led cross platform age verification workflows across iOS and Android to enforce app store regulatory requirements with minimal user disruption.',
    impact: 'Enabled compliant mobile age gating with low-friction user experience',
    image: 'https://images.unsplash.com/vector-1761385079498-69fa4adce7dc?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Smartphone fingerprint security image'
  },
  {
    title: 'RE2000 Hardware Platform Launch',
    company: 'Biometric Workforce Platform',
    description: 'Led product development for the RE2000 biometric time clock across hardware, firmware, and SaaS integrations to modernize workforce clock in workflows.',
    impact: 'Delivered next-generation biometric hardware integrated with the uAttend platform',
    image: 'https://images.unsplash.com/vector-1761645174671-7f6468282430?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern access control hardware terminal'
  }
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null);

  const handleOpenModal = (title: string) => {
    setSelectedStudy(title);
  };

  const handleCloseModal = () => {
    setSelectedStudy(null);
  };

  const selectedDetails = selectedStudy ? caseStudiesDetails[selectedStudy as keyof typeof caseStudiesDetails] : null;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Product Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                index >= 3 ? 'md:col-span-1 xl:col-span-1.5' : ''
              }`}
              onClick={() => handleOpenModal(study.title)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.alt ?? study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {study.title}
                  </h3>
                  <ArrowUpRight
                    className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    size={20}
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{study.company}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
                <p className="text-sm font-medium text-gray-900">{study.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedStudy} onClose={handleCloseModal}>
        {selectedStudy && selectedDetails && (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedStudy}</h3>
              {selectedDetails.link && (
                <a
                  href={selectedDetails.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:underline"
                >
                  {selectedDetails.linkText}
                </a>
              )}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Context & Challenge</h4>
              <p className="text-gray-600">{selectedDetails.context}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Product Leadership & Strategy</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {selectedDetails.role.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Impact & Results</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {selectedDetails.outcomes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
