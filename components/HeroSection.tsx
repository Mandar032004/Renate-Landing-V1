'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [open, setOpen] = useState(false)
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 187% 122% at 50% 0%, #FFFFFF 40%, #EADCFF 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Side decorative image rectangles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Left card */}
        <div
          className="absolute left-0 top-20"
          style={{ width: '260px', height: '540px', borderRadius: '0 40px 40px 0', overflow: 'hidden', opacity: 0.5 }}
        >
          <Image src="/images/pexels-1.png" alt="" fill style={{ objectFit: 'cover' }} />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, #ffffff 100%)' }}
          />
        </div>
        {/* Right card */}
        <div
          className="absolute right-0 top-20"
          style={{ width: '260px', height: '540px', borderRadius: '40px 0 0 40px', overflow: 'hidden', opacity: 0.5 }}
        >
          <Image src="/images/pexels-2.png" alt="" fill style={{ objectFit: 'cover' }} />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to left, rgba(255,255,255,0) 0%, #ffffff 100%)' }}
          />
        </div>
        {/* Purple fade strip at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '200px',
            background: 'linear-gradient(to bottom, rgba(145,86,236,0) 0%, rgba(145,86,236,0.08) 100%)',
          }}
        />
      </div>

      {/* Hero Text Content */}
      <div
        className="relative z-10 flex flex-col px-6"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: '100vh',
        }}
      >

        {/* Headline */}
        <h1
          className="font-funnel font-semibold text-text-primary mb-4 w-full"
          style={{ fontSize: '56px', lineHeight: '1.1', textAlign: 'center' }}
        >
          <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)' }}>
            AI that hires for you
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-funnel font-medium text-sm text-text-secondary mb-8 leading-relaxed w-full"
          style={{ textAlign: 'center' }}
        >
          We source, shortlist, interview and hire for you
        </p>

        {/* Talk to Us CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <button
            className="flex items-center gap-3 font-funnel font-medium text-sm text-white hover:opacity-90 transition-opacity"
            onClick={() => setOpen(true)}
            style={{ background: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)', borderRadius: '12px', padding: '14px 24px' }}
          >
            Talk to Us
            <span
              className="flex items-center justify-center w-6 h-6"
              style={{ background: 'rgba(255,255,255,0.18)', borderRadius: '6px' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* ── Talk to Us Modal ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: 'rgba(63, 20, 135, 0.18)' }}
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              border: '1px solid #ECEFF1',
              borderRadius: '18px',
              padding: '24px 24px',
              width: '100%',
              maxWidth: '340px',
              boxShadow: '0 8px 48px 0 rgba(145,86,236,0.18), 0 2px 12px 0 rgba(0,0,0,0.06)',
              position: 'relative',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#F5F7F8',
                border: '1px solid #CFD8DC',
                borderRadius: '8px',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#455A64',
                fontSize: '18px',
                lineHeight: 1,
              }}
            >
              ×
            </button>

            {/* Title */}
            <h2
              className="font-funnel font-semibold text-center mb-1"
              style={{
                fontSize: '18px',
                backgroundImage: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Renate AI
            </h2>
            <p className="font-funnel text-center mb-5" style={{ fontSize: '11px', color: '#607D8B' }}>
              Let&apos;s get you started
            </p>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Name',     type: 'text',  placeholder: 'Your full name',    optional: false },
                { label: 'Contact',  type: 'tel',   placeholder: 'Phone number',       optional: false },
                { label: 'Email',    type: 'email', placeholder: 'you@company.com',    optional: false },
                { label: 'Company',  type: 'text',  placeholder: 'Your company name',  optional: false },
                { label: 'LinkedIn', type: 'url',   placeholder: 'linkedin.com/in/…',  optional: true  },
              ].map(({ label, type, placeholder, optional }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label
                    className="font-funnel font-medium"
                    style={{ fontSize: '11px', color: '#455A64', letterSpacing: '0.03em', display: 'flex', alignItems: 'center', gap: '5px' }}
                  >
                    {label}
                    {optional && (
                      <span style={{ fontSize: '10px', color: '#9156EC', background: '#F3ECFF', borderRadius: '4px', padding: '1px 6px', fontWeight: 500 }}>
                        Optional
                      </span>
                    )}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    style={{
                      background: '#F5F7F8',
                      border: '1px solid #CFD8DC',
                      borderRadius: '10px',
                      padding: '7px 11px',
                      fontSize: '12px',
                      color: '#263238',
                      outline: 'none',
                      fontFamily: 'inherit',
                      transition: 'border 0.2s',
                    }}
                    onFocus={(e) => (e.currentTarget.style.border = '1px solid #9156EC')}
                    onBlur={(e) => (e.currentTarget.style.border = '1px solid #CFD8DC')}
                  />
                </div>
              ))}

              <button
                type="submit"
                className="font-funnel font-medium text-white hover:opacity-90 transition-opacity"
                style={{
                  marginTop: '4px',
                  background: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)',
                  borderRadius: '10px',
                  padding: '10px',
                  fontSize: '13px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(145,86,236,0.35)',
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Wavy gradient layer — purple & white */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 5 }} aria-hidden="true">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', height: '220px' }}
        >
          <defs>
            <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#9156EC" stopOpacity="0.18" />
              <stop offset="40%"  stopColor="#C9A8FF" stopOpacity="0.28" />
              <stop offset="70%"  stopColor="#EAD9FF" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#ffffff"  stopOpacity="0.0" />
              <stop offset="30%"  stopColor="#D4B9FF"  stopOpacity="0.3" />
              <stop offset="65%"  stopColor="#9156EC"  stopOpacity="0.22" />
              <stop offset="100%" stopColor="#3F1487"  stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#EAD9FF" stopOpacity="0.35" />
              <stop offset="50%"  stopColor="#ffffff"  stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C9A8FF" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Wave layer 1 — deep, slow */}
          <path
            d="M0,120 C200,60 400,180 600,120 C800,60 1000,160 1200,100 C1320,70 1400,130 1440,110 L1440,220 L0,220 Z"
            fill="url(#waveGrad1)"
          />
          {/* Wave layer 2 — mid */}
          <path
            d="M0,150 C180,100 360,190 540,140 C720,90 900,170 1080,130 C1240,95 1360,155 1440,135 L1440,220 L0,220 Z"
            fill="url(#waveGrad2)"
          />
          {/* Wave layer 3 — top/light shimmer */}
          <path
            d="M0,175 C160,145 320,200 480,168 C640,136 800,195 960,165 C1120,135 1300,185 1440,160 L1440,220 L0,220 Z"
            fill="url(#waveGrad3)"
          />
        </svg>
      </div>
    </section>
  )
}
