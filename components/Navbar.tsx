'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        background: '#ffffff',
        border: '1px solid #ECEFF1',
        borderRadius: '16px',
        boxShadow: scrolled
          ? '0 0 48px 0 rgba(212,185,255,0.55)'
          : '0 0 32px 0 rgba(212,185,255,0.4)',
        width: 'calc(100% - 48px)',
        maxWidth: '1120px',
        padding: '10px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#hero" className="shrink-0 flex items-center">
        <Image
          src="/icons/logo-full.svg"
          alt="Renate AI"
          width={147}
          height={34}
          priority
        />
      </a>

      {/* Candidate CTA */}
      <a
        href="/talent"
        className="font-funnel font-medium text-sm text-white hover:opacity-90 transition-opacity shrink-0"
        style={{
          background: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)',
          borderRadius: '10px',
          padding: '8px 16px',
        }}
      >
        <span className="flex flex-col items-center leading-tight">
          <span>Candidate?</span>
          <span style={{ fontSize: '11px', opacity: 0.85 }}>Drop in your resume</span>
        </span>
      </a>
    </nav>
  )
}
