import { useContext } from "react";
import { thanachotDataContext } from "../App";
import Box from "./Box";
import { useSpread } from "../assets/useSpread";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiClipboard } from "react-icons/fi";

function BodyRight() {
  const context = useContext(thanachotDataContext);
  return (
    <section className="py-[5%] px-8 w-[35%] max-sm:w-[100%] max-sm:order-first bg-gray-400 flex flex-col gap-5 ">
      <Box content="Experience">
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

      <Box content="Date of birth">{context.dateOfbirth}</Box>

      <Box content="Contact">
        <CopyToClipboard
          text={`
          ${context.contact.tel}
          ${context.contact.email}
          ${context.contact.line}
          ${context.contact.whatApp}`}
        >
          <FiClipboard className="absolute top-[-2.8rem] right-5 text-3xl cursor-pointer" />
        </CopyToClipboard>
        <li>
          <span>Tel: {context.contact.tel}</span>
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
