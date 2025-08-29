"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, User, Phone, MessageSquare } from "lucide-react"
import logo from "@/public/logo/logos.png"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'

const AnimatedFooter = () => {
  const footerLinks = [
    /* {
      title: "Main Navigation",
      links: [{ name: "Home", link: "/" }],
    }, */
    {
      title: "About Us",
      links: [
        { name: "Vision & Mission", link: "/ssceducation/Vision&Mission" },
        { name: "Why Us", link: "/ssceducation/WhyUs" },
        { name: "Our Inspiration", link: "/ssceducation/ourinspiration" },
      ],
    },
     {
      title: "Student Zone",
      links: [
        { name: "Admission", link: "/ssceducation/Admission" },
        { name: "Fees Structure", link: "/ssceducation/FeesStructure" },
        { name: "Examination", link: "/ssceducation/Examination" },
        { name: "Verification", link: "/ssceducation/Verification" },
        { name: "Transfer of Credits", link: "/ssceducation/TransferofCredits" },
        { name: "Passing Criteria", link: "/ssceducation/PassingCriteria" },
        { name: "Results", link: "/ssceducation/results" },
        { name: "Certification Eligibility", link: "/ssceducation/CertificationEligibility" },

      ],
    },
    {
      title: "Programmes",
      links: [
        { name: "Secondary Level", link: "/ssceducation/SecondaryLevel" },
        { name: "Sr Secondary Level", link: "/ssceducation/Sr-SecondaryLevel" },
        { name: "Skill Education", link: "/ssceducation/SkillEducation" },
      ],
    },
   
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  }

  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', contactNumber: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/Background/footerbg.jpeg')" }}
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Address */}
          <div className="md:col-span-1 p-4 bg-black/40 shadow rounded-b-xl border-white/30 border flex flex-col items-center justify-center">
            <div className="rounded-2xl p-2 w-fit">
              <Image src={logo} width={200} height={200} alt="Atal Bihari Vajpayee Skill University Logo" />
            </div>
            <div className="space-y-3 pt-4 text-center">
              <p className="font-bold text-xl font-serif tracking-wide text-white">
                Atal Bihari Vajpayee Skill University
              </p>
              <p className="text-sm text-white">
                Karthok Road, Pakyong, Sikkim - 737106
              </p>
              {/* Social Icons */}
              <div className="flex gap-4 justify-center mt-3">
                {[
                  { name: "Facebook", link: "#", icon: <Facebook className="w-5 h-5" /> },
                  { name: "Twitter", link: "#", icon: <Twitter className="w-5 h-5" /> },
                  { name: "Instagram", link: "#", icon: <Instagram className="w-5 h-5" /> },
                  { name: "LinkedIn", link: "#", icon: <Linkedin className="w-5 h-5" /> },
                  { name: "YouTube", link: "#", icon: <Youtube className="w-5 h-5" /> },
                ].map((item, idx) => (
                  <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Footer Links */}
          <div className="md:col-span-2  text-white p-8 rounded-lg shadow">
            {/* Row 1: Main Navigation + About Us */}
            <div className="  grid grid-cols-2 h-32 gap-6 mb-6">
              {footerLinks.slice(0, 2).map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((item, i) => (
                      <li key={i}>
                        <a href={item.link} className="hover:text-yellow-300 transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Row 2: Programmes + Student Zone */}
            <div className="grid grid-cols-2 gap-6">
              {footerLinks.slice(2).map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((item, i) => (
                      <li key={i}>
                        <a href={item.link} className="hover:text-yellow-300 transition-colors">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="md:col-span-1 bg-white text-gray-900 rounded-lg shadow-lg p-6"
          >
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center border rounded-md">
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
              <div className="flex items-center border rounded-md">
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
              <div className="flex items-start border rounded-md">
                <MessageSquare className="text-gray-500 ml-3 mt-3" size={20} />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  className="border-none focus:ring-0 min-h-[100px]"
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
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default AnimatedFooter
