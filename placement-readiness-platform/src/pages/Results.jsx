import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

function extractById(id){
  const h = JSON.parse(localStorage.getItem('placements_history')||'[]')
  return h.find(x=>x.id===id) || h[h.length-1] || null
}

export default function Results(){
  const {id} = useParams()
  const [entry,setEntry] = useState(null)
  useEffect(()=>{
    const e = extractById(id)
    setEntry(e)
  },[id])

  if(!entry) return <div className="text-gray-600">No result selected.</div>

  const toggleSkill = (skill)=>{
    const map = entry.skillConfidenceMap || {}
    map[skill] = map[skill]==='know' ? 'practice' : 'know'
    entry.skillConfidenceMap = map
    // recalc score
    let score = entry.baseReadiness || entry.readinessScore || 35
    Object.keys(map).forEach(s=>{ score += map[s]==='know' ? 2 : -2 })
    score = Math.max(0, Math.min(100, score))
    entry.readinessScore = score
    persist(entry)
    setEntry({...entry})
  }

  const persist = (data)=>{
    const h = JSON.parse(localStorage.getItem('placements_history')||'[]')
    const idx = h.findIndex(x=>x.id===data.id)
    if(idx>=0) h[idx]=data
    localStorage.setItem('placements_history', JSON.stringify(h))
  }

  const copyText = (text)=>{navigator.clipboard.writeText(text)}
  const downloadTxt = ()=>{
    const blob = new Blob([JSON.stringify(entry,null,2)],{type:'text/plain'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href=url; a.download='analysis.txt'; a.click(); URL.revokeObjectURL(url)
  }

  const weak = Object.entries(entry.skillConfidenceMap || {}).filter(([k,v])=>v==='practice').map(([k])=>k).slice(0,3)

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Results — {entry.company || 'Company'}</h2>
      <div className="card">
        <h3 className="font-medium">Key skills extracted</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {(entry.extractedSkills || []).map(s=> (
            <button key={s} onClick={()=>toggleSkill(s)} className={`px-3 py-1 rounded-full border ${entry.skillConfidenceMap?.[s]==='know' ? 'bg-primary text-white':'bg-gray-50 text-gray-700'}`}>{s} — {entry.skillConfidenceMap?.[s]||'practice'}</button>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="font-medium">Readiness Score: {entry.readinessScore}</h3>
      </div>

      <div className="card">
        <h3 className="font-medium">Exports</h3>
        <div className="mt-3 flex gap-2">
          <button onClick={()=>copyText(entry.planText||'')} className="px-3 py-1 bg-gray-100 rounded">Copy 7-day plan</button>
          <button onClick={()=>copyText(entry.checklistText||'')} className="px-3 py-1 bg-gray-100 rounded">Copy round checklist</button>
          <button onClick={()=>copyText((entry.questions||[]).join('\n'))} className="px-3 py-1 bg-gray-100 rounded">Copy 10 questions</button>
          <button onClick={downloadTxt} className="px-3 py-1 bg-primary text-white rounded">Download as TXT</button>
        </div>
      </div>

      <div className="card">
        <h3 className="font-medium">Action Next</h3>
        <div className="mt-2">Top weak skills: {weak.join(', ') || 'None'}</div>
        <div className="mt-3"><button className="px-4 py-2 bg-primary text-white rounded">Start Day 1 plan now</button></div>
      </div>
    </div>
  )
}
