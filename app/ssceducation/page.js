"use client"

import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Welcome from "@/app/ssceducation/welcome/page";
import Counter from "@/app/ssceducation/counter/page"
import { useEffect } from "react"
import {useRef} from "react";

import { useState } from 'react';
import EnquiryFormDialog from "@/ui/form/enquiry";

import {
  BookOpen,
  UserPlus,
  FileCheck,
  ClipboardList,
  ArrowLeftRight,
  CheckCircle,
  Award,
  BookText,
  User,
  Phone,
  MessageSquare,
  Eye,
  Target,
  Shield,
  Wheat,
  Atom,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Slider from "@/ui/common/Slider";

const fadeUp = {
  
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
}








const slogans = [
  {
    icon: <Shield className="w-10 h-10 text-blue-300" />,
    text: "Jai Jawan",
    gradient: "from-blue-400 to-cyan-300",
  },
  {
    icon: <Wheat className="w-10 h-10 text-green-300" />,
    text: "Jai Kisan",
    gradient: "from-green-400 to-lime-300",
  },
  {
    icon: <Atom className="w-10 h-10 text-pink-300" />,
    text: "Jai Vigyan",
    gradient: "from-pink-400 to-purple-300",
  },
]

export default function Home() {
  const quickAccessItems = [
  { text: "Enquire Now", icon: BookOpen, action: () => enquiryRef.current?.openDialog()  },
  { text: "Admission", icon: UserPlus, link: "/ssceducation/Admission"},
  { text: "Verification", icon: FileCheck, link: "/ssceducation/Verification" },
  { text: "Examination", icon: ClipboardList, link: "/ssceducation/Examination" },
  { text: "Transfer of Credits", icon: ArrowLeftRight, link: "/ssceducation/TransferofCredits" },
  { text: "Passing Criteria", icon: CheckCircle, link: "/ssceducation/PassingCriteria" },
  { text: "Results", icon: Award, link: "/ssceducation/results" },
  { text: "Course Material", icon: BookText, link: "/ssceducation/CourseMaterial" },
]
  const enquiryRef = useRef();

  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', contactNumber: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  return (
    <main className="bg-white">
      {/* Hero Section - Replaced static banner with slider component */}
      <motion.section
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative text-white w-full md:aspect-[32/10] min-h-[200px] max-h-[600px] overflow-hidden"
      >
        <div className="w-full h-full">
          <Slider />
        </div>
      </motion.section>

    <Welcome />

    <Counter />

      {/* Vision & Mission */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex justify-center px-4 md:px-8"
        style={{
          backgroundImage: "url('/Background/visionBackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl w-full py-16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left Column */}
            <motion.div className="md:w-1/2 space-y-6" variants={fadeUp} custom={0}>
              <h2 className="text-4xl font-bold text-blue-950 leading-snug">About Us</h2>
              <p className="text-lg text-gray-800 leading-relaxed">
                We provide <span className="font-semibold">sustainable inclusive learning</span> with universal and
                flexible access to quality school education and skill development. Our focus is on relevant, continuing,
                and holistic education up to pre-degree level, while promoting equity and social justice in education.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                We are committed to{" "}
                <span className="font-semibold">Excellence, Sustainability, Inclusion, and Flexibility</span> in
                education, along with continual improvement of our Quality Management System.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              className="md:w-1/2 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 space-y-8 border border-white/50"
              variants={fadeUp}
              custom={1}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Vision */}
              <motion.div className="p-3 rounded-xl hover:bg-blue-50 transition" variants={fadeUp} custom={2}>
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="text-blue-700" size={28} />
                  <h3 className="text-2xl font-bold text-blue-900">Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide sustainable, inclusive learning with universal and flexible access to quality school
                  education and skill development.
                </p>
              </motion.div>

              {/* Mission */}
              <motion.div className="p-3 rounded-xl hover:bg-blue-50 transition" variants={fadeUp} custom={3}>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-blue-700" size={28} />
                  <h3 className="text-2xl font-bold text-blue-900">Mission</h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Provide relevant, continuing, and holistic education up to pre-degree level.</li>
                  <li>Contribute to the universalisation of school education.</li>
                  <li>Promote equity and social justice for all learners.</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Programmes */}
      <motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  className="py-10 px-4 sm:px-6 md:px-12 lg:px-24 mx-auto"
  style={{
    backgroundImage: "url('/Background/programme.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundOpacity: 0.1,
  }}
>
  <motion.h2
    variants={fadeUp}
    custom={0} id="programme"
    className="scroll-mt-40 text-3xl sm:text-4xl pt-4 font-bold text-white font-serif mb-8 sm:mb-10 text-center uppercase"
  >
    Our Programmes
  </motion.h2>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-24">
    {[
      ["Secondary", "/ssceducation/SecondaryLevel"],
      ["Senior Secondary", "/ssceducation/Sr-SecondaryLevel"],
    ].map(([title, desc], i) => (
      <motion.a
        key={i}
        variants={fadeUp}
        custom={i + 1}
        href={desc}
        className="relative rounded w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-64 sm:h-72 md:h-80 shadow overflow-hidden flex flex-col justify-between group"
      >
         <EnquiryFormDialog ref={enquiryRef} />
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
          style={{
            backgroundImage: `url('/images/Board/${i + 9}.png')`,
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>

        {/* Spacer */}
        <div></div>

        {/* Heading */}
        <h3 className="text-lg sm:text-xl font-semibold text-white bg-black/60 p-3 text-center relative z-10">
          {title}
        </h3>
      </motion.a>
    ))}
  </div>
</motion.section>

      {/* Quick Links */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-16 bg-blue-50 px-6 max-w-6xl mx-auto"
      >
        <motion.h2 variants={fadeUp} custom={0} className="text-4xl font-bold text-blue-950 mb-10 text-center">
          Quick Access
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {quickAccessItems.map(({ text, icon: Icon, link, action }, i) => (
  <motion.div key={i} variants={fadeUp} custom={i + 1}>
    {link ? (
      <Link href={link}>
        <div className="group bg-white hover:bg-blue-600 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
          <Icon
            className="mx-auto mb-3 group-hover:text-white text-blue-600 group-hover:scale-110 transition-transform duration-300"
            size={32}
          />
          <p className="text-blue-800 font-medium text-center group-hover:font-bold group-hover:text-white transition-colors">
            {text}
          </p>
        </div>
      </Link>
    ) : (
      <button
        onClick={action}
        className="group bg-white hover:bg-blue-600 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer w-full"
      >
        <Icon
          className="mx-auto mb-3 group-hover:text-white text-blue-600 group-hover:scale-110 transition-transform duration-300"
          size={32}
        />
        <p className="text-blue-800 font-medium text-center group-hover:font-bold group-hover:text-white transition-colors">
          {text}
        </p>
      </button>
    )}
  </motion.div>
))}

        </div>
      </motion.section>

      {/* Home Page Contact Form Previous */}
     {/*  <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-20 px-6 text-white"
        style={{
          backgroundImage: "url('/Background/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          objectFit: "top",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          Left Side - Text
          <div>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-bold mb-4">
              Join the Future of Flexible Education
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="max-w-lg mb-6 text-gray-200">
              Choose an inclusive, recognized, and future-ready education system.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Button asChild size="lg" variant="secondary">
                <Link href="/ssceducation/contactus">Contact Us</Link>
              </Button>
            </motion.div>
          </div>

           <motion.form
      variants={fadeUp}
      custom={3}
      className="bg-white text-gray-900 rounded-lg shadow-lg p-6 space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center border rounded-lg overflow-hidden">
        <User className="text-gray-500 ml-3" size={20} />
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border-none focus:ring-0"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-center border rounded-lg overflow-hidden">
        <Phone className="text-gray-500 ml-3" size={20} />
        <Input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          className="border-none focus:ring-0"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-start border rounded-lg overflow-hidden">
        <MessageSquare className="text-gray-500 ml-3 mt-3" size={20} />
        <Textarea
          name="message"
          placeholder="Your Message"
          className="border-none focus:ring-0"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button className="w-full" variant="default" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {submitStatus === 'success' && (
        <p className="text-green-600 text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
      )}
    </motion.form>
        </div>
      </motion.section> */}
    </main>

  )
}
