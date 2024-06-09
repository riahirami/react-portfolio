import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { HARD_SKILLS_ICONS } from "../../utils/constants";
import { AnimationType } from "../../utils/enum";

const HardSkills = () => {
  return (
    <div className="hard-skills">
      {HARD_SKILLS_ICONS.map((item, index) => (
        <div className="hability">
          <ScrollAnimation
            animateIn={AnimationType.FadeInUp}
            delay={(0.5 / index) * 2000}
          >
            <img src={item.icon} alt={item.name} />
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};

export default HardSkills;
