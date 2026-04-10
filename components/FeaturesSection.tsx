import Image from 'next/image'

const features = [
  {
    badge: 'Human-like AI',
    heading: 'AI Voice Calls That\nFeel Human',
    body: 'Renate speaks with candidates in a natural, human-like voice, asking questions, understanding responses, and keeping conversations smooth.',
    bullets: [
      'Natural conversation flow with dynamic responses',
      'Handles interruptions and follow-up questions',
      'Adapts tone and pace to each candidate',
    ],
    image: '/images/feature-1.png',
    reverse: false,
  },
  {
    badge: 'Smart Screening',
    heading: 'Intelligent Candidate\nEvaluation',
    body: 'Automatically evaluates candidate answers based on your job requirements and filters out only the most relevant profiles.',
    bullets: [
      'Custom scoring based on your job criteria',
      'Real-time analysis of candidate responses',
      'Instant ranking and shortlisting',
    ],
    image: '/images/feature-2.png',
    reverse: true,
  },
  {
    badge: 'Auto Shortlist',
    heading: 'Instant Qualified\nCandidates',
    body: 'Get a ready-to-hire list of qualified candidates without manual effort — saving hours of screening time.',
    bullets: [
      'Zero manual resume screening required',
      'Structured candidate reports with scores',
      'One-click export to your ATS or email',
    ],
    image: '/images/feature-3.png',
    reverse: false,
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <defs>
        <linearGradient id="ck" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#9156EC" /><stop offset="1" stopColor="#3F1487" />
        </linearGradient>
      </defs>
      <circle cx="8" cy="8" r="8" fill="url(#ck)" />
      <path d="M5 8.5L7 10.5L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BadgePill({ label }: { label: string }) {
  return (
    <div
      className="gradient-border inline-flex items-center gap-2 self-start mb-5"
      style={{
        background: 'linear-gradient(135deg, rgba(212,185,255,0.08) 0%, rgba(145,86,236,0.24) 100%)',
        borderRadius: '16px',
        padding: '6px 14px',
      }}
    >
      <span
        className="flex items-center justify-center w-4 h-4 rounded-full"
        style={{ background: '#FFFFFF' }}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
          <defs>
            <linearGradient id="bi2" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#9156EC" /><stop offset="1" stopColor="#3F1487" />
            </linearGradient>
          </defs>
          <circle cx="4" cy="4" r="2.5" fill="url(#bi2)" />
        </svg>
      </span>
      <span
        className="font-funnel font-semibold text-xs gradient-text"
        style={{ backgroundImage: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)' }}
      >
        {label}
      </span>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section id="features" className="px-4 lg:px-8 py-8">
      <div className="bg-bg-light rounded-section py-20 px-8 lg:px-16">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className="gradient-border inline-flex items-center gap-2 mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(212,185,255,0.08) 0%, rgba(145,86,236,0.24) 100%)',
              borderRadius: '16px',
              padding: '6px 14px',
            }}
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full" style={{ background: '#FFFFFF' }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <defs><linearGradient id="fhIcn" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#9156EC" /><stop offset="1" stopColor="#3F1487" /></linearGradient></defs>
                <path d="M5 1L6.5 3.5L9.5 4L7.25 6.25L7.75 9.25L5 7.75L2.25 9.25L2.75 6.25L0.5 4L3.5 3.5L5 1Z" fill="url(#fhIcn)" />
              </svg>
            </span>
            <span className="font-funnel font-semibold text-xs text-text-secondary">Features</span>
          </div>
          <h2 className="font-funnel font-semibold text-text-primary" style={{ fontSize: '40px' }}>
            Everything You Need to Hire Smarter
          </h2>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col gap-20">
          {features.map((f) => (
            <div
              key={f.badge}
              className={`flex flex-col ${f.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col">
                <BadgePill label={f.badge} />
                <h3
                  className="font-funnel font-semibold text-text-primary mb-4 whitespace-pre-line"
                  style={{ fontSize: '40px', lineHeight: '1.15' }}
                >
                  {f.heading}
                </h3>
                <p className="font-funnel font-medium text-sm text-text-secondary mb-6 leading-relaxed max-w-md">
                  {f.body}
                </p>
                <ul className="flex flex-col gap-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="font-funnel font-medium text-sm text-text-secondary">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image — Rectangle 25: IMAGE fill + GRADIENT_LINEAR(#9156ec → #0062ff), radius 32 */}
              <div className="flex-1 w-full">
                <div
                  className="relative image-overlay"
                  style={{ height: '360px', borderRadius: '32px', overflow: 'hidden' }}
                >
                  <Image
                    src={f.image}
                    alt={f.heading.split('\n')[0]}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Gradient overlay — #9156EC → #0062FF */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, #9156EC 0%, #0062FF 100%)',
                      opacity: 0.45,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
