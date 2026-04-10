/**
 * WaveSection — Figma "Group 5"
 * Rectangle 23 (rect-23.png: dark purple glow bg, radius 40) +
 * Frame 32 > Group 4 > waves 1 + waves 2 on top.
 * Sits between StatsBar and FeaturesSection.
 */
import Image from 'next/image'

export default function WaveSection() {
  return (
    <section className="px-4 lg:px-8 py-6">
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: '40px', height: '340px' }}
      >
        {/* Rectangle 23 — dark purple/magenta glow background */}
        <div className="absolute inset-0">
          <Image
            src="/images/rect-23.png"
            alt=""
            fill
            style={{ objectFit: 'cover', borderRadius: '40px' }}
          />
        </div>

        {/* Additional purple gradient overlay to deepen the stage */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(145,86,236,0.2) 0%, rgba(10,2,30,0.4) 100%)',
            borderRadius: '40px',
          }}
        />

        {/* waves 1 — glowing colorful AI wave bars */}
        <div
          className="absolute"
          style={{ inset: '20px 40px', zIndex: 2 }}
        >
          <Image
            src="/images/waves-1.png"
            alt="AI Voice Wave"
            fill
            style={{
              objectFit: 'contain',
              filter: 'brightness(1.1) saturate(1.2) drop-shadow(0 0 20px rgba(169,116,255,0.5))',
            }}
          />
        </div>

        {/* waves 2 — second wave layer, offset for depth */}
        <div
          className="absolute"
          style={{ inset: '40px 80px', zIndex: 1, opacity: 0.5 }}
        >
          <Image
            src="/images/waves-1.png"
            alt=""
            fill
            style={{
              objectFit: 'contain',
              filter: 'brightness(0.8) hue-rotate(30deg)',
              transform: 'scaleX(-1)',
            }}
          />
        </div>

        {/* Text overlay — optional contextual label */}
        <div
          className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-8 pointer-events-none"
          style={{ zIndex: 3 }}
        >
          <p
            className="font-funnel font-semibold text-white text-center"
            style={{ fontSize: '18px', textShadow: '0 0 24px rgba(169,116,255,0.8)' }}
          >
            Human-like AI Voice — Indistinguishable from Real Conversations
          </p>
        </div>
      </div>
    </section>
  )
}
