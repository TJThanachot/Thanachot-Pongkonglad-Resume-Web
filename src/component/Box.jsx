function Box(props) {
  return (
    <div>
      <div className="text-3xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-[#0ae0ff]">
        {props.content}
      </div>
      <hr className="border-2 border-[#015714] w-[100%] rounded-full" />
      <div className="py-5 font-normal relative">{props.children}</div>
    </div>
  );
}

export default Box;
