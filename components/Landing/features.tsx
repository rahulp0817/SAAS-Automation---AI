import React from 'react'

export default function Features() {
  return (
    <div className="grid grid-cols-2 gap-8 mt-16">
      {/* Feature 1 */}
      <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 animate-fade-in overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <img src="/dashboard1.png" alt="Workflow Dashboard" className="w-full h-48 object-cover rounded-lg mb-6" />
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-blue-500 p-3 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Workflow Automation</h3>
        </div>
        <p className="text-gray-600">Automate repetitive tasks and streamline your processes with our powerful workflow automation tools.</p>
      </div>

      {/* Feature 2 */}
      <div className="relative bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 animate-fade-in delay-200 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500"></div>
        <img src="/dashboard2.png" alt="Integration Dashboard" className="w-full h-48 object-cover rounded-lg mb-6" />
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-500 p-3 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Custom Integration</h3>
        </div>
        <p className="text-gray-600">Connect and integrate with your favorite tools and services seamlessly.</p>
      </div>

      {/* Feature 3 */}
      <div className="relative bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 animate-fade-in delay-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
        <img src="/dashboard3.png" alt="Task Management Dashboard" className="w-full h-48 object-cover rounded-lg mb-6" />
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-orange-500 p-3 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Task Management</h3>
        </div>
        <p className="text-gray-600">Organize and track your tasks efficiently with our intuitive task management system.</p>
      </div>

      {/* Feature 4 */}
      <div className="relative bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 animate-fade-in delay-400 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500"></div>
        <img src="/dashboard4.png" alt="Analytics Dashboard" className="w-full h-48 object-cover rounded-lg mb-6" />
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-pink-500 p-3 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Advanced Analytics</h3>
        </div>
        <p className="text-gray-600">Get detailed insights and analytics to optimize your automation workflows.</p>
      </div>
    </div>
  )
}


