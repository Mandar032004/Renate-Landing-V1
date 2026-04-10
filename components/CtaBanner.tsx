import Image from 'next/image'

export default function CtaBanner() {
  return (
    <section className="px-4 lg:px-8 py-8">
      {/* Group 7 — Rectangle 24 (cta-banner.png: dark purple bg), radius 40 */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: '40px', minHeight: '420px' }}
      >
        {/* Background — Rectangle 24: cta-banner.png + GRADIENT_LINEAR(#9156ec → #0062ff) */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-banner.png"
            alt=""
            fill
            style={{ objectFit: 'cover' }}
          />
          {/* Gradient overlay on top of the image */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(145,86,236,0.5) 0%, rgba(0,98,255,0.3) 100%)',
            }}
          />
        </div>

        {/* ai-gif blob — decorative, top right */}
        <div
          className="absolute top-8 right-8 pointer-events-none"
          style={{ width: '120px', height: '120px', opacity: 0.6 }}
        >
          <Image src="/images/ai-gif.png" alt="" fill style={{ objectFit: 'contain' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-8">
          <h2
            className="font-funnel font-semibold text-white mb-6 max-w-2xl"
            style={{ fontSize: '56px', lineHeight: '1.1' }}
          >
            Meet the AI Recruiter
            <br />
            <span
              className="gradient-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #D4B9FF 0%, #A974FF 100%)' }}
            >
              that Hires Like a Pro
            </span>
          </h2>

          <p
            className="font-funnel font-medium text-sm mb-10 max-w-md leading-relaxed"
            style={{ color: '#F5F7F8' }}
          >
            Streamline your hiring process with AI-powered automation. Post jobs, screen candidates, and hire the right fit — all in minutes.
          </p>

          {/* Get Started — Frame 19: gradient #F5F7F8 → #D4B9FF, radius 12 + arrow icon box */}
          <button
            className="flex items-center gap-3 font-funnel font-medium text-sm hover:opacity-90 transition-opacity"
            style={{
              background: 'linear-gradient(135deg, #F5F7F8 0%, #D4B9FF 100%)',
              color: '#263238',
              borderRadius: '12px',
              padding: '14px 24px',
            }}
          >
            Get Started
            {/* Arrow icon — Frame: #FFFFFF fill + #9156EC → #3F1487 gradient, radius 6 */}
            <span
              className="flex items-center justify-center w-6 h-6"
              style={{ background: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)', borderRadius: '6px' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
