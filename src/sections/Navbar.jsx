import React from 'react'

export function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <img src="/images/nav-logo.svg" alt="logo" className="scale-90" />
      <img src="/images/menu.svg" alt="hamburger menu" className="w-10" />
    </nav>
  )
}
