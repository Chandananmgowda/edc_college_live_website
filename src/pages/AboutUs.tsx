import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About E-Cell AIET</h1>

        <div className="mb-8 space-y-2">
          <div className="bg-[#1e1b4b] p-4 rounded-md shadow-md">
            
            <div className="space-y-1 grid md:grid-cols-2 gap-12">
              <Link to="/chairman-message" className="block text-white hover:underline">
                Message from Chairman
              </Link>
              <Link to="/trustee-message" className="block text-white hover:underline">
                Message from Trustee
              </Link>
            </div>
          </div>
        </div>



        <div className="grid md:grid-cols-1 gap-12">
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team collaboration" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <p>
            At <span className="font-semibold mt-4">Alva’s Technology Centre,</span> we are committed to fostering innovation,
            entrepreneurship, and collaboration by creating an ecosystem that bridges
            academia and industry. 
            
            <p>Situated in the serene and vibrant campus of Alva’s
            Institute of Engineering and Technology, our centre is a hub for technological
            advancements and creative ventures.</p>
            </p>


            <p>
              Our <span className="font-bold mt-4">mission </span>is to create a vibrant ecosystem that nurtures innovative thinking and entrepreneurial skills, helping transform ideas into successful ventures.
            
            <p>
              Through various initiatives, workshops, and mentorship programs, we provide students with the knowledge, resources, and network needed to embark on their entrepreneurial journey.
            </p>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;