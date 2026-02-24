import React from 'react'

export default function ContinuePractice(){
  return (
    <div>
      <h3 className="text-lg font-semibold">Continue Practice</h3>
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Dynamic Programming</div>
            <div className="text-sm text-gray-600">Last practiced: 2 days ago</div>
          </div>
          <button className="px-3 py-1 bg-primary text-white rounded">Continue</button>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-100 rounded h-3">
            <div className="bg-primary h-3 rounded" style={{width:'30%'}} />
          </div>
          <div className="text-sm text-gray-600 mt-1">3 / 10 completed</div>
        </div>
      </div>
    </div>
  )
}
