import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Renate — Your AI Recruiter that Actually Talks Like a Human',
  description:
    'Screen, call, and qualify candidates automatically with lifelike AI voice agents. Hire 3x faster with Renate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Funnel Display', sans-serif" }}>{children}</body>
    </html>
  )
}
