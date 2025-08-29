"use client"
import { useState } from "react"
import { motion } from "framer-motion"

export default function VerifyPage() {
  const [rollNo, setRollNo] = useState("")

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const handleSearch = () => {
    if (rollNo.trim() === "") {
      alert("Please enter your Roll No")
    } else {
      alert("Please enter a valid Roll No.")
      // here you can call API to verify rollNo
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-left sm:text-justify">
      {/* Banner */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <div className="w-full">
          <img
            src="/Banner/ssceducation/results.jpg"
            alt="Results"
            className="w-full h-auto max-h-[350px] object-cover"
          />
        </div>
      </motion.div>

      {/* Search Form Section */}
      <div className="flex items-center justify-center bg-gray-100 py-12 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center space-y-4">
          <h2 className="text-xl font-bold">Enter Your Roll No</h2>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="border w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Roll No"
          />
          <button
            onClick={handleSearch}
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-950"
          >
            Search Result
          </button>
        </div>
      </div>
    </main>
  )
}
