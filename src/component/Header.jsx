import { useContext } from "react";
import { thanachotDataContext } from "../App";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Header() {
  const context = useContext(thanachotDataContext);
  //   console.log(context.name);

  return (
    <div className=" bg-gradient-to-r from-gray-700 to-gray-500 min-h-[9rem] max-sm:flex-col  flex items-center justify-around">
      {/* icons */}

      <div className="flex items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* name */}

      <div className="w-[55%] text-yellow-400 text-[2.5rem] flex justify-center gap-[5%] items-center max-sm:flex-col">
        {context.name}
        <div className="text-[#0ae0ff] text-[4rem]">{context.nickName}</div>
        {context.lastName}
      </div>

      {/* button */}

      <button className="bg-gray-200 rounded-3xl w-[10%] max-sm:w-[50%] max-sm:my-6 h-[4rem] flex items-center justify-center">
        <a href="https://www.techupth.com/">
          <img
            className="h-[3rem]"
            src="https://www.techupth.com/_next/static/media/light-bg-logo.7c65f1f3.svg"
            alt="website-techup"
          />
        </a>
      </button>
    </div>
  );
}
export default Header;
