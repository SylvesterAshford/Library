import React from 'react'

export default function HeroSection() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 h-48 flex justify-center items-center">
        <div className="space-y-2 text-center">
          <h1 className="text-white text-3xl">
            Welcome from my library
          </h1>
          <p className="text-gray-300 text-sm">A place where you can store and manage your books.</p>
        </div>
    </div>
  )
}
