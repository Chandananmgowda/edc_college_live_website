import React from 'react';

function TrusteeMessage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Message from the Managing Trustee</h1>
        <div className="bg-indigo-900/30 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
              alt="Managing Trustee" 
              className="rounded-lg w-64 h-64 object-cover"
            />
            <div className="space-y-4">
              <p className="italic">
                "The future belongs to those who dare to dream and have the courage to turn those dreams into reality. Our E-Cell is here to support and guide these dreamers."
              </p>
              <p>
                As the Managing Trustee, I am proud to see the entrepreneurial spirit flourishing among our students. The E-Cell has become a catalyst for innovation and enterprise, providing a platform for students to explore their entrepreneurial potential.
              </p>
              <p>
                We are committed to providing state-of-the-art facilities, expert mentorship, and networking opportunities to help our students succeed in their entrepreneurial endeavors. Together, we are building a community of future leaders and innovators.
              </p>
              <p className="font-semibold mt-4">
                Mr. Vivek Alva<br />
                Managing Trustee, Alva's Education Foundation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TrusteeMessage;