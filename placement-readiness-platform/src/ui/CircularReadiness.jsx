import React from 'react'

export default function CircularReadiness({value=0,size=180}){
  const stroke = 12
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const pct = Math.max(0, Math.min(100, value))
  const dash = `${(pct/100)*circumference} ${circumference}`

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size}>
        <defs>
          <linearGradient id="grad" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <circle cx={size/2} cy={size/2} r={radius} stroke="#eee" strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={radius} stroke="url(#grad)" strokeWidth={stroke} fill="none"
          strokeLinecap="round" strokeDasharray={dash} strokeDashoffset={0} transform={`rotate(-90 ${size/2} ${size/2})`} style={{transition:'stroke-dasharray 800ms ease-in-out'}}/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fontWeight="700">{value}</text>
      </svg>
      <div className="text-sm text-gray-600 mt-2">Readiness Score</div>
    </div>
  )
}
