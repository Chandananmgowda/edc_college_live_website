import React from 'react';
import infosysImg from '../img/infosysb.jpg';
import Stellium from '../img/stellium1.jpg';
import Hacfy  from'../img/hacfy2.jpg';
import Strecon from '../img/straecon3.jpg';
import Vithsuthra from '../img/vithsuthra.jpg';
import Homezacart from '../img/homezacart.jpg';
import Vulcans from '../img/vulcans1.jpg';

function Startups() {
 
  const startups = [
    {
      name: "Infosys",
      description: "Infosys BPM has announced the pilot launch of its innovative Student Apprentice Model (SAM), designed to create a sustainable talent pipeline while optimizing costs and addressing fluctuating business demands at AIET Campus. The initiative reflects Infosys BPM's commitment to fostering a dynamic workforce through flexible staffing models. By leveraging local talent, the SAM program aims to bridge the gap between academic learning and professional experience, offering students valuable industry exposure while addressing client needs efficiently.",
      founder: "Narayan Murthy",
      image: infosysImg
    },
    {
      name: "Stellium",
      description: "Stellium is re-imagining Supply Chain and Manufacturing by intelligently connecting People, Goods, Systems and Machines to make our clients future ready. Understanding the client’s supply chain dynamics, mapping the constraints, devising strategies to optimally use the available resources and building best-in-class solutions for achieving supply chain synergies. Stellium helps combine expertise, science and technology to deliver path-breaking solutions. ",
      founder: "****",
      image: Stellium
    },
    {
      name: "HacFy",
      description: "HacFy, equip individuals and organizations with the knowledge, tools, and skills to navigate the ever-evolving digital world. It offers training, workshops,webinars, and internships in ethical hacking, bug hunting, WAM VAPT, cloud security, GRC, SOC, and forensics. Addtionally, it also provides consulting services, including VAPT, to help organizations secure their digital environments. Their vision is to become the world's leading partner in cybersecurity education and consultancy, enabling individuals and organizations to safeguard their assets and thrive in a secure digital environment. Firm aims to promote innovation, resilience, and continuous growth in the global digital ecosystem.",
      founder: "Sujay Kumar",
      image: Hacfy,
      website:"https://hacfy.com/"
    }
    ,
    {
      name: "STRAECON",
      description: "STRAECON is a technology-based engineering services company. The core strength comes from a combination of in-depth understanding of the Structural Steel Fabrication industry and the use of technology to solve their customer’s problems quickly, most efficiently, and cost-effectively. Quality,Schedule, and Customer Service have always been key to our success. They have also upgraded their services to provide complete Design Assistance and Fabrication Assistance.",
      founder: "***",
      image: Strecon
     
    }
    ,
    {
      name: "Vithsutra Technologies Pvt Ltd",
      description: "Co. bridges the gap between cutting-edge technology and practical business solutions bringing fresh perspectives and innovative approaches to the tech industry, focusing on IoT, Robotics, and Industrial Automation. Co’s vision is to drive innovation and create a meaningful difference in existing and future technologies by delivering high-quality products and services with enhanced product life, ensuring customer satisfaction at every step.",
      founder: "Kiran Kashyap",
      image: Vithsuthra,
      website:" https://www.vithsutra.com/"
    }
    ,
    {
      name: "HOMZA CART INDIA Pvt. LTD.",
      description: "At HomZa Cart, they redefine convenience by offering seamless delivery services for all food and grocery needs. Whether ordering fresh produce, pantry essentials, or a hot meal from favourite restaurant, they are here to make your shopping and dining experiences effortless. Mission is to simplify your life by delivering groceries and meals to your doorstep with efficiency, care, and reliability.",
      founder: "Anjali Desai",
      image: Homezacart
    }
    ,
    {
      name: "Vulcans Academy – Edutech",
      description: "At Vulcan Academy, it is not just about education; it’s about elevating career to unprecedented levels. Established with the mission to instil apt skills among the youth, it introduces you to a world of innovative testing solutions designed to propel you towards your aspirations. Academy stands out by cultivating not just knowledge, but practical wisdom that prepares you for the challenges ahead. With decades of expertise under its belt, firm established itself on fostering unique synergies between students and industries for truly impactful outcomes. Specializing in a spectrum of testing solutions, Vulcan Academy is dedicated to assessing and enhancing specialized communication skills. From English proficiency and accent training to preparing for BPO roles and study abroad programs, Vulcans assessments are meticulously tailored to meet a variety of needs",
      founder: "Anjali Desai",
      image: Vulcans
    }
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Startups</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover innovative ventures founded by our talented entrepreneurs.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {startups.map((startup, index) => (
          <div key={index} className="bg-indigo-900/30 rounded-lg overflow-hidden group relative">
          <img 
            src={startup.image}
            alt={startup.name}
            className="w-full h-48 object-cover"
          />
        

  {/* Card content */}
  <div className="p-16 ">
    <h3 className="text-xl font-semibold mb-2">{startup.name}</h3>
    <p className="text-indigo-400 mb-3">Founded by {startup.founder}</p>

    
          </div>
      
        
  <div className="absolute inset-0 bg-indigo-800/90 text-sm text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded  text-justify">
    {startup.description}
    <div className="absolute inset-0 bg-indigo-800/90 text-sm text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded text-justify">
  {startup.description}
  {startup.website && (
    <div>
      <a
        href={startup.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-white text-center"
      >
        Learn More
      </a>
    </div>
  )}
</div>

   

</div>

  </div>      
        
        ))}
      </section>
    </main>
  );
}

export default Startups;