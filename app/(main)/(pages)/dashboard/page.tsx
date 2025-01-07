import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-4 relative h-screen">
      <div className="text-3xl sticky top-0 z-10 p-4 backdrop-blur-lg flex items-center">
        Dashboard
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold mb-2">Zap Workflows</h2>
            <p className="text-gray-500">Automate tasks with ease</p>
            <Button className="bg-blue-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg mt-4">
              Explore
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold mb-2">AI Insights</h2>
            <p className="text-gray-500">Unlock hidden patterns and trends</p>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mt-4">
              Discover
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold mb-2">AI Chatbots</h2>
            <p className="text-gray-500">Build conversational interfaces</p>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg mt-4">
              Create
            </Button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Recent Activity</h2>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <p className="text-gray-500">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  );
}
