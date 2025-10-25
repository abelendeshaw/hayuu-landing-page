'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

interface NavigationProps {
  currentPage: string
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/products', label: 'Products' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              <span className="hidden sm:inline">Hayyuu Technologies</span>
              <span className="sm:hidden">Hayyuu</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={currentPage === item.href ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button 
              className="md:hidden flex items-center justify-center p-2 text-black hover:text-gray-700" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                  currentPage === item.href 
                    ? 'text-blue-600 bg-blue-50 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
