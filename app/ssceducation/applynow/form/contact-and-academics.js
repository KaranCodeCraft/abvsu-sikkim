"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function ContactAndAcademics({ formData, setFormData, errors = {} }) {
  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-800">CONTACT DETAILS</h3>

        <div className="bg-blue-950 text-white p-2 text-center">
          <h4 className="font-semibold">Permanent Address (Don't Repeat Name)</h4>
        </div>

        <div>
          <Label htmlFor="permanent-address">Address *</Label>
          <Textarea
            id="permanent-address"
            value={formData.permanentAddress || ""}
            onChange={(e) => updateFormData("permanentAddress", e.target.value)}
            placeholder="Enter permanent address"
            rows={3}
            className={errors.permanentAddress ? "border-red-500" : ""}
          />
          {errors.permanentAddress && <p className="text-red-500 text-sm mt-1">{errors.permanentAddress}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              value={formData.city || ""}
              onChange={(e) => updateFormData("city", e.target.value)}
              placeholder="Enter city"
              className={errors.city ? "border-red-500" : ""}
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>
          <div>
            <Label htmlFor="state">State *</Label>
            <Input
              id="state"
              value={formData.state || ""}
              onChange={(e) => updateFormData("state", e.target.value)}
              placeholder="Enter state"
              className={errors.state ? "border-red-500" : ""}
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>
          <div>
            <Label htmlFor="pincode">Pin Code *</Label>
            <Input
              id="pincode"
              value={formData.pincode || ""}
              onChange={(e) => updateFormData("pincode", e.target.value)}
              placeholder="Enter 6-digit pin code"
              className={errors.pincode ? "border-red-500" : ""}
            />
            {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="mobile">
            Permanent Mobile No. (On which all the important information to be delivered) *
          </Label>
          <Input
            id="mobile"
            value={formData.mobile || ""}
            onChange={(e) => updateFormData("mobile", e.target.value)}
            placeholder="Enter 10-digit mobile number"
            className={errors.mobile ? "border-red-500" : ""}
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>

        <div className="bg-blue-950 text-white p-2 text-center">
          <h4 className="font-semibold">Current Address for Communication, if Different</h4>
        </div>

        <div>
          <Label htmlFor="current-address">Current Address</Label>
          <Textarea
            id="current-address"
            value={formData.currentAddress || ""}
            onChange={(e) => updateFormData("currentAddress", e.target.value)}
            placeholder="Enter current address (if different from permanent)"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="parent-name">Parent/Guardian Name</Label>
            <Input
              id="parent-name"
              value={formData.parentName || ""}
              onChange={(e) => updateFormData("parentName", e.target.value)}
              placeholder="Enter parent/guardian name"
            />
          </div>
          <div>
            <Label htmlFor="parent-occupation">Parent Occupation</Label>
            <Input
              id="parent-occupation"
              value={formData.parentOccupation || ""}
              onChange={(e) => updateFormData("parentOccupation", e.target.value)}
              placeholder="Enter parent occupation"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="parent-contact">Parent/Guardian Contact no.</Label>
            <Input
              id="parent-contact"
              value={formData.parentContact || ""}
              onChange={(e) => updateFormData("parentContact", e.target.value)}
              placeholder="Enter parent contact number"
            />
          </div>
          <div>
            <Label htmlFor="parent-email">Email Address</Label>
            <Input
              id="parent-email"
              type="email"
              value={formData.parentEmail || ""}
              onChange={(e) => updateFormData("parentEmail", e.target.value)}
              placeholder="Enter parent email"
            />
          </div>
        </div>
      </div>

      {/* Academic Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-blue-800">DETAILS OF LAST CLASS/EXAMINATION PASSED*</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="class-exam">Class/Examination *</Label>
            <Input
              id="class-exam"
              value={formData.classExam || ""}
              onChange={(e) => updateFormData("classExam", e.target.value)}
              placeholder="Enter class/examination"
              className={errors.classExam ? "border-red-500" : ""}
            />
            {errors.classExam && <p className="text-red-500 text-sm mt-1">{errors.classExam}</p>}
          </div>
          <div>
            <Label htmlFor="marks">Marks</Label>
            <Input
              id="marks"
              value={formData.marks || ""}
              onChange={(e) => updateFormData("marks", e.target.value)}
              placeholder="Enter marks"
            />
          </div>
          <div>
            <Label htmlFor="percentage">Percentage (%)</Label>
            <Input
              id="percentage"
              value={formData.percentage || ""}
              onChange={(e) => updateFormData("percentage", e.target.value)}
              placeholder="Enter percentage"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="school-board">Name of School/Board *</Label>
            <Input
              id="school-board"
              value={formData.schoolBoard || ""}
              onChange={(e) => updateFormData("schoolBoard", e.target.value)}
              placeholder="Enter school/board name"
              className={errors.schoolBoard ? "border-red-500" : ""}
            />
            {errors.schoolBoard && <p className="text-red-500 text-sm mt-1">{errors.schoolBoard}</p>}
          </div>
          <div>
            <Label htmlFor="division-percentage">Division Percentage (%)</Label>
            <Input
              id="division-percentage"
              value={formData.divisionPercentage || ""}
              onChange={(e) => updateFormData("divisionPercentage", e.target.value)}
              placeholder="Enter division percentage"
            />
          </div>
        </div>

        {/* Subjects Table */}
        <div className="space-y-2">
          <Label>Subjects Chosen</Label>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">S.No</th>
                  <th className="p-2 text-left">Subject</th>
                  <th className="p-2 text-left">Subject Code</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">1</td>
                  <td className="p-2">Language Subject</td>
                  <td className="p-2">
                    <Input placeholder="Code" className="h-8" />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">2</td>
                  <td className="p-2">Vocational Subject</td>
                  <td className="p-2">
                    <Input placeholder="Code" className="h-8" />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">3</td>
                  <td className="p-2">Other Subjects</td>
                  <td className="p-2">
                    <Input placeholder="Code" className="h-8" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <Label htmlFor="medium-instruction">Medium of Instruction opted for: English / Hindi / Nepali</Label>
          <Input
            id="medium-instruction"
            value={formData.mediumInstruction || ""}
            onChange={(e) => updateFormData("mediumInstruction", e.target.value)}
            placeholder="Enter medium of instruction"
          />
        </div>

        {/* Payment Details */}
        <div className="space-y-4">
          <h4 className="font-semibold">Payment Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Mode of Payment</Label>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="dd" />
                  <Label htmlFor="dd">DD</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="online" />
                  <Label htmlFor="online">Online</Label>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="payment-date">Date</Label>
              <Input
                id="payment-date"
                type="date"
                value={formData.paymentDate || ""}
                onChange={(e) => updateFormData("paymentDate", e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                value={formData.amount || ""}
                onChange={(e) => updateFormData("amount", e.target.value)}
                placeholder="Enter amount"
              />
            </div>
            <div>
              <Label htmlFor="draft-no">Draft No./UTR NO.</Label>
              <Input
                id="draft-no"
                value={formData.draftNo || ""}
                onChange={(e) => updateFormData("draftNo", e.target.value)}
                placeholder="Enter draft/UTR number"
              />
            </div>
            <div>
              <Label htmlFor="bank-name">Name of the Bank/Branch</Label>
              <Input
                id="bank-name"
                value={formData.bankName || ""}
                onChange={(e) => updateFormData("bankName", e.target.value)}
                placeholder="Enter bank name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
