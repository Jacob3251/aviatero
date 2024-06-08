import { GridLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex flex-col space-y-3 justify-center items-center ">
      {" "}
      <div className="sweet-loading">
        <GridLoader
          color={"#D9B658"}
          size={15}
          speedMultiplier={0.5}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <span className="text-primary font-monrope font-bold">Loading</span>
    </div>
  );
}

export default Loader;
