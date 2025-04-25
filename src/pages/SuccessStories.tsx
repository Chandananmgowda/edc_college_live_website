import React from 'react';

function SuccessStories() {
  const stories = [
    {
      name: "Innovate Solutions",
      founder: "Arun Patel",
      achievement: "Raised $2M in Series A funding",
      quote: "E-Cell's mentorship program was instrumental in our growth journey.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "GreenTech",
      founder: "Meera Singh",
      achievement: "Expanded to 5 cities in 2 years",
      quote: "The network we built through E-Cell helped us scale rapidly.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "EduTech Plus",
      founder: "Karthik Raj",
      achievement: "1M+ users across India",
      quote: "Starting from E-Cell's incubation program, we've come a long way.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Celebrating the achievements of startups that began their journey with us.
        </p>
      </section>

      <section className="space-y-12">
        {stories.map((story, index) => (
          <div key={index} className="bg-indigo-900/30 rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <img 
                src={story.image}
                alt={story.name}
                className="md:w-1/3 h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{story.name}</h3>
                <p className="text-indigo-400 mb-2">Founded by {story.founder}</p>
                <p className="text-xl font-semibold mb-4">{story.achievement}</p>
                <blockquote className="italic text-gray-300 border-l-4 border-indigo-500 pl-4">
                  "{story.quote}"
                </blockquote>
                <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default SuccessStories;