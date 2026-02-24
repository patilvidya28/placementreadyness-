import React from 'react'

const items = [
  {title:'DSA Mock Test', when:'Tomorrow, 10:00 AM'},
  {title:'System Design Review', when:'Wed, 2:00 PM'},
  {title:'HR Interview Prep', when:'Friday, 11:00 AM'},
]

export default function UpcomingAssessments(){
  return (
    <div>
      <h3 className="text-lg font-semibold">Upcoming Assessments</h3>
      <ul className="mt-3 space-y-3">
        {items.map(i=> (
          <li key={i.title} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{i.title}</div>
              <div className="text-sm text-gray-600">{i.when}</div>
            </div>
            <div className="text-sm text-gray-500">›</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
