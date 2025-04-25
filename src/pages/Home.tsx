import React from 'react';
import { Rocket } from 'lucide-react';

function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className=" mt-20 text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Innovation Hub</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Empowering entrepreneurs and fostering innovation through mentorship, resources, and community.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-indigo-900/50 p-8 rounded-lg">
          <Rocket className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Launch Your Startup</h3>
          <p className="text-gray-300">Get the support and resources you need to turn your idea into reality.</p>
        </div>
        <div className="bg-indigo-900/50 p-8 rounded-lg">
          <Rocket className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Expert Mentorship</h3>
          <p className="text-gray-300">Connect with industry leaders who can guide your journey to success.</p>
        </div>
        <div className="bg-indigo-900/50 p-8 rounded-lg">
          <Rocket className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-3">Innovation Network</h3>
          <p className="text-gray-300">Join a community of forward-thinking entrepreneurs and innovators.</p>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-4xl font-bold text-indigo-400">100+</p>
            <p className="text-gray-300">Startups Launched</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-400">50M+</p>
            <p className="text-gray-300">In Funding Raised</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-400">200+</p>
            <p className="text-gray-300">Mentors</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-400">1000+</p>
            <p className="text-gray-300">Community Members</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;