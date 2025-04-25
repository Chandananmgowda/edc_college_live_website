import React from 'react';
import { Lightbulb, Users, Building2, Rocket } from 'lucide-react';

function WhatWeDo() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">What We Do</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto ">
          We empower students with the knowledge, resources, and opportunities they need to succeed in their entrepreneurial journey.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-indigo-900/30 p-6 rounded-lg text-center">
          <Lightbulb className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ideation Support</h3>
          <p className="text-gray-300 text-justify">Help students transform their innovative ideas into viable business plans.
Provide them with mentorship, resources, and real-world exposure to entrepreneurship.
Foster a culture of creativity, risk-taking, and problem-solving through hands-on learning.
</p>
        </div>
        <div className="bg-indigo-900/30 p-6 rounded-lg text-center">
          <Users className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mentorship Programs for Start-ups</h3>
          <p className="text-gray-300 text-justify">Guidance from industry leaders, successful entrepreneurs, and
academic experts.
o Regular workshops, seminars, and networking events to support
early-stage businesses.
o Strategic advice on business development, funding, and scaling
operations.</p>
        </div>
        <div className="bg-indigo-900/30 p-6 rounded-lg text-center">
        <Building2 className="w-12 h-12 mx-auto mb-4" />

          <h3 className="text-xl font-semibold mb-2">Infrastructure for Companies</h3>
          <p className="text-gray-300 text-justify">Fully equipped office spaces tailored to meet the needs of
businesses across diverse industries.
o Seamless access to campus resources, including advanced
laboratories, technical support, and an energetic talent pool.
o A vibrant environment designed to foster innovation and
collaboration.</p>
        </div>
        <div className="bg-indigo-900/30 p-6 rounded-lg text-center">
          <Rocket className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Workspace Solutions</h3>
          <p className="text-gray-300 text-justify">Flexible and modern workspaces designed to suit startups,
freelancers, and established companies.
o Shared facilities, including meeting rooms, high-speed internet,
and breakout zones, to enhance productivity and collaboration.
o A supportive community of like-minded individuals and
organizations.</p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Initiatives</h2>
          <div className="space-y-4">
            <div className="bg-indigo-900/20 p-4 rounded">
              <h3 className="font-semibold mb-2">E-Summit</h3>
              <p>Annual flagship event bringing together entrepreneurs, investors, and innovators.</p>
            </div>
            <div className="bg-indigo-900/20 p-4 rounded">
              <h3 className="font-semibold mb-2">Startup Mentorship Program</h3>
              <p>Personalized guidance from industry experts to help startups grow.</p>
            </div>
            <div className="bg-indigo-900/20 p-4 rounded">
              <h3 className="font-semibold mb-2">Innovation Lab</h3>
              <p>State-of-the-art facility for prototyping and experimentation.</p>
            </div>
          </div>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
            alt="Team collaboration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}

export default WhatWeDo;