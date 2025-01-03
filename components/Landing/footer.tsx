import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="mt-0">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="text-black"
                  stroke="currentColor" 
                  strokeWidth="2"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="text-xl font-bold">AutoFlow</span>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Automate your workflow seamlessly
              </p>
            </div>
            
            <div className="mt-8 md:mt-0">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} AutoFlow. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

