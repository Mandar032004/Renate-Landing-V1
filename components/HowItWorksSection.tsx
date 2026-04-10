const steps = [
  {
    number: '01',
    title: 'Post a Job',
    desc: 'Define your role, requirements, and screening questions in minutes.',
  },
  {
    number: '02',
    title: 'AI Screens Candidates',
    desc: 'Renate automatically reaches out and conducts live voice screening calls.',
  },
  {
    number: '03',
    title: 'AI Voice Calls',
    desc: 'Every candidate gets a human-like AI call that evaluates fit in real time.',
  },
  {
    number: '04',
    title: 'Get Qualified List',
    desc: 'Receive a ranked shortlist of the best candidates — ready for interview.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 lg:px-8 py-8">
      <div className="bg-bg-light rounded-section py-20 px-8 lg:px-16 relative overflow-hidden">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div
            className="gradient-border inline-flex items-center gap-2 rounded-badge px-4 py-2 mb-6"
            style={{ background: 'linear-gradient(135deg, rgba(212,185,255,0.08) 0%, rgba(145,86,236,0.24) 100%)' }}
          >
            <span
              className="flex items-center justify-center w-4 h-4 rounded-full"
              style={{ background: 'linear-gradient(135deg, #D4B9FF 0%, #9156EC 100%)' }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M2 4h4M4 2v4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span
              className="font-funnel font-semibold text-xs gradient-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)' }}
            >
              How it Works
            </span>
          </div>
          <h2
            className="font-funnel font-semibold text-text-primary mb-4"
            style={{ fontSize: '56px', lineHeight: '1.1' }}
          >
            Hire Smarter in Just 4 Steps
          </h2>
          <p className="font-funnel font-medium text-sm text-text-secondary max-w-xl">
            From setting up your job to connecting with fully qualified candidates — the entire process is completely automated.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col p-8 ${
                index < steps.length - 1 ? 'lg:border-r border-bg-border' : ''
              } ${index < 2 ? 'md:border-b lg:border-b-0 border-bg-border' : ''}`}
            >
              {/* Step number */}
              <span
                className="font-funnel font-semibold text-4xl gradient-text mb-4 block"
                style={{ backgroundImage: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)' }}
              >
                {step.number}
              </span>
              {/* Step connector dot */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(212,185,255,0.2) 0%, rgba(145,86,236,0.3) 100%)' }}
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)' }}
                />
              </div>
              <h3 className="font-funnel font-semibold text-text-primary text-lg mb-2">
                {step.title}
              </h3>
              <p className="font-funnel font-medium text-sm text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Center floating glow card */}
        <div className="flex justify-center mt-16">
          <div
            className="relative bg-white rounded-center p-10 max-w-sm w-full text-center"
            style={{ boxShadow: '0 0 120px 0 rgba(212,185,255,0.8)' }}
          >
            {/* Animated glow ring */}
            <div
              className="absolute -inset-1 rounded-center opacity-20"
              style={{ background: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)' }}
            />
            <div className="relative">
              {/* Logo mark */}
              <div className="flex justify-center mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #A974FF 0%, #401583 100%)' }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M8 7h8a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H8V7zm0 8h5l5 8H14l-4-6.5V23H8V15z"
                      fill="white" opacity="0.95" />
                  </svg>
                </div>
              </div>
              <p className="font-funnel font-semibold text-text-primary text-base mb-1">Renate AI</p>
              <p className="font-funnel font-medium text-xs text-text-secondary mb-4">
                Fully Automated · End-to-End
              </p>
              {/* Progress bar */}
              <div className="w-full bg-bg-light rounded-full h-2 mb-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: '75%', background: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)' }}
                />
              </div>
              <p className="font-funnel font-medium text-xs text-text-secondary">
                12 candidates screened · 3 shortlisted
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
