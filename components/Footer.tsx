'use client'

import Image from 'next/image'

const productLinks = [
  { label: 'Product',       href: '#hero' },
  { label: 'Features',      href: '#features' },
  { label: 'Use Cases',     href: '#use-cases' },
  { label: 'How it Works',  href: '#how-it-works' },
  { label: 'Pricing',       href: '#pricing' },
]

const supportLinks = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy',     href: '#' },
  { label: 'Help Center',        href: '#' },
  { label: 'Resources',          href: '#' },
  { label: 'Contact Us',         href: '#' },
]

export default function Footer() {
  return (
    <footer className="px-4 lg:px-8 py-8 pb-12">
      {/* Frame 63 */}
      <div
        className="rounded-section px-10 lg:px-16 py-14"
        style={{ background: 'linear-gradient(135deg, #FAFBFF 0%, #F3EEFF 100%)', border: '1px solid #E8E0FF' }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* Brand — logo (actual SVG) + tagline */}
          <div className="flex flex-col max-w-xs">
            {/* Logo — same as Navbar: logo-full.svg (Frame 2) */}
            <div className="mb-5">
              <Image
                src="/icons/logo-full.svg"
                alt="Renate AI"
                width={147}
                height={34}
              />
            </div>
            {/* Tagline — "Reimagining Hiring with Powerful AI Automation", 32px 600 */}
            <p
              className="font-funnel font-semibold text-text-primary leading-tight"
              style={{ fontSize: '32px' }}
            >
              Reimagining Hiring with Powerful AI Automation
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Product */}
            <div>
              <h4 className="font-funnel font-semibold text-sm text-text-primary mb-4">Product</h4>
              <nav className="flex flex-col gap-3">
                {productLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-funnel font-medium text-sm transition-colors"
                    style={{ color: '#455A64' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#9156EC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#455A64')}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-funnel font-semibold text-sm text-text-primary mb-4">Support</h4>
              <nav className="flex flex-col gap-3">
                {supportLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-funnel font-medium text-sm transition-colors"
                    style={{ color: '#455A64' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#9156EC')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#455A64')}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid #E0D8F5' }}
        >
          <p className="font-funnel font-medium text-xs text-text-secondary">
            © {new Date().getFullYear()} RenateAI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="font-funnel font-medium text-xs text-text-secondary hover:text-purple transition-colors">Privacy</a>
            <a href="#" className="font-funnel font-medium text-xs text-text-secondary hover:text-purple transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
