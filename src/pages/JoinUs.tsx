import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function JoinUs() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Join E-Cell AIET</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Be part of a vibrant community of entrepreneurs and innovators.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12">
        <div className="bg-indigo-900/30 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded bg-indigo-900/50 border border-indigo-700 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 rounded bg-indigo-900/50 border border-indigo-700 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 rounded bg-indigo-900/50 border border-indigo-700 focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>ecell@aiet.edu.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Alva's Institute of Engineering and Technology, Mijar</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Why Join Us?</h2>
            <ul className="space-y-3 list-disc list-inside text-gray-300">
              <li>Access to mentorship from industry experts</li>
              <li>Networking opportunities with successful entrepreneurs</li>
              <li>Hands-on experience in organizing events</li>
              <li>Exposure to startup ecosystem</li>
              <li>Leadership development opportunities</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default JoinUs;