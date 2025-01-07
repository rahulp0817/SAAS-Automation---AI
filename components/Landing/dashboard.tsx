import React from "react";
import { Zap } from "./ui/zap";
import Connectingapps from "./Connectingapps";
import Features from "./features";
import Chips from "./ui/chips";
import { Brain, GitPullRequest, SquareKanban, Workflow } from "lucide-react";
import Image from "next/image";

export const Dashboard = () => {
  return (
    <>
      {/* Main header */}
      {/* <Features/> */}
      {/* how it works? */}
      <div className="mt-0">
        {/* <Chips name={"Features"} /> */}
        <h1 className="text-5xl font-bold mb-6">
          Everything Your Team is Looking For
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl">
          We're constantly innovating to help your team work smarter.
        </p>
      </div>
      {/* image + description */}
      <div>
        <div className="flex flex-wrap mt-16 gap-20">
          <div className="w-full flex justify-between gap-20">
            <div className="flex-1 flex flex-col gap-6">
              <div className="w-full h-80 rounded-xl bg-gray-100">
                <Image
                  src={"/image.png"}
                  alt="image"
                  width={400}
                  height={400}
                  className="ml-20"
                />
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <SquareKanban className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Project Management
                  </h3>
                </div>
                <p className="text-md text-gray-600">
                  Manage your Project from start to finish. With all of your
                  projects in FlowGen, you can see what everyone is working on,
                  and what needs to be done next.
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="w-full h-80 rounded-xl bg-gray-100 items-center justify-center">
                <Image
                  src={"/image.png"}
                  alt="image"
                  width={400}
                  height={400}
                  className="ml-20"
                />
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <Workflow className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Workflows and Automations
                  </h3>
                </div>
                <p className="text-md text-gray-600">
                  Create more effcient processes so you can seamlessly manage
                  projects across departments and get more done in less time
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between gap-20">
            <div className="flex-1 flex flex-col gap-6">
              <div className="w-full h-80 rounded-xl bg-gray-100">
                <Image
                  src={"/image.png"}
                  alt="image"
                  width={400}
                  height={400}
                  className="ml-20"
                />
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <Brain className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    AI-Powered Content Generation
                  </h3>
                </div>
                <p className="text-md text-gray-600">
                  Leverage the power of AI to create email, messages, or task
                  descriptions with minimal input, saving you time and effort.
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="w-full h-80 rounded-xl bg-gray-100">
                <Image
                  src={"/image.png"}
                  alt="image"
                  width={400}
                  height={400}
                  className="ml-20"
                />
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <GitPullRequest className="mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Seamless App Integration
                  </h3>
                </div>
                <p className="text-md text-gray-600">
                  Connect your favorite apps and automate your workflow in
                  minutes. FlowGen offers a variety of integration methods to
                  fit your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How to Integrate */}
      <div className="mt-32">
        <h2 className="text-5xl font-bold mb-8">
          <span className="block mb-4">How to Integrate with</span>
          <span className="block"> FlowGen</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mb-0">
          Connect your apps and automate your workflow in minutes. FlowGen
          offers a variety of integration methods to fit your needs.
        </p>
      </div>
      <div className="flex flex-row items-center justify-between gap-20 mt-0">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Connect Your Apps</h2>
          <p className="text-xl text-gray-600">
            Seamlessly integrate your favorite apps and automate your workflow.
            Connect apps like Google Drive, Notion, WhatsApp and more with just
            a few clicks.
          </p>
        </div>
        <div className="flex-1">
          <Zap />
        </div>
      </div>
      {/* sidebar display - 2 */}
      <div className="flex flex-row-reverse items-center justify-between gap-20 mt-20">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">
            Web Integration Made Simple
          </h2>
          <p className="text-xl text-gray-600">
            Connect with any web service through our powerful API integrations.
            From social media platforms to productivity tools, automate your
            entire web workflow in one place.
          </p>
          <ul className="mt-6 space-y-4 text-lg text-gray-600">
            <li className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Web hooks and API integrations
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Browser automation and scraping
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Custom workflow triggers
            </li>
          </ul>
        </div>
        {/* Integration methods */}
        <div className="flex-1 bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">REST API Integration</h3>
              <p className="text-sm text-gray-600">
                Connect to any REST API endpoint
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Browser Automation</h3>
              <p className="text-sm text-gray-600">
                Automate repetitive web tasks
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">Webhook Triggers</h3>
              <p className="text-sm text-gray-600">
                React to web events in real-time
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Why autoflow */}
      <div>
        <div className="mt-32 ">
          <h2 className="text-5xl font-bold mb-8">
            <span className="block mb-4">Increase Productivity</span>
            <span className="block">and Save Time</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-20">
            FlowGen helps teams streamline their workflows, reduce manual tasks,
            and focus on what matters most.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-sm border">
              <div className="flex mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Improve Collaboration
              </h3>
              <p className="text-gray-600">
                Enable seamless teamwork with shared workflows and real-time
                updates across your organization.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-sm border">
              <div className="flex mb-6 ">
                <div className="p-3 bg-green-100 rounded-full">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enhance Visibility</h3>
              <p className="text-gray-600">
                Get complete oversight of your automated processes with detailed
                analytics and monitoring.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-sm border">
              <div className="flex mb-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Boost Efficiency</h3>
              <p className="text-gray-600">
                Eliminate repetitive tasks and reduce human error with
                intelligent automation solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* features */}
      {/* Developers trusted */}
      <div className="mt-32 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Trusted by developers worldwide
        </h2>
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p className="text-gray-600">
              Connect your web services with just a few lines of code
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Powerful Automation</h3>
            <p className="text-gray-600">
              Build complex workflows with our visual editor
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-2">Reliable Performance</h3>
            <p className="text-gray-600">
              99.9% uptime with enterprise-grade reliability
            </p>
          </div>
        </div>
      </div>
      {/* connecting apps */}
      <Connectingapps />
      {/* pricing */}
    </>
  );
};
