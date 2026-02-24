import React, {useState} from 'react'
import { extractSkills, buildChecklist, build7DayPlan, buildQuestions, computeReadiness } from '../utils/analysis'

export default function Analyze(){
  const [company,setCompany] = useState('')
  const [role,setRole] = useState('')
  const [jd,setJd] = useState('')

  const analyze = ()=>{
    const skills = extractSkills(jd)
    const checklist = buildChecklist(skills)
    const plan = build7DayPlan(skills)
    const questions = buildQuestions(skills)
    const readiness = computeReadiness({skills,company,role,jdText:jd})
    const entry = {
      id: 'id_'+Date.now(),
      createdAt: Date.now(),
      company, role, jdText: jd,
      extractedSkills: skills.map(s=>s.skill),
      checklist, plan, questions,
      baseReadiness: readiness,
      readinessScore: readiness,
      skillConfidenceMap: Object.fromEntries(skills.map(s=>[s.skill,'practice']))
    }
    const h = JSON.parse(localStorage.getItem('placements_history')||'[]')
    h.push(entry)
    localStorage.setItem('placements_history', JSON.stringify(h))
    window.location.href = '/app/results/'+entry.id
  }

  return (
    <div className="card space-y-3">
      <h3 className="text-lg font-semibold">Analyze Job Description</h3>
      <input placeholder="Company" value={company} onChange={e=>setCompany(e.target.value)} className="w-full p-2 border rounded" />
      <input placeholder="Role" value={role} onChange={e=>setRole(e.target.value)} className="w-full p-2 border rounded" />
      <textarea rows={8} placeholder="Paste JD here" value={jd} onChange={e=>setJd(e.target.value)} className="w-full p-2 border rounded" />
      <div className="flex items-center gap-2">
        <button onClick={analyze} className="px-4 py-2 bg-primary text-white rounded">Analyze</button>
      </div>
    </div>
  )
}
