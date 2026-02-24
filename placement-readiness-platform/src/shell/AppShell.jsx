import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AppShell(){
  return (
    <div className="min-h-screen flex bg-[color:var(--bg)]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
