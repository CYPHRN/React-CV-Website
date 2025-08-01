import React from "react";
import Badge from "./Badge";

import githubSVG from "../../assets/svgs/github.svg";

function Card({ title, techBadges, description1, description2, link }) {
  return (
    <div className="w-full lg:w-1/3 text-white p-4 md:p-8 lg:p-12 font-mono flex flex-col items-center gap-2 m-2 lg:m-4">
      <h3 className="mb-2 font-bold text-xl">{title}</h3>
      <div className="flex flex-wrap justify-center gap-1">
        {techBadges.map((badge, index) => (
          <Badge
            key={index}
            color={badge.color}
            border={badge.color}
            image={badge.svg}
            altname={badge.name}
            invert="invert"
            context="tech"
            bold="bold"
          />
        ))}
      </div>
      <p className="mt-4 mb-2">{description1}</p>
      <p className="mb-6">{description2}</p>
      <Badge
        color="#ff7f00"
        border="#ff7f00"
        image={githubSVG}
        altname="Source Code"
        invert="invert"
        link={link}
        context="github"
        bold="bold"
      />
    </div>
  );
}

export default Card;
