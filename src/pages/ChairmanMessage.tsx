import React from 'react';

function ChairmanMessage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Message from the Chairman</h1>
        <div className="bg-indigo-900/30 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
              alt="Chairman" 
              className="rounded-lg w-64 h-64 object-cover"
            />
            <div className="space-y-4">
              <p className="italic">
                "Innovation and entrepreneurship are the cornerstones of progress. At AIET, we are committed to nurturing the next generation of entrepreneurs who will shape the future of our nation."
              </p>
              <p>
                Our E-Cell stands as a testament to our dedication to fostering entrepreneurial spirit among our students. We believe that every student has the potential to become a successful entrepreneur, and our role is to provide them with the right environment, guidance, and resources to achieve their dreams.
              </p>
              <p>
                Through our various initiatives and programs, we aim to create a robust ecosystem that encourages innovation, creativity, and entrepreneurship. I invite all students to take advantage of these opportunities and embark on their entrepreneurial journey.
              </p>
              <p className="font-semibold mt-4">
                Dr. M. Mohan Alva<br />
                Chairman, Alva's Education Foundation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ChairmanMessage;