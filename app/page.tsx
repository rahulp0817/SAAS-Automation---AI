import Image from "next/image";
import { Navbar } from "@/components/Landing/navbar";
import { Dashboard } from "@/components/Landing/dashboard";
import Footer from "@/components/Landing/footer";
import { Spotlightlanding } from "@/components/Landing/ui/Spotlightlanding";
import Hero from "@/assets/Landing/heroland.png";
import { Buttonanimate } from "@/components/Landing/ui/buttonanimate";

export default function Home() {
  return (
    <main>
      <Spotlightlanding />
      <Navbar />
      {/* <div className="-mt-60 relative z-0 ">
        <Image
          src={Hero}
          alt="Hero video fallback"
          width={1920}
          height={1080}
          className="w-full"
        />
      </div> */}
      <div className="flex min-h-screen flex-col justify-between  p-24 mt-16 ">
        <Dashboard />
      </div>

      {/* recommened for website  */}
      <div className="mt-0 bg-purple-50 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            A better way to work Today, Together
          </h2>
          <p className="text-lg text-gray-600 mb-0">
            Join thousands of teams who are transforming their workflow with
            AutoFlow. Build powerful automations, collaborate seamlessly, and
            focus on what matters most.
          </p>
          <Buttonanimate />
          {/* <div className="flex justify-center gap-6">
            <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-4 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              How it Works
            </button>
          </div> */}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}
