"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, LogIn, Menu, Eye } from "lucide-react"
import { motion } from "framer-motion"

export default function CourseMaterialPage() {
   const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }
  return (
    <main className="min-h-screen bg-gray-50 space-y-8 text-left sm:text-justify">
 <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="w-full">
                <img
                  src="/Banner/ssceducation/online-course-material.jpg"
                  alt="Course Material"
                  className="w-full h-auto max-h-[350px] object-cover"
                />
              </div>
            </motion.div>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-gray-700" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ABVSU Course Materials</h1>
              <p className="text-gray-500 text-sm">Secondary and Senior Secondary Education</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Introduction Card */}
        <Card className="mb-8 bg-white border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Course Material Access
            </CardTitle>
            <CardDescription className="text-gray-600">
              Quality education resources for seamless learning
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ABVSU Secondary and Senior Secondary Education aims to impart top-notch education to its learners with
              optimum resources, so that they can continue their education seamlessly. ABVSU provides quality course
              materials online to its learners free of cost.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                Free Access
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                Quality Materials
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                Online Portal
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Instructions */}
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900">Step-By-Step Procedures to Access Online Study Materials</CardTitle>
            <CardDescription className="text-gray-600">
              Follow these simple steps to access your course materials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Step Block Template */}
              {[
                { num: "1", title: "Receive Login Credentials", icon: <LogIn className="h-4 w-4" />, desc: "All students will be provided a Student Login Link along with Login ID and Password after successful enrollment." },
                { num: "2", title: "Access Student Dashboard", desc: "After logging into the Student's portal, you will get access to your personalized dashboard." },
                { num: "3", title: "Navigate to Books Menu", icon: <Menu className="h-4 w-4" />, desc: "Click on the book menu to view your complete subject lists organized by course." },
                { num: "4", title: "View Subject Details", icon: <Eye className="h-4 w-4" />, desc: "Click on 'View Description' of subjects to see your subject books and available materials." },
                { num: "5", title: "Download Materials", icon: <Download className="h-4 w-4" />, desc: "Download your books and chapters directly to your device for offline access and study." },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-semibold">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      {step.icon}
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            For technical support or enrollment queries, please contact your institution administrator.
          </p>
        </div>
      </main>
    </div>
    </main>
  )
}
