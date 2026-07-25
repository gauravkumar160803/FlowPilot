export const siteUrl = 'https://flowpilot.example'

export const organizationSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'FlowPilot', url: siteUrl,
  description: 'FlowPilot is an AI-powered workflow automation platform for modern business teams.',
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'hello@flowpilot.example', telephone: '+1-415-555-0148', availableLanguage: ['English'] },
}

export const homeFaqs = [
  { question: 'What kinds of workflows can FlowPilot automate?', answer: 'FlowPilot connects the repetitive steps across sales, customer success, finance, people operations, and internal IT. Start with a template or build a workflow around your own systems.' },
  { question: 'Do I need technical skills to build workflows?', answer: 'No. Our visual builder is designed for operations teams. FlowPilot AI can also turn a plain-language description into a workflow you can review and publish.' },
  { question: 'How does FlowPilot handle sensitive business data?', answer: 'Your workspace includes role-based access, audit trails, encryption in transit and at rest, and configurable data retention controls.' },
]

export const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map(({ answer, question }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export const testimonials = [
  { quote: 'FlowPilot gave our team a single, dependable system for every client handoff. We cut onboarding time by 42% in the first quarter.', name: 'Maya Chen', role: 'VP of Operations', company: 'Northstar Labs' },
  { quote: 'The AI summaries alone save our account managers hours each week. The bigger win is that nothing gets lost between systems anymore.', name: 'Jordan Bell', role: 'Chief of Staff', company: 'Arc & Co.' },
  { quote: 'We finally have a way to improve processes without opening an engineering ticket. It has changed how quickly we can experiment.', name: 'Priya Nair', role: 'Head of Revenue Ops', company: 'Vela Health' },
]

export const pricingPlans = [
  { name: 'Starter', price: '$19', description: 'For small teams building their first automated workflows.', features: ['Up to 5 active workflows', '3 connected apps', 'AI workflow assistant', 'Community support'] },
  { name: 'Professional', price: '$49', description: 'For growing teams ready to automate work at scale.', popular: true, features: ['Unlimited workflows', '25 connected apps', 'Advanced AI actions', 'Workflow analytics', 'Priority support'] },
  { name: 'Enterprise', price: 'Custom', description: 'For organizations with complex processes and governance needs.', features: ['Unlimited connected apps', 'SAML SSO and SCIM', 'Custom security controls', 'Dedicated success manager', '99.9% uptime SLA'] },
]
