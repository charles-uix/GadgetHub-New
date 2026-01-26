import React from 'react'
import { Link } from "react-router"
import Logo from "../assets/GadgetHub Logo.png"
import paymentVector from "../assets/onlinePaymentVector.png"
import { FaGreaterThan } from "react-icons/fa";
import CustomerDetailsForm from "../Components/CheckoutPage Components/CustomerDetailsForm"
import DeliveryDetails from "../Components/CheckoutPage Components/DeliveryDetails"
import PaymentMethod from "../Components/CheckoutPage Components/PaymentMethod"

export default function CheckoutPage() {
  return (
    <div className="flex flex-col w-full">
         <div className="hidden lg:flex bg-[#191C1F] text-white">
           <div className="flex container mx-auto items-center justify-between w-full h-[7vh] px-5">
             <h1><span className="text-[#ACACAC]">Mon-Sat:</span> 9:00 AM - 5:30 PM</h1>
            <h1 className="text-[#ACACAC]">Visit our showroom in 12 Street Address City, Lagos</h1>
            <h1>Call Us: (+234) 01234 5678</h1>
           </div>
        </div>

        <div className="container mx-auto flex items-center justify-between gap-0 lg:gap-25 h-[14vh] py-10 lg:py-2 px-5">
            <Link to="/"><img src={Logo} alt="" /></Link>

            <div className="flex items-center gap-2">
                <img className="w-6 h-6" src={paymentVector} alt="" />
                <p>secure & safe payment</p>
            </div>
            
        </div>

        <div className="py-2 px-5 container mx-auto">
        <h1 className="flex items-center gap-1 text-[16px] text-[#5F6C72]">
                  <Link to="/">Home</Link>
                    <span className="text-[12px] text-[#434545]"><FaGreaterThan /></span>
                    <Link to="/cartpage"><span className="text-[#5F6C72]">Cart</span></Link>
                    <span className="text-[12px] text-[#434545]"><FaGreaterThan /></span>
                    <span className="text-[#191C1F]">Checkout</span>
                 </h1>
        </div>

        <div>
          <CustomerDetailsForm />
          <DeliveryDetails />
          <PaymentMethod />
        </div>

        
    </div>
  )
}
