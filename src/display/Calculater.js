import React from "react";
import { useState } from "react";

const Calculater = () => {
  // const [SellingPrice, setSellingPrice] = useState();
  // const [ProductCost, setProductCost] = useState();
  // const [GST, setGST] = useState();
  // const [MPFees, setMPFees] = useState();
  const [Profit, setProfit] = useState();

  const [formData, setFormData] = useState({
    SellingPrice: "",
    ProductCost: "",
    MPFees: "",
    Taxes: "",
  });

  const { SellingPrice, ProductCost, MPFees, Taxes } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  //  Profit = (Selling Price + Shipping charges(50Rs)) - (ProductCost + GST%) - (MP Fees + Taxes) - Packging

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const sell = Number(SellingPrice) + 50;
    const Product = Number(ProductCost);
    const Tax = Number(MPFees) + Number(Taxes);
    const FinalDeducation = Tax + Product + 1;
    const Margin = sell - FinalDeducation;

    console.log("Selling price with Shipping price 50Rs :- ", sell);

    console.log("Product Cost ", Product);
    console.log("MPFEES + TAXES :- ", Tax);
    console.log("Tax + Product + 1(packging ke)", FinalDeducation);
    console.log("Margin", Margin);
    setProfit(Margin);

    // console.log(sell + cost);

    // console.log(sell);
    // setProfit(sell);
  };

  return (
    <div>
      <div className="flex  justify-center  items-center">
        <form onSubmit={handleOnSubmit}>
          <div className=" flex   mt-28">
            {/* SellingPrice */}
            <div className="mb-4  mr-20">
              <label
                htmlFor="SellingPrice"
                className="block text-[#3c3c3c] font-bold"
              >
                SellingPrice
              </label>
              <input
                required
                type="numbers"
                name="SellingPrice"
                value={SellingPrice}
                onChange={handleOnChange}
                placeholder="Enter SellingPrice"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                className="rounded-[0.5rem] bg-[#161D29] p-[12px] text-[#F1F2FF]"
              />
            </div>

            {/* ProductCost */}
            <div className="mb-4 mr-20">
              <label
                htmlFor="ProductCost"
                className="block font-bold text-[#3c3c3c]"
              >
                ProductCost
              </label>
              <input
                required
                type="number"
                name="ProductCost"
                value={ProductCost}
                onChange={handleOnChange}
                placeholder="Enter ProductCost"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                className=" rounded-[0.5rem] bg-[#161D29] p-[12px] text-[#F1F2FF]"
              />
            </div>
          </div>

          <div className="flex ">
            {/* MPFees */}
            <div className="mb-4 mr-20">
              <label
                htmlFor="MPFees"
                className="block font-bold text-[#3c3c3c]"
              >
                MPFees
              </label>
              <input
                required
                type="number"
                name="MPFees"
                value={MPFees}
                onChange={handleOnChange}
                placeholder="Enter MPFees"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                className=" rounded-[0.5rem] bg-[#161D29] p-[12px] text-[#F1F2FF]"
              />
            </div>

            {/* Taxes */}
            <div className="mb-4 mr-20">
              <label htmlFor="Taxes" className="block font-bold text-[#3c3c3c]">
                Taxes
              </label>
              <input
                required
                type="number"
                name="Taxes"
                value={Taxes}
                onChange={handleOnChange}
                placeholder="Enter Taxes"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                className=" rounded-[0.5rem] bg-[#161D29] p-[12px] text-[#F1F2FF]"
              />
            </div>
          </div>
          {/* GST
        <div className="mb-4">
          <label htmlFor="GST" className="block text-[#3c3c3c]">
            GST
          </label>
          <input
            required
            type="number"
            name="GST"
            value={GST}
            onChange={handleOnChange}
            placeholder="Enter GST"
            // style={{
            //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            // }}
            // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            className=" rounded-[0.5rem] bg-[#161D29] p-[12px] text-[#F1F2FF]"
          />
        </div> */}

          <button
            type="submit"
            className="mt-12 ml-48 rounded-[8px] bg-[#FFF970]  underline py-[12px] px-[15px] font-medium text-[#000814] select-none"
          >
            Calculate
          </button>
        </form>
      </div>

      <div className="ml-[450px] -mt-[50px]  w-44 rounded-[8px] bg-[#ffe1d5] border-2 border-black   hover:bg-[#3c3c3c] transition-all duration-200 py-[12px] px-[15px] font-medium text-[#000814] select-none">
        <h2 className=" text-4xl px-7">{Profit}</h2>
      </div>

      <div className="w-[450px] h-[75px] border-2 border-black mt-[75px] ml-[500px] rounded-lg  hover:bg-[#ffff] transition-all duration-200 ">
        <p className="px-5 py-3 select-none font-extrabold">
          Margin = (SellingPrice + ShippingPrice ) - ProductCost - (MPFEES +
          Taxes) - Packging
        </p>
      </div>
    </div>
  );
};

export default Calculater;
