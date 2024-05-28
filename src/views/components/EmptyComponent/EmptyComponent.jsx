import empty from "../../../assets/images/Logos/empty.png";
function EmptyComponent({ heading }) {
  return (
    <div className=" flex flex-col space-y-10 justify-center items-center font-monrope font-bold capitalize p-10 ">
      <div>
        <img src={empty} alt="" />
      </div>
      <div
        style={{ border: "2px solid #D9B658" }}
        className=" p-5 rounded-md text-primary"
      >
        No {heading} added.
      </div>
    </div>
  );
}

export default EmptyComponent;
