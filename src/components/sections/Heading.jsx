import React from "react";
import profileImg from "../assets/profile/profile-img.jpg";

function Heading() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="bg-gradient-to-b from-[#2d2d2d] to-[#1e1e1e] text-white text-center py-8">
      <div className="flex flex-col items-center">
        <div className="">
          <img
            src={profileImg}
            className="h-40 w-40 rounded-full mb-5 border-4 border-[#ffffff] object-cover"
            alt="Alexandru Theodor Moise"
          ></img>
        </div>
        <div>
          <div className="p-3">
            <h1 className="text-4xl font-bold">Alexandru Theodor</h1>
            <h1 className="text-4xl font-bold text-[#ff7f00]">Moise</h1>
          </div>
        </div>
        <div>
          <p className="text-xl mt-2">
            React Developer • Data Analyst • Cloud Migration
          </p>
        </div>
        <div className="p-5">
          <p>
            Results-driven Junior Developer with demonstrated expertise in cloud
            technologies and data analytics.
          </p>
          <p>
            Self-taught proficiency in JavaScript, Node.js, and modern web
            development frameworks, combined with hands-on experience in
            enterprise-level projects.
          </p>
        </div>
        <div className="bg-[#1e1e1e] p-4 rounded-md border border-[#ff7f00]/30 font-mono mt-2 md:mt-0">
          <p className="text-[#fa8d21] text-sm mb-2">
            $ connection_protocols --active
          </p>
          <div className="text-sm space-y-1 flex flex-col items-center">
            <a href="mailto:alexandru.theodor.moise@gmail.com">
              <button>
                <p className="hover:scale-110 transition-transform hover:text-[#ff7f00]">
                  <span className="text-[#fa8d21]">{">"}</span> EMAIL
                </p>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/alex-moise-12322728b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <p className="hover:scale-110 transition-transform hover:text-[#ff7f00]">
                  <span className="text-[#fa8d21]">{">"}</span> LINKED-IN
                </p>
              </button>
            </a>
            <a
              href="https://github.com/CYPHRN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <p className="hover:scale-110 transition-transform hover:text-[#ff7f00]">
                  <span className="text-[#fa8d21]">{">"}</span> GITHUB
                </p>
              </button>
            </a>
            <button
              onClick={scrollToContact}
              className="text-left hover:scale-110 transition-transform hover:text-[#ff7f00] cursor-pointer"
            >
              <p className="hover:scale-110 transition-transform hover:text-[#ff7f00]">
                <span className="text-[#fa8d21]">{">"}</span> CONTACT INFO
              </p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Heading;
