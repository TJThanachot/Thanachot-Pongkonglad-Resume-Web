import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

function Body() {
  return (
    <div className="flex max-sm:flex-col">
      <BodyLeft />
      <BodyRight />
    </div>
  );
}
export default Body;
