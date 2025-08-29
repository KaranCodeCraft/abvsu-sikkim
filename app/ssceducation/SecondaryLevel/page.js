"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }
export default function SecondarySubjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="w-full">
                <img
                  src="/Banner/ssceducation/secondary-level.jpg"
                  alt="Secondary Level (10th)"
                  className="w-full h-auto max-h-[350px] object-cover"
                />
              </div>
            </motion.div>
      <div className="p-4 space-y-6 max-w-6xl mx-auto">

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <Card className="bg-white/90">
          <CardHeader></CardHeader>
          <CardContent className="space-y-4 text-blue-900">
            <p>
              <strong>ELIGIBILITY:</strong>
              <br />
              <span className="pl-20 block">• Minimum 15 years of age (Before Exam Date).</span>
            </p>

            <p>
              <strong>CHOICE OF SUBJECTS:</strong>
              <br />
              <span className="pl-20 block">
                • Students have to choose five subjects with minimum 1 and maximum 2 Language Subjects from{" "}
                <strong>Group A</strong> and the <br />
                &nbsp; remaining subjects from <strong>Group B</strong> and <strong>Group C</strong>.
              </span>
              <span className="pl-20 block">
                • 3 (Three) Additional subjects can be taken from the groups with additional fees.
              </span>
              <span className="pl-20 block">• Choice of subjects can be done from the following list.</span>
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <Separator className="my-4" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
                  ["SLC-101", "Hindi"],
                  ["SLC-102", "English"],
                  ["SLC-103", "Sanskrit"],
                  ["SLC-104", "Urdu"],
                  ["SLC-105", "Punjabi"],
                  ["SLC-106", "Bengali"],
                  ["SLC-107", "Sikkimese"],
                  ["SLC-108", "Assamese"],
                  ["SLC-109", "Nepali"],
                  ["SLC-110", "Odia"],
                  ["SLC-111", "Kannada"],
                  ["SLC-112", "Malayalam"],
                  ["SLC-113", "Tamil"],
                  ["SLC-114", "Telugu"],
                  ["SLC-115", "Gujarati"],
                  ["SLC-116", "Marathi"],
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
                  ["SSC-101", "Mathematics"],
                  ["SSC-102", "Science and Technology*"],
                  ["SSC-103", "Social Science"],
                  ["SSC-104", "Economics"],
                  ["SSC-105", "Business Studies"],
                  ["SSC-106", "Home Science*"],
                  ["SSC-107", "Psychology*"],
                  ["SSC-108", "Indian Culture & Heritage"],
                  ["SSC-109", "Accountancy"],
                  ["SSC-110", "Indian Music*"],
                  ["SSC-111", "Natyakala*"],
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
                  ["VSC-101", "Carpentry"],
                  ["VSC-102", "Solar Energy Technician"],
                  ["VSC-103", "Bio Gas Technician"],
                  ["VSC-104", "Laundry services"],
                  ["VSC-105", "Bakery & Confectionery"],
                  ["VSC-106", "Welding Technology"],
                  ["VSC-107", "Data Entry Operations"],
                  ["VSC-108", "Painting & Drawing"],
                  ["VSC-109", "Entrepreneurship"],
                  ["VSC-110", "Warehouse Principals & Inventory Management"],
                  ["VSC-111", "Data Entry Operations"],
                  ["VSC-112", "Logistics & Supply Chain Management"],
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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
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
