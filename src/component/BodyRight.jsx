import { useContext } from "react";
import { thanachotDataContext } from "../App";
import Box from "./Box";
import { useSpread } from "../assets/useSpread";
import ono from "../assets/photo/ono.png";

function BodyRight() {
  const context = useContext(thanachotDataContext);
  return (
    <section className="w-[35%] max-sm:w-[100%] max-sm:order-first bg-gray-400 flex flex-col gap-5 p-5">
      <img className="w-[80%] ml-[10%]" src={ono} alt="" />
      <Box content="Education">{context.education.map(useSpread)}</Box>
      <Box content="Date of birth">{context.dateOfbirth}</Box>
      <Box content="Contact">
        <li>
          <span>Tel:</span> {context.contact.tel}
        </li>
        <li>
          <span>Email:</span> {context.contact.email}
        </li>
        <li>
          <span>Line ID:</span> {context.contact.line}
        </li>
        <li>
          <span>What App:</span> {context.contact.whatApp}
        </li>
      </Box>
      <Box content="Address">{context.address}</Box>
      <Box content="Personal">
        {context.personal.map((item, index) => {
          return (
            <div key={index}>
              <span>Qualification: </span>
              {item.qualifications}
              <br />
              <span>Hobbies: </span>
              {item.hobbies}
            </div>
          );
        })}
      </Box>
    </section>
  );
}
export default BodyRight;
