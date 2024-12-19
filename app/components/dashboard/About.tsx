import React, { useState } from "react";
import Button from "../common/Button";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"; // Import social media icons

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Array of team members
  const teamMembers = [
    {
      name: "John Doe",
      image: "/images/team1.jpg", // Replace with the correct image path
      comment: "Leading the charge with innovative ideas!",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/johndoe",
        instagram: "https://www.instagram.com/johndoe",
        facebook: "https://www.facebook.com/johndoe"
      }
    },
    {
      name: "Jane Smith",
      image: "/images/team2.jpg", // Replace with the correct image path
      comment: "Helping bridge connections between investors and businesses.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/janesmith",
        instagram: "https://www.instagram.com/janesmith",
        facebook: "https://www.facebook.com/janesmith"
      }
    },
    {
      name: "James Bond",
      image: "/images/team3.jpg", // Replace with the correct image path
      comment: "Strategizing for success and fostering collaboration.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/jamesbond",
        instagram: "https://www.instagram.com/jamesbond",
        facebook: "https://www.facebook.com/jamesbond"
      }
    },
    {
      name: "James Kevin",
      image: "/images/team3.jpg", // Replace with the correct image path
      comment: "Strategizing for success and fostering collaboration.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/jamesbond",
        instagram: "https://www.instagram.com/jamesbond",
        facebook: "https://www.facebook.com/jamesbond"
      }
    },
  ];

  return (
    <div className="bg-white h-[70vh] overflow-auto px-5 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-primaryColor">
          About Angels Radar
        </h1>
        <p className="text-sm text-center text-gray-600 mt-4">
          Empowering investors and entrepreneurs to connect and thrive.
        </p>

        {/* Company Description */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondaryColor">Our Company</h2>
          <p className="mt-2 text-sm text-gray-700">
            At Angels Radar, we strive to connect visionary investors with emerging companies.
            Our platform is designed to foster opportunities that drive success for both parties,
            whether you're seeking investment opportunities or offering a startup ready to take the next step.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondaryColor">Our Mission</h2>
          <p className="mt-2 text-sm text-gray-700">
            Our mission is to facilitate meaningful connections between investors and entrepreneurs. By
            leveraging cutting-edge technology, we aim to support the growth of innovative startups and create
            a thriving ecosystem for mutual success.
          </p>
        </div>

        {/* Goals Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondaryColor">Our Goals</h2>
          <ul className="mt-2 text-sm text-gray-700 list-disc pl-5">
            <li>To create a platform that provides easy access to investment opportunities.</li>
            <li>To help startups connect with investors who align with their vision.</li>
            <li>To foster a collaborative environment where both investors and startups can thrive.</li>
            <li>To expand our reach and impact by growing our network of users and partners.</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondaryColor">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-[18px] font-semibold text-color1">{member.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{member.comment}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl text-blue-600" />
                  </a>
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl text-pink-600" />
                  </a>
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl text-blue-700" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className=" py-5 overflow-auto">
          <h2 className="text-2xl font-semibold text-secondaryColor">Frequently Asked Questions</h2>
          <div className="mt-4">
            {["What is Angels Radar?", "How does Angels Radar work?", "How can I invest?", "What types of businesses can join?"].map((question, index) => (
              <div key={index} className="border-b pb-4">
                <div
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-sm font-medium text-gray-700">{question}</h3>
                  <span className="text-color1 text-[18px] text-center font-semibold cursor-pointer rounded-full w-[30px] h-[30px] hover:bg-gray-100">{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-600">
                    {index === 0 && "Angels Radar is an investment platform that connects investors with emerging companies, providing both the chance to discover opportunities and showcase businesses."}
                    {index === 1 && "Investors can browse startup profiles, view their business plans, and choose to invest based on their interests and goals."}
                    {index === 2 && "Investors can register on our platform and explore available startup investment opportunities."}
                    {index === 3 && "Startups from all sectors are welcome to join, provided they are innovative and have strong growth potential."}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex gap-4  justify-center">
          <Button>
            <Link href={"/?section=radar"}>Find Companies</Link>
          </Button>
          <Button variant="secondary">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
