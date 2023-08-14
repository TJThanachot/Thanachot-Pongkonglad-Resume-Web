import { useContext } from "react";
import { thanachotDataContext } from "../App";
import Box from "./Box";
import { useSpread } from "../assets/useSpread";
import { FiLink } from "react-icons/fi";

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

      <Box content="Project on Github">
        {context.project.map((item, index) => {
          return (
            <div className="py-2 flex-col items-center " key={index}>
              <a
                href={item.link}
                target="_blank"
                className="flex items-center gap-3"
              >
                <FiLink />
                {item.projectName}
              </a>
            </div>
          );
        })}
      </Box>

      <Box content="Soft Skill">
        <div className="flex flex-wrap gap-5 font-bold">
          {context.softSkill.map(useSpread)}
        </div>
      </Box>

      <Box content="Education">{context.education.map(useSpread)}</Box>
    </section>
  );
}
export default BodyLeft;
