import React, { useState } from 'react'

export default function PaymentMethod() {
    const [selectedOption, setSelectedOption] = useState("");
  return (
    <form className="p-4 border border-[#E8E6E6]">
        <h1>Select Payment Method</h1>

        <div
        className={`flex items-center p-3 justify-between my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "delivery" ? "border-[#EF8742]" : "border-[#E8E6E6]"}`}
      >
        <div className="flex gap-3">
            <input
          type="radio"
          name="payment"
          value="delivery"
          checked={selectedOption === "delivery"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#EF8742]"
        />
        <label>Pay On Delivery</label>
        </div>
        <img src="" alt="" />
      </div>

      <div
        className={`flex items-center p-3 justify-between my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "crediCard" ? "border-[#EF8742]" : "border-[#E8E6E6]"}`}
      >
        <div className="flex gap-3">
            <input
          type="radio"
          name="payment"
          value="creditCard"
          checked={selectedOption === "creditCard"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#EF8742]"
        />
        <label>Pay With Credit Card</label>
        </div>
        <img src="" alt="" />
      </div>

       <div
        className={`flex items-center p-3 justify-between my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "payPal" ? "border-[#EF8742]" : "border-[#E8E6E6]"}`}
      >
        <div className="flex gap-3">
            <input
          type="radio"
          name="payment"
          value="payPal"
          checked={selectedOption === "payPal"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#EF8742]"
        />
        <label>Pay With Pay Pal</label>
        </div>
        <img src="" alt="" />
      </div>
    </form>
  )
}
