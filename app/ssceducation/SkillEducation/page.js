"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BadgeCheck, Briefcase, Building, Users, Shield, Brain, Globe, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function VocationalEducationPage() {
  const benefits = [
      {
        title: "Bridging the Education-Employment Gap",
        icon: <Briefcase className="h-6 w-6 text-blue-700" />,
        description:
          "Traditional academic curricula often focus on theoretical knowledge, leaving students underprepared for the job market. Skill-based subjects equip students with practical abilities, enhancing their employability and making them job-ready right after school.",
      },
      {
        title: "Catering to Diverse Learning Needs",
        icon: <Users className="h-6 w-6 text-green-700" />,
        description:
          "Not all students excel in conventional academic disciplines. Vocational education provides an alternative pathway, allowing students to discover their interests and talents in hands-on domains like healthcare, IT, agriculture, retail, construction, hospitality, and more.",
      },
      {
        title: "Early Career Orientation",
        icon: <Brain className="h-6 w-6 text-purple-700" />,
        description:
          "Introducing vocational education at school level exposes students early to various career options. It helps them make informed decisions about higher education and professional aspirations based on their aptitudes and interests.",
      },
      {
        title: "Promoting Entrepreneurship",
        icon: <BadgeCheck className="h-6 w-6 text-yellow-700" />,
        description:
          "Skill-based learning fosters innovation, problem-solving, and self-reliance. Students trained in vocational subjects often acquire the confidence and competence to pursue entrepreneurial ventures, contributing to economic growth.",
      },
      {
        title: "Reducing Drop-out Rates",
        icon: <Shield className="h-6 w-6 text-red-700" />,
        description:
          "Vocational subjects enhance student engagement and motivation by linking learning to real-life applications. This relevance often reduces school drop-out rates, especially in rural or economically disadvantaged areas.",
      },
      {
        title: "Supporting National Skill Development Goals",
        icon: <Building className="h-6 w-6 text-blue-500" />,
        description:
          "In India, initiatives like the National Education Policy (NEP) 2020, Skill India Mission, and Samagra Shiksha Abhiyan emphasize the inclusion of vocational education to build a skilled workforce capable of driving the country's growth in various sectors.",
      },
      {
        title: "Global Relevance and Mobility",
        icon: <Globe className="h-6 w-6 text-indigo-700" />,
        description:
          "With globalization, skills like digital literacy, financial literacy, and communication are vital for global competitiveness. Students with vocational training gain an edge in domestic and international job markets.",
      },
      {
        title: "Fostering Innovation and Creativity",
        icon: <Sparkles className="h-6 w-6 text-teal-700" />,
        description:
          "Vocational training encourages creative problem-solving and innovation, equipping students with skills to adapt and thrive in dynamic, technology-driven industries worldwide.",
      },
    ];
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }
  return (
    
<main className="min-h-screen bg-gray-50 space-y-8">
 <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="w-full">
                <img
                  src="/Banner/ssceducation/skill-education.jpg"
                  alt="Skill Education"
                  className="w-full h-auto max-h-[350px] object-cover"
                />
              </div>
            </motion.div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Card className="bg-white shadow-lg border-0">
         {/*  <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold text-blue-900 tracking-tight">
              Skill / Vocational Education
            </CardTitle>
          </CardHeader> */}
          <CardContent className="text-blue-800 space-y-6 text-left sm:text-justify">
            <p className="text-lg leading-relaxed">
              Embedding skill and vocational subjects at the secondary and senior secondary levels is crucial for
              building a future-ready generation. It ensures holistic development, balances academic and practical
              learning, and equips students to contribute meaningfully to the economy and society.
            </p>
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-3 text-lg">
                Combination of Vocational Subjects with Academic Subjects
              </h3>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li className="leading-relaxed">
                  Students can choose Skill / Vocational subjects at Secondary and Senior Secondary Level.
                </li>
                <li className="leading-relaxed">
                  Students can make a combination from:
                  <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
                    <li>Language Subjects (Minimum one)</li>
                    <li>Academic Subjects</li>
                    <li>Skill / Vocational Subjects</li>
                  </ol>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Card className="bg-white shadow-lg border-0 text-left sm:text-justify">
          <CardHeader className="pb-4">
            {/* <CardTitle className="text-2xl font-bold text-blue-800">Why is Vocational Education Essential?</CardTitle> */}
            <p className="text-blue-800 text-lg leading-relaxed">
              The integration of skill and vocational subjects at the secondary and senior secondary level is a transformative step in aligning education with real-world requirements and future employment opportunities. Here's why it is essential:
            </p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 text-blue-900 text-left sm:text-justify">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="mt-1 p-2 bg-white rounded-lg shadow-sm">{item.icon}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2 text-blue-900">{item.title}</h4>
                  <p className="text-blue-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
      </div>
    </main>
  )
}
