import React from 'react'
import Button from "../Components/Button"
import { PiSignOut } from "react-icons/pi";

export default function LogoutModal({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md p-6 text-center flex flex-col items-center gap-3">
        <span className="bg-[#FFF1F1] text-[#EE2020] rounded-full h-[99px] w-[99px] flex items-center justify-center">
          <PiSignOut size={30} />
        </span>

        <p className="text-[28px] font-semibold">Confirm Sign Out</p>
        <p className="text-[20px] text-[#686565]">
          Are you sure you want to sign out of your account?
        </p>

        <div className="flex gap-4">
          <Button
            onClick={onConfirm}
            className="w-[156px] h-10 text-white bg-[#EE2020] hover:bg-[#b21a1a]"
            content="Sign Out"
          />
          <button
            onClick={onClose}
            className="w-[109px] h-10 text-[#A3A2A2] border border-[#A3A2A2] rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

