import React from 'react'
import CircularReadiness from '../ui/CircularReadiness'
import SkillRadar from '../ui/SkillRadar'
import ContinuePractice from '../ui/ContinuePractice'
import WeeklyGoals from '../ui/WeeklyGoals'
import UpcomingAssessments from '../ui/UpcomingAssessments'

export default function Dashboard(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <div className="card flex items-center justify-center">
          <CircularReadiness value={72} />
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Skill Breakdown</h3>
          <SkillRadar />
        </div>

        <div className="card">
          <ContinuePractice />
        </div>
      </div>

      <div className="space-y-6">
        <div className="card">
          <WeeklyGoals />
        </div>
        <div className="card">
          <UpcomingAssessments />
        </div>
      </div>
    </div>
  )
}
