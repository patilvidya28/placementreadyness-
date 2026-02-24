import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Practice from './pages/Practice'
import Assessments from './pages/Assessments'
import Resources from './pages/Resources'
import Profile from './pages/Profile'
import Analyze from './pages/Analyze'
import History from './pages/History'
import Results from './pages/Results'
import AppShell from './shell/AppShell'

export default function App(){
  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/app' element={<AppShell/>}>
        <Route index element={<Dashboard/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='practice' element={<Practice/>} />
        <Route path='assessments' element={<Assessments/>} />
        <Route path='resources' element={<Resources/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='analyze' element={<Analyze/>} />
        <Route path='history' element={<History/>} />
        <Route path='results/:id?' element={<Results/>} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
