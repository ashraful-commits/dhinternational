import { useState } from "react";
import Model from "./Model";

const SearchBar = () => {
  const [model, setModel] = useState(false);
  return (
    <div className="bg-blue-300 py-3 flex justify-between px-4">
      {model && <Model setModel={setModel} />}
      <input
        className=" px-2 focus:outline-none h-[35px] rounded-md"
        type="Search"
        placeholder="Search number"
      />
      <button
        onClick={() => setModel(!model)}
        className="flex  justify-center uppercase font-bold text-[14px] bg-blue-500 rounded-md px-3 py-1 text-white hover:bg-blue-600 transition-all duration-500 ease-in-out gap-1 items-center"
      >
        <svg
          fill="#000000"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          id="plus"
          data-name="Line Color"
          xmlns="http://www.w3.org/2000/svg"
          className="icon line-color"
        >
          <path
            id="primary"
            d="M5,12H19M12,5V19"
            style={{
              fill: "none",
              stroke: "rgb(255, 255, 255)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          ></path>
        </svg>{" "}
        Add New
      </button>
    </div>
  );
};

export default SearchBar;
