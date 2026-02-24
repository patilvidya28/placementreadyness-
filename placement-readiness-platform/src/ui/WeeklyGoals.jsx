import React from 'react'

export default function WeeklyGoals(){
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const active = [true,true,true,false,true,false,false]
  return (
    <div>
      <h3 className="text-lg font-semibold">Weekly Goals</h3>
      <div className="mt-3">
        <div className="text-sm text-gray-600">Problems Solved: <strong>12/20</strong> this week</div>
        <div className="w-full bg-gray-100 rounded h-3 mt-2">
          <div className="bg-primary h-3 rounded" style={{width:'60%'}} />
        </div>

        <div className="mt-4 flex items-center gap-2">
          {days.map((d,i)=> (
            <div key={d} className={`w-8 h-8 rounded-full flex items-center justify-center ${active[i] ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>{d.slice(0,2)}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
