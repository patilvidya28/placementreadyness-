import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Code, Monitor, BookOpen, User } from 'lucide-react'

const items = [
  {to:'/app/dashboard', label:'Dashboard', icon: Home},
  {to:'/app/practice', label:'Practice', icon: Code},
  {to:'/app/assessments', label:'Assessments', icon: Monitor},
  {to:'/app/resources', label:'Resources', icon: BookOpen},
  {to:'/app/profile', label:'Profile', icon: User},
]

export default function Sidebar(){
  return (
    <aside className="w-64 border-r border-gray-100 p-4">
      <div className="text-lg font-semibold mb-6">Placement Prep</div>
      <nav className="flex flex-col gap-2">
        {items.map(i=>{
          const Icon = i.icon
          return (
            <NavLink key={i.to} to={i.to} className={({isActive})=>`flex items-center gap-3 px-3 py-2 rounded-md ${isActive? 'bg-primary text-white':'text-gray-700 hover:bg-gray-50'}`}>
              <Icon size={18} /> {i.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
