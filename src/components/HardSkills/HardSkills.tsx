import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { HARD_SKILLS_ICONS } from "../../utils/constants";
import { AnimationType } from "../../utils/enum";
import { generateDelayedAnimations } from "utils/helpers";

const HardSkills = () => {
  return (
    <div className="hard-skills">
      {HARD_SKILLS_ICONS.map((item, index) => (
        <div className="hability" key={index}>
          <ScrollAnimation
            animateIn={AnimationType.FadeInUp}
            delay={generateDelayedAnimations(1)}
            animateOnce
          >
            <img src={item.icon} alt={item.name} />
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};

export default HardSkills;
