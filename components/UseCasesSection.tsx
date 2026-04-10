'use client'

import { useState } from 'react'
import Image from 'next/image'

const industries = [
  {
    label: 'IT Sector',
    heading: 'Hire Top Tech Talent,\nFaster Than Ever',
    body: 'From software engineers to DevOps specialists, Renate screens candidates against technical requirements and shortlists only the best-fit profiles.',
    bullets: ['Automated technical pre-screening questions', 'Evaluate coding experience and stack familiarity', 'Shortlist senior engineers in hours, not weeks'],
  },
  {
    label: 'Retail & E-commerce',
    heading: 'Scale Your Retail Team\nwithout the Hassle',
    body: 'Quickly identify candidates with the right customer service skills and experience for high-volume retail roles.',
    bullets: ['Screen for customer-facing skills at scale', 'Handle seasonal hiring spikes effortlessly', 'Evaluate availability and schedule fit automatically'],
  },
  {
    label: 'Healthcare',
    heading: 'Find Qualified\nHealthcare Professionals',
    body: 'Ensure only compliant, qualified candidates make it to interview stage with automated credential and experience screening.',
    bullets: ['Verify licenses and certifications automatically', 'Screen for specialized medical experience', 'Maintain compliance throughout the hiring process'],
  },
  {
    label: 'Customer Support',
    heading: 'Build Your Dream\nSupport Team Faster',
    body: 'Screen for communication skills, empathy, and problem-solving ability through natural AI voice conversations.',
    bullets: ['Assess communication and language skills live', 'Test conflict resolution and empathy', 'Identify high-potential candidates at any volume'],
  },
  {
    label: 'Fintech',
    heading: 'Hire Fintech Talent\nwith Confidence',
    body: 'Screen candidates for financial domain knowledge, regulatory awareness, and technical acumen.',
    bullets: ['Assess regulatory and compliance knowledge', 'Evaluate technical and analytical skills', 'Fast-track hiring for high-growth fintech roles'],
  },
  {
    label: 'EdTech',
    heading: 'Recruit Top Educators\nand EdTech Experts',
    body: 'Identify candidates who are passionate about education and have the right pedagogical and technical skills.',
    bullets: ['Screen for teaching experience and style', 'Evaluate ed-tech platform familiarity', 'Hire curriculum designers and trainers at scale'],
  },
  {
    label: 'Logistics',
    heading: 'Power Your Logistics\nTeam at Any Scale',
    body: 'Quickly fill high-volume logistics roles with candidates screened for reliability, experience, and availability.',
    bullets: ['Automate screening for drivers and warehouse staff', 'Verify experience and availability instantly', 'Handle large hiring cohorts without extra effort'],
  },
  {
    label: 'Manufacturing',
    heading: 'Find Skilled\nManufacturing Workers',
    body: 'Screen for technical skills, safety awareness, and shift availability to build a reliable manufacturing workforce.',
    bullets: ['Screen for technical certifications and machinery experience', 'Evaluate safety training and protocols knowledge', 'Match availability to shift requirements automatically'],
  },
]

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <defs>
        <linearGradient id="ck3" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#9156EC" /><stop offset="1" stopColor="#3F1487" />
        </linearGradient>
      </defs>
      <circle cx="8" cy="8" r="8" fill="url(#ck3)" />
      <path d="M5 8.5L7 10.5L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = industries[activeIndex]

  return (
    <section id="use-cases" className="py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div
            className="gradient-border inline-flex items-center gap-2 mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(212,185,255,0.08) 0%, rgba(145,86,236,0.24) 100%)',
              borderRadius: '16px',
              padding: '6px 14px',
            }}
          >
            <span
              className="flex items-center justify-center w-4 h-4 rounded-full"
              style={{ background: 'linear-gradient(135deg, #D4B9FF 0%, #9156EC 100%)' }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M4 0.5L5 2.5L7.5 3L5.75 4.75L6.25 7.25L4 6.25L1.75 7.25L2.25 4.75L0.5 3L3 2.5L4 0.5Z" fill="white" />
              </svg>
            </span>
            <span
              className="font-funnel font-semibold text-xs gradient-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)' }}
            >
              Use Cases
            </span>
          </div>

          <h2
            className="font-funnel font-semibold text-text-primary mb-4"
            style={{ fontSize: '64px', lineHeight: '1.05' }}
          >
            Built for Every Industry
          </h2>
          <p className="font-funnel font-medium text-sm text-text-secondary max-w-xl">
            From tech to operations, Renate adapts to your hiring needs — automating candidate calls, screening, and shortlisting across industries at scale.
          </p>
        </div>

        {/* Tab Pills — Frame 18: bg #F5F7F8, border #CFD8DC, radius 12 */}
        <div
          className="flex flex-wrap gap-2 p-3 mb-10"
          style={{ background: '#F5F7F8', border: '1px solid #CFD8DC', borderRadius: '12px' }}
        >
          {industries.map((ind, i) => (
            <button
              key={ind.label}
              onClick={() => setActiveIndex(i)}
              className="font-funnel font-semibold text-xs px-4 py-2 transition-all duration-200"
              style={
                i === activeIndex
                  ? {
                      background: 'linear-gradient(135deg, #D4B9FF 0%, #9156EC 100%)',
                      color: '#ffffff',
                      borderRadius: '8px',
                    }
                  : {
                      background: '#F5F7F8',
                      color: '#607D8B',
                      borderRadius: '8px',
                    }
              }
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <h3
              className="font-funnel font-semibold text-text-primary mb-4 whitespace-pre-line"
              style={{ fontSize: '40px', lineHeight: '1.15' }}
            >
              {active.heading}
            </h3>
            <p className="font-funnel font-medium text-sm text-text-secondary mb-6 leading-relaxed max-w-md">
              {active.body}
            </p>
            <ul className="flex flex-col gap-3">
              {active.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="font-funnel font-medium text-sm text-text-secondary">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image — Rectangle 24: use-case.png + GRADIENT_LINEAR(#9156ec → #0062ff), radius 32 */}
          <div className="flex-1 w-full">
            <div
              className="relative"
              style={{ height: '340px', borderRadius: '32px', overflow: 'hidden' }}
            >
              <Image
                src="/images/use-case.png"
                alt={active.label}
                fill
                style={{ objectFit: 'cover' }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #9156EC 0%, #0062FF 100%)',
                  opacity: 0.45,
                }}
              />
              {/* Label */}
              <div className="absolute bottom-5 left-5 z-10">
                <span
                  className="font-funnel font-semibold text-sm text-white px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(145,86,236,0.6)', backdropFilter: 'blur(8px)' }}
                >
                  {active.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
