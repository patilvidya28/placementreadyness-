import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function History(){
  const [history, setHistory] = useState([])
  useEffect(()=>{
    const h = JSON.parse(localStorage.getItem('placements_history')||'[]')
    setHistory(h.reverse())
  },[])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Analysis History</h2>
      {history.length===0 && <div className="text-gray-600">No history yet.</div>}
      <ul className="space-y-3">
        {history.map(item=> (
          <li key={item.id} className="card flex items-center justify-between">
            <div>
              <div className="font-medium">{item.company || 'Unknown Company'} — {item.role || 'Role'}</div>
              <div className="text-sm text-gray-600">{new Date(item.createdAt).toLocaleString()}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm font-semibold">{item.readinessScore}</div>
              <Link to={`/app/results/${item.id}`} className="text-sm text-primary">View</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
