const stats = [
  { value: '3x', label: 'Faster Hiring with AI' },
  { value: '500+', label: 'Growing Companies Trust Renate' },
  { value: '10,000+', label: 'AI Calls Completed' },
]

export default function StatsBar() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.value}
            className={`flex flex-col items-center text-center py-8 px-6 ${
              index === 1 ? 'border-y md:border-y-0 md:border-x border-bg-border' : ''
            }`}
          >
            <span
              className="font-funnel font-semibold gradient-text leading-none"
              style={{
                fontSize: '64px',
                backgroundImage: 'linear-gradient(135deg, #9156EC 0%, #3F1487 100%)',
              }}
            >
              {stat.value}
            </span>
            <span className="font-funnel font-medium text-base text-text-primary mt-3 max-w-[160px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
