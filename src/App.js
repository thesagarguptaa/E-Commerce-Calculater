import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calculater from "./display/Calculater";
import Meesho from "./display/Meesho";
import Amazon from "./display/Amazon";
import Home from "./display/Home";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen  bg-[#ffe1d5] flex flex-col font-mono">
      <h1 className="text-[50px] underline flex justify-center items-center  mb-4  text-[#000032]  select-none font-extrabold">
        E- Commerce Calculater
      </h1>
      <div className="flex -mt-16 justify-between">
        <Link to="/Calculater">
          <button className=" px-[50px]  ml-24 text-[25px] font-bold hover:bg-[#3c3c3c] transition-all duration-200 select-none border-2 border-black rounded-lg">
            Calculater
          </button>
        </Link>
        <Link to="/">
          <button className=" px-[50px] mr-28 text-[25px] font-bold hover:bg-[#3c3c3c] transition-all duration-200 border-2 border-black select-none rounded-lg">
            Home
          </button>
        </Link>
      </div>

      <Routes>
        <Route path="/Flipkart_Calculater" element={<Calculater />} />
        <Route path="/Amazon_Calculater" element={<Amazon />} />
        <Route path="/Meesho_Calculater" element={<Meesho />} />
        <Route path="/Calculater" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
