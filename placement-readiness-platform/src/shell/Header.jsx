import React from 'react'

export default function Header(){
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
      <div className="text-lg font-semibold">Placement Prep</div>
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">Signed in as</div>
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">U</div>
      </div>
    </header>
  )
}
