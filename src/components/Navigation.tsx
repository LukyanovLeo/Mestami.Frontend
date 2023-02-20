import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-emerald-900 items-center text-white">
      <span className="font-bold">Mestami</span>

      <span>
        <Link to="/" className="mr-2">Lounge-бары</Link>
        <Link to="/test">Тест</Link>
      </span>
    </nav>
  )
}