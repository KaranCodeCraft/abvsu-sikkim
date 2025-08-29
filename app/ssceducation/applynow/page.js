"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import PersonalInformation from "./form/personal-information"
import ContactAndAcademics from "./form/contact-and-academics"
import SubjectSelection from "./form/subject-selection"
import SelfCertificate from "./form/self-certificate"

export default function AdmissionForm() {
  const [currentSection, setCurrentSection] = useState(1)
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sections = [
    { id: 1, title: "Personal Information", component: PersonalInformation },
    { id: 2, title: "Contact & Academic Details", component: ContactAndAcademics },
    { id: 3, title: "Subject Selection", component: SubjectSelection },
    { id: 4, title: "Self Certificate", component: SelfCertificate },
  ]

  const validateSection = (sectionId) => {
    const newErrors = {}

    if (sectionId === 1) {
      if (!formData.applicantName) newErrors.applicantName = "Name is required"
      if (!formData.fatherName) newErrors.fatherName = "Father's name is required"
      if (!formData.motherName) newErrors.motherName = "Mother's name is required"
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
      if (!formData.gender) newErrors.gender = "Gender is required"
      if (!formData.email) newErrors.email = "Email is required"
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
      if (!formData.aadharNo) newErrors.aadharNo = "Aadhar number is required"
      if (formData.aadharNo && !/^\d{12}$/.test(formData.aadharNo)) newErrors.aadharNo = "Aadhar must be 12 digits"
    }

    if (sectionId === 2) {
      if (!formData.permanentAddress) newErrors.permanentAddress = "Permanent address is required"
      if (!formData.city) newErrors.city = "City is required"
      if (!formData.state) newErrors.state = "State is required"
      if (!formData.pincode) newErrors.pincode = "Pin code is required"
      if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Pin code must be 6 digits"
      if (!formData.mobile) newErrors.mobile = "Mobile number is required"
      if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile must be 10 digits"
      if (!formData.classExam) newErrors.classExam = "Class/Examination is required"
      if (!formData.schoolBoard) newErrors.schoolBoard = "School/Board name is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateSection(currentSection)) {
      if (currentSection < 4) {
        setCurrentSection(currentSection + 1)
      }
    }
  }

  const handlePrevious = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
    }
  }

  const handleSubmit = () => {
    if (validateSection(currentSection)) {
      const submissionData = {
        personalInformation: {
          applicantName: formData.applicantName,
          fatherName: formData.fatherName,
          motherName: formData.motherName,
          dateOfBirth: formData.dateOfBirth,
          gender: formData.gender,
          email: formData.email,
          aadharNo: formData.aadharNo,
          maritalStatus: formData.maritalStatus,
          religion: formData.religion,
          nationality: formData.nationality,
          disabled: formData.disabled,
          applicationDate: formData.applicationDate,
        },
        contactAndAcademics: {
          permanentAddress: formData.permanentAddress,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          mobile: formData.mobile,
          currentAddress: formData.currentAddress,
          parentName: formData.parentName,
          parentOccupation: formData.parentOccupation,
          parentContact: formData.parentContact,
          parentEmail: formData.parentEmail,
          classExam: formData.classExam,
          marks: formData.marks,
          percentage: formData.percentage,
          schoolBoard: formData.schoolBoard,
          divisionPercentage: formData.divisionPercentage,
          mediumInstruction: formData.mediumInstruction,
          paymentDate: formData.paymentDate,
          amount: formData.amount,
          draftNo: formData.draftNo,
          bankName: formData.bankName,
        },
        subjectSelection: {
          tocSubjects: {
            tocSubject1: formData.tocSubject1,
            tocSubject2: formData.tocSubject2,
            tocSubject3: formData.tocSubject3,
            tocSubject4: formData.tocSubject4,
          },
          bosseSubjects: {
            bosseSubject1: formData.bosseSubject1,
            bosseSubject2: formData.bosseSubject2,
            bosseSubject3: formData.bosseSubject3,
            bosseSubject4: formData.bosseSubject4,
          },
          partAdmissionSubjects: {
            partSubject1: formData.partSubject1,
            partSubject2: formData.partSubject2,
            partSubject3: formData.partSubject3,
            partSubject4: formData.partSubject4,
          },
        },
        selfCertificate: {
          certificateName: formData.certificateName,
          mediumOfInstruction: formData.mediumOfInstruction,
          certificateDate: formData.certificateDate,
          applicantSignature: formData.applicantSignature,
          certificatePlace: formData.certificatePlace,
          certificateApplicantName: formData.certificateApplicantName,
          parentCountersign: formData.parentCountersign,
          parentGuardianName: formData.parentGuardianName,
          candidateSignature: formData.candidateSignature,
          parentSignature: formData.parentSignature,
          finalDate: formData.finalDate,
          finalPlace: formData.finalPlace,
        },
        submissionTimestamp: new Date().toISOString(),
      }

      console.log("Application Data for Backend:", JSON.stringify(submissionData, null, 2))
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">Success!</h2>
              <p className="text-gray-600 mb-4">
                Dear <strong>{formData.applicantName}</strong>,
              </p>
              <p className="text-gray-600">
                Your application has been submitted successfully. You will receive a confirmation email shortly.
              </p>
            </div>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setCurrentSection(1)
                setFormData({})
                setErrors({})
              }}
              className="w-full"
            >
              Submit Another Application
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const CurrentComponent = sections.find((s) => s.id === currentSection)?.component

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="bg-blue-950 text-white p-6 rounded-t-lg">
            <h1 className="text-2xl font-bold">ATAL BIHARI VAJPAYEE SKILL UNIVERSITY</h1>
            <p className="text-sm mt-2">Address: Karthok Road, Pakyong, Sikkim - 737106</p>
            <p className="text-sm">email: info@abvsu.ac.in</p>
            <div className="mt-4 p-2 bg-orange-600 inline-block rounded">
              <h2 className="text-xl font-bold">ADMISSION FORM</h2>
            </div>
          </div>

          <div className="bg-white p-4 border-x border-gray-200">
            <div className="flex justify-between items-center mb-2">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`text-sm font-medium ${currentSection >= section.id ? "text-blue-800" : "text-gray-400"}`}
                >
                  {section.title}
                </div>
              ))}
            </div>
            <Progress value={(currentSection / 4) * 100} className="h-2" />
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-blue-900">
              Section {currentSection}: {sections.find((s) => s.id === currentSection)?.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {CurrentComponent && <CurrentComponent formData={formData} setFormData={setFormData} errors={errors} />}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentSection === 1}>
            Previous
          </Button>

          {currentSection < 4 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
              Submit Application
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
