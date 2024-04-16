import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-5  bg-[#ffe1d5]  select-none text-[#ff6347] ">
        <div className="flex  max-w-maxContent items-center  justify-between ">
          <Link to="/Flipkart_Calculater">
            <button className=" px-[30px]  m-4 text-[25px] font-bold hover:bg-[#3c3c3c] transition-all duration-200 border-2 border-black rounded-lg">
              Flipkart
            </button>
          </Link>
          <Link to="/Amazon_Calculater">
            <button className=" px-[30px] m-4 text-[25px] font-bold hover:bg-[#3c3c3c] transition-all duration-200  border-2 border-black rounded-lg">
              Amazon
            </button>
          </Link>
          <Link to="/Meesho_Calculater">
            <button className=" px-[30px] m-4 text-[25px] font-bold hover:bg-[#3c3c3c] transition-all duration-200   border-2 border-black rounded-lg">
              Meesho
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
