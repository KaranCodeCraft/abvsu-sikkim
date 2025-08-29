"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function PersonalInformation({ formData, setFormData, errors = {} }) {
  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* Course Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-800">COURSE / PROGRAMME DETAILS:</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Course Applied For</Label>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="secondary" />
                <Label htmlFor="secondary">Secondary</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="senior-secondary" />
                <Label htmlFor="senior-secondary">Senior Secondary</Label>
              </div>
            </div>
          </div>

          <div>
            <Label>Admission Type</Label>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="full-subjects" />
                <Label htmlFor="full-subjects">Full Subjects</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="transfer-credit" />
                <Label htmlFor="transfer-credit">Transfer of Credit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="part-admission" />
                <Label htmlFor="part-admission">Part Admission</Label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="application-date">Date of Application</Label>
          <Input
            id="application-date"
            type="date"
            value={
              formData.applicationDate ||
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)
            }
            onChange={(e) => updateFormData("applicationDate", e.target.value)}
          />
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-800">PERSONAL INFORMATION</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label>Gender *</Label>
            <RadioGroup
              value={formData.gender || ""}
              onValueChange={(value) => updateFormData("gender", value)}
              className="flex gap-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="transgender" id="transgender" />
                <Label htmlFor="transgender">Transgender</Label>
              </div>
            </RadioGroup>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>

          <div>
            <Label htmlFor="dob">Date of Birth *</Label>
            <Input
              id="dob"
              type="date"
              value={formData.dateOfBirth || ""}
              onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
              className={errors.dateOfBirth ? "border-red-500" : ""}
            />
            {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="applicant-name">Name of Applicant *</Label>
            <Input
              id="applicant-name"
              value={formData.applicantName || ""}
              onChange={(e) => updateFormData("applicantName", e.target.value)}
              placeholder="Enter full name"
              className={errors.applicantName ? "border-red-500" : ""}
            />
            {errors.applicantName && <p className="text-red-500 text-sm mt-1">{errors.applicantName}</p>}
          </div>

          <div>
            <Label htmlFor="father-name">Father's Name *</Label>
            <Input
              id="father-name"
              value={formData.fatherName || ""}
              onChange={(e) => updateFormData("fatherName", e.target.value)}
              placeholder="Enter father's name"
              className={errors.fatherName ? "border-red-500" : ""}
            />
            {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="mother-name">Mother's Name *</Label>
            <Input
              id="mother-name"
              value={formData.motherName || ""}
              onChange={(e) => updateFormData("motherName", e.target.value)}
              placeholder="Enter mother's name"
              className={errors.motherName ? "border-red-500" : ""}
            />
            {errors.motherName && <p className="text-red-500 text-sm mt-1">{errors.motherName}</p>}
          </div>

          <div>
            <Label htmlFor="aadhar">Aadhar No. *</Label>
            <Input
              id="aadhar"
              value={formData.aadharNo || ""}
              onChange={(e) => updateFormData("aadharNo", e.target.value)}
              placeholder="Enter 12-digit Aadhar number"
              className={errors.aadharNo ? "border-red-500" : ""}
            />
            {errors.aadharNo && <p className="text-red-500 text-sm mt-1">{errors.aadharNo}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">E-mail Id *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email || ""}
              onChange={(e) => updateFormData("email", e.target.value)}
              placeholder="Enter email address"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label>Marital Status</Label>
            <RadioGroup
              value={formData.maritalStatus || ""}
              onValueChange={(value) => updateFormData("maritalStatus", value)}
              className="flex gap-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="married" id="married" />
                <Label htmlFor="married">Married</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unmarried" id="unmarried" />
                <Label htmlFor="unmarried">Un-Married</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="divorced" id="divorced" />
                <Label htmlFor="divorced">Divorced</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="widowed" id="widowed" />
                <Label htmlFor="widowed">Widowed</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Category</Label>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="sc" />
                <Label htmlFor="sc">SC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="st" />
                <Label htmlFor="st">ST</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="obc" />
                <Label htmlFor="obc">OBC</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="gen" />
                <Label htmlFor="gen">GEN</Label>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="religion">Religion</Label>
            <Input
              id="religion"
              value={formData.religion || ""}
              onChange={(e) => updateFormData("religion", e.target.value)}
              placeholder="Enter religion"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Nationality</Label>
            <RadioGroup
              value={formData.nationality || ""}
              onValueChange={(value) => updateFormData("nationality", value)}
              className="flex flex-row gap-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sikkim" id="sikkim" />
                <Label htmlFor="sikkim">Sikkim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other-nationality" />
                <Label htmlFor="other-nationality">Other</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label>Whether differently abled</Label>
            <RadioGroup
              value={formData.disabled || ""}
              onValueChange={(value) => updateFormData("disabled", value)}
              className="flex flex-row gap-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="disabled-yes" />
                <Label htmlFor="disabled-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="disabled-no" />
                <Label htmlFor="disabled-no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
