import React from 'react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'

const data = [
  {subject: 'DSA', A:75},
  {subject: 'System Design', A:60},
  {subject: 'Communication', A:80},
  {subject: 'Resume', A:85},
  {subject: 'Aptitude', A:70},
]

export default function SkillRadar(){
  return (
    <div style={{width:'100%', height:300}}>
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius={90}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0,100]} />
          <Radar name="Score" dataKey="A" stroke="#7c3aed" fill="#7c3aed" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
