import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap items-center justify-center bottom-10 inset-x-0 px-2 ">
        <div className=" bg-white rounded-3xl w-[33.33vw] p-2 flex justify-around">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 text-black shadow-lg rounded-full bg-red-500"
          >
            test
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 text-black shadow-lg rounded-full bg-green-500"
          >
            test
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 text-black shadow-lg rounded-full bg-blue-500"
          >
            test
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
