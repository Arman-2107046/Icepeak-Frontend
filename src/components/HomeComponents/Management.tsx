import { useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  location: string;
  linkedin: string;
  image: string;
}

const Management = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/management`);
        const data = await res.json();
        if (data) {
          setTeamMembers(data);
        }
      } catch (err) {
        console.error("Failed to fetch team members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) return <p className="mt-20 text-center">Loading team members...</p>;

  return (
    <div className="px-6 pt-[10rem] md:pt-[12rem] mt-0 sm:px-8 lg:px-24 xl:px-32 2xl:px-48">
      {/* Section Header */}
      <div className="mb-20 text-center">
        <h1 className="mb-12 font-serif text-3xl font-bold uppercase sm:text-4xl lg:text-4xl text-stone-800">
          Know Who Will Support You
        </h1>
        <div className="w-20 h-1 mx-auto mb-6 bg-gradient-to-r from-amber-500 to-amber-700"></div>
        <p className="max-w-3xl mx-auto text-base leading-relaxed sm:text-lg lg:text-lg text-stone-600">
          Meet our exceptional leadership team - seasoned professionals driving
          innovation, growth, and excellence across global markets with decades
          of combined expertise.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 lg:gap-16">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative overflow-hidden rounded-md shadow-lg cursor-pointer group w-full sm:w-[14rem] lg:w-[15rem]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="object-cover w-full transition duration-500 h-72 sm:h-80 lg:h-72 grayscale group-hover:grayscale-0 group-hover:scale-100"
            />
            <div className="absolute inset-x-0 bottom-0 translate-y-[calc(100%-3rem)] group-hover:translate-y-0 transition-transform duration-500 ease-out bg-black/15 backdrop-blur-lg border-t border-white/20 p-5 flex flex-col justify-end h-44 sm:h-48 lg:h-44">
              <p className="absolute text-white top-4 left-4 group-hover:hidden">{member.name}</p>
              <h3 className="text-xl font-bold text-white drop-shadow">{member.name}</h3>
              <p className="text-sm font-light text-amber-200 drop-shadow">{member.designation}</p>
              <p className="text-xs text-white/80 drop-shadow">{member.location}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute text-white transition-colors top-4 right-4 hover:text-blue-400"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center sm:mt-20">
        <div className="p-6 shadow-inner sm:p-8 lg:p-12 bg-gradient-to-r from-stone-50 to-amber-50 rounded-2xl">
          <h3 className="mb-4 font-serif text-2xl font-bold sm:text-2xl lg:text-3xl text-stone-800">
            Leadership Excellence
          </h3>
          <p className="max-w-4xl mx-auto text-base leading-relaxed sm:text-lg text-stone-600">
            Our management team combines deep industry expertise with innovative
            thinking, ensuring strategic growth and operational excellence
            across all global markets. Together, we're building the future of
            our industry through collaborative leadership and unwavering
            commitment to excellence.
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;