import { useContext } from "react";
import { thanachotDataContext } from "../App";
import Box from "./Box";
import { useSpread } from "../assets/useSpread";

function BodyLeft() {
  const context = useContext(thanachotDataContext);
  return (
    <section className="w-[65%] max-sm:w-[100%] h-auto flex flex-col p-[5%] bg-gray-300  ">
      <Box content="Career Objective">{context.carreerObjective}</Box>
      <Box content="Skill">
        <div className="flex flex-wrap gap-5 font-bold items-center">
          {context.skill.map(useSpread)}( etc. can learn )
        </div>
      </Box>
      <Box content="Soft Skill">
        <div className="flex flex-wrap gap-5 font-bold">
          {context.softSkill.map(useSpread)}
        </div>
      </Box>
      <Box content="Experience">
        <img
          className="w-[40%] max-sm:hidden absolute right-0 bottom-0 opacity-70 "
          src="https://www.techupth.com/images/pages/full-time-part-time/illustration/laptop-logos.svg"
          alt=""
        />
        {context.experience.map((item, index) => {
          return (
            <div key={index} className="flex flex-col mb-5 gap-3">
              <div className="font-bold">
                {item.position}
                <br />
                {item.office}
              </div>
              {item.duty.map(useSpread)}
            </div>
          );
        })}
      </Box>
      <Box content="Training Courses">
        {context.trainingCourses.map(useSpread)}
      </Box>
    </section>
  );
}
export default BodyLeft;
