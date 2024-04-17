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
    GST: "",
    MPFees: "",
    Taxes: "",
  });

  const { SellingPrice, ProductCost, GST, MPFees, Taxes } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  //  Profit = (Selling Price + Shipping charges(50Rs)) - (ProductCost + GST%) - (MP Fees + Taxes) - Packging

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log(typeof SellingPrice);
    const sell = Number(SellingPrice);
    console.log(typeof sell);
    console.log("sell");
    console.log(typeof Number(SellingPrice));

    // console.log(sell);
    // setProfit(sell);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        {/* SellingPrice */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-[#3c3c3c]">
            SellingPrice
          </label>
          <input
            required
            type="numbers"
            name="SellingPrice"
            value={SellingPrice}
            onChange={handleOnChange}
            placeholder="Enter SellingPrice"
            // style={{
            //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            // }}
            // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            className="rounded-[0.5rem] bg-[#161D29] p-[12px] text-[#F1F2FF]"
          />
        </div>

        {/* ProductCost */}
        <div className="mb-4">
          <label htmlFor="ProductCost" className="block text-[#3c3c3c]">
            ProductCost
          </label>
          <input
            required
            type="number"
            name="ProductCost"
            value={ProductCost}
            onChange={handleOnChange}
            placeholder="Enter ProductCost"
            // style={{
            //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            // }}
            // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            className=" rounded-[0.5rem] bg-[#161D29] p-[12px] text-[#F1F2FF]"
          />
        </div>

        {/* GST */}
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
        </div>

        {/* MPFees */}
        <div className="mb-4">
          <label htmlFor="MPFees" className="block text-[#3c3c3c]">
            MPFees
          </label>
          <input
            required
            type="number"
            name="MPFees"
            value={MPFees}
            onChange={handleOnChange}
            placeholder="Enter MPFees"
            // style={{
            //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            // }}
            // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            className=" rounded-[0.5rem] bg-[#161D29] p-[12px] text-[#F1F2FF]"
          />
        </div>

        {/* Taxes */}
        <div className="mb-4">
          <label htmlFor="Taxes" className="block text-[#3c3c3c]">
            Taxes
          </label>
          <input
            required
            type="number"
            name="Taxes"
            value={Taxes}
            onChange={handleOnChange}
            placeholder="Enter Taxes"
            // style={{
            //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            // }}
            // className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            className=" rounded-[0.5rem] bg-[#161D29] p-[12px] text-[#F1F2FF]"
          />
        </div>

        <button
          type="submit"
          className="mt-6  rounded-[8px] bg-[#FFF970] py-[8px] px-[12px] font-medium text-[#000814]"
        >
          Login
        </button>
      </form>

      <p>{Profit}</p>
    </div>
  );
};

export default Calculater;
