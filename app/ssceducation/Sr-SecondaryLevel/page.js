"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }
export default function SeniorSecondaryPage() {
  return (
    <main className="min-h-screen bg-gray-50 space-y-8  text-left ">
         <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                 <div className="w-full">
                   <img
                     src="/Banner/ssceducation/sr-secondary.jpg"
                     alt="Secondary Level (10th)"
                     className="w-full h-auto max-h-[350px] object-cover"
                   />
                 </div>
               </motion.div>
         <div className="p-4 space-y-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Card className="bg-white/90">
          <CardHeader></CardHeader>
          <CardContent className="space-y-4 text-blue-900">
            <p>
              <strong>ELIGIBILITY:</strong>
              <br />
              <span className="pl-20 block">• Students must have successfully passed in 10th / Secondary.</span>
            </p>

            <p>
              <strong>CHOICE OF SUBJECTS:</strong>
              <br />
              <span className="pl-20 block">
                • Students have to choose minimum 1 Language from <strong>Group A</strong>.
              </span>
              <span className="pl-20 block">
                •	There is no restriction on the choice of subjects and can make any combination.
              </span>
               <span className="pl-20 block">
                •	Choice of subjects can be done from the following list.
              </span>
            </p>
          </CardContent>
        </Card>
      </motion.div>

 <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
      >
        <Separator className="my-4" />
      </motion.div>
      
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Card className="bg-white/90">
          <CardContent className="space-y-4 text-blue-900">
           
            <p>
              <strong>Table 1 : List of Subjects for Senior Secondary Certificate</strong>
             
            </p>
          </CardContent>
        </Card>
      </motion.div>


      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-center font-semibold text-blue-800">
              Group A: Language Subjects
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-900">
            <table className="table-auto border-collapse border border-blue-300 w-full">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-blue-300 px-2 py-1 text-left">Code</th>
                  <th className="border border-blue-300 px-2 py-1 text-left">Subject</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SSLC-101", "Hindi"],
                  ["SSLC-102", "English"],
                  ["SSLC-103", "Sanskrit"],
                  ["SSLC-104", "Urdu"],
                  ["SSLC-105", "Punjabi"],
                  ["SSLC-106", "Bengali"],
                  ["SSLC-107", "Sikkimese"],
                  ["SSLC-108", "Assamese"],
                  ["SSLC-109", "Nepali"],
                  ["SSLC-110", "Odia"],
                  ["SSLC-111", "Kannada"],
                  ["SSLC-112", "Malayalam"],
                  ["SSLC-113", "Tamil"],
                  ["SSLC-114", "Telugu"],
                  ["SSLC-115", "Gujarati"],
                  ["SSLC-116", "Marathi"],
                ].map(([code, subject]) => (
                  <tr key={code}>
                    <td className="border border-blue-300 px-2 py-1 font-semibold">{code}</td>
                    <td className="border border-blue-300 px-2 py-1">{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-800">Group B: Non-Language Subjects</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-900">
            <table className="w-full border border-blue-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-blue-300 px-2 py-1 text-left">Code</th>
                  <th className="border border-blue-300 px-2 py-1 text-left">Subject</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["SSSC-101", "Mathematics"],
                  ["SSSC-102", "Chemistry"],
                  ["SSSC-103", "Biology"],
                  ["SSSC-104", "Economics"],
                  ["SSSC-105", "Business Studies"],
                  ["SSSC-106", "History"],
                  ["SSSC-107", "Psychology*"],
                  ["SSSC-108", "Computer Science"],
                  ["SSSC-109", "Accountancy"],
                  ["SSSC-110", "Political Science"],
                  ["SSSC-111", "Geography*"],
                  ["SSSC-112", "Law, Justice & Governance"],
                  ["SSSC-113", "Tourism"],
                  ["SSSC-114", "Physical Education & Yoga"],
                  ["SSSC-115", "Family & Community Studies*"],
                  ["SSSC-116", "Environmental Science & Sustainable Development"],
                ].map(([code, subject]) => (
                  <tr key={code}>
                    <td className="border border-blue-300 px-2 py-1 font-semibold md:whitespace-nowrap">{code}</td>
                    <td className="border border-blue-300 px-2 py-1">{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-800">Group C: Skill / Vocational Subjects</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-blue-900">
            <table className="w-full border border-blue-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-blue-300 px-2 py-1 text-left">Code</th>
                  <th className="border border-blue-300 px-2 py-1 text-left">Subject</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["VSSC-101", "Secretarial Practice"],
                  ["VSSC-102", "Plant Protection"],
                  ["VSSC-103", "Food Processing"],
                  ["VSSC-104", "Hotel Front Office Operation"],
                  ["VSSC-105", "Library and Information Science"],
                  ["VSSC-106", "Media & Communication Studies"],
                  ["VSSC-107", "Entrepreneurship"],
                  ["VSSC-108", "Early Childhood Care & Education"],
                  ["VSSC-109", "Painting & Drawing"],
                  ["VSSC-110", "Warehouse Principles & Inventory Management"],
                  ["VSSC-111", "Preservation of Fruits and Vegetables"],
                  ["VSSC-112", "Logistics & Supply Chain Management"],
                  ["VSSC-113", "Soil and Fertilizer Management"],
                ].map(([code, subject]) => (
                  <tr key={code}>
                    <td className="border w-1/3 border-blue-300 px-1 py-1 font-semibold">{code}</td>
                    <td className="border w-2/3 border-blue-300 px-2 py-1">{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
      >
        <Card className="bg-blue-50 border-l-4 border-blue-400">
          <CardContent className="text-blue-800 text-sm italic p-4">
            * Subjects marked with an asterisk (*) include both Theory and Practical components.
          </CardContent>
        </Card>
      </motion.div>
      </div>
    </main>
  )
}
