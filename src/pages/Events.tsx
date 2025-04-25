import React from 'react';

function Events() {
  const events = [
    {
      title: "E-Summit 2024",
      date: "March 15-16, 2024",
      description: "Annual entrepreneurship summit featuring keynote speakers, workshops, and startup competitions.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Startup Weekend",
      date: "April 5-7, 2024",
      description: "54-hour event where participants pitch ideas, form teams, and launch startups.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Innovation Challenge",
      date: "May 20, 2024",
      description: "Competition for innovative solutions to real-world problems.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join us for exciting events that bring together entrepreneurs, innovators, and industry leaders.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-indigo-900/30 rounded-lg overflow-hidden">
            <img 
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-indigo-400 mb-3">{event.date}</p>
              <p className="text-gray-300">{event.description}</p>
              <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Events;