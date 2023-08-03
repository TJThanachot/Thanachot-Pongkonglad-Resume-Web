function Footer() {
  return (
    <div
      className=" bg-gradient-to-r from-gray-500 to-gray-700 min-h-[9rem] 
     flex items-center justify-around max-sm:flex-col"
    >
      <div className="flex flex-wrap ">
        <img
          className="logo react"
          src="https://www.techupth.com/images/pages/full-time-part-time/icon/nodejs-icon.svg"
          alt="node.js"
        />
        <img
          className="logo react"
          src="https://www.techupth.com/images/pages/full-time-part-time/icon/github-icon.svg"
          alt="git"
        />
        <img
          className="logo react"
          src="https://www.techupth.com/images/pages/full-time-part-time/icon/click-icon.svg"
          alt="cli"
        />
        <img
          className="logo react"
          src="https://www.techupth.com/images/pages/full-time-part-time/icon/internet-icon.svg"
          alt="internet"
        />
      </div>
      <div className="flex flex-col items-center max-sm:order-first max-sm:m-4 ">
        <span className="text-[#0ae0ff] text-3xl">
          © Copyright 2023 | TJThanachot
        </span>
        <br />
        <span className=" text-yellow-400">https://github.com/TJThanachot</span>
      </div>
      <div className="flex flex-wrap">
        <img
          className="logo react"
          src="https://www.techupth.com/images/pages/full-time-part-time/icon/html-icon.svg"
          alt="html"
        />
        <img
          className="logo react"
          src="https://www.techupth.com/images/pages/full-time-part-time/icon/css-icon.svg"
          alt="css"
        />
        <img
          className="logo react"
          src="https://www.techupth.com/images/pages/full-time-part-time/icon/js-icon.svg"
          alt="javascript"
        />
        <img
          className="logo react"
          src="https://www.techupth.com/images/pages/full-time-part-time/icon/react-icon.svg"
          alt="react"
        />
      </div>
    </div>
  );
}
export default Footer;
