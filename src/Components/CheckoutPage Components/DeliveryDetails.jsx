import React, { useState } from "react";

export default function DeliveryDetails() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <form className="p-4 border border-[#E8E6E6]">
      <h1 className="text-[24px] font-semibold">Delivery Details</h1>

      <div
        className={`flex items-center p-3 gap-3 my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "doorstep" ? "border-[#EF8742]" : "border-[#E8E6E6]"}`}
      >
        <input
          type="radio"
          name="delivery"
          value="doorstep"
          checked={selectedOption === "doorstep"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#EF8742]"
        />
        <label>Door step Delivery</label>
      </div>

      <div
        className={`flex items-center p-3 gap-3 my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "pickup" ? "border-[#EF8742]" : "border-[#E8E6E6]"}`}
      >
        <input
          type="radio"
          name="delivery"
          value="pickup"
          checked={selectedOption === "pickup"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#EF8742]"
        />
        <label>Pick up</label>
      </div>
    </form>
  );
}