"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SelfCertificate({ formData, setFormData, errors = {} }) {
  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="space-y-6">
      <div className="bg-blue-950 text-white p-3 text-center">
        <h3 className="text-lg font-semibold">FORMAT FOR SELF CERTIFICATE OF LITERACY</h3>
      </div>

      <div className="text-center text-sm text-gray-600 mb-6">
        (To be filled in only by Applicants of Secondary Course)
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span>I,</span>
              <div className="flex-1">
                <Input
                  placeholder="Enter your name"
                  value={formData.certificateName || ""}
                  onChange={(e) => updateFormData("certificateName", e.target.value)}
                  className="border-b border-gray-400 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent"
                />
              </div>
              <span>(Name), Applicant for Secondary Course at the</span>
            </div>

            <p className="leading-relaxed">
              BOSSE (Board of Open Schooling and Skill Education), certify that I am literate, I can read and write
            </p>

            <div className="flex items-center gap-2">
              <Input
                placeholder="Medium of Instruction"
                value={formData.mediumOfInstruction || ""}
                onChange={(e) => updateFormData("mediumOfInstruction", e.target.value)}
                className="border-b border-gray-400 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent w-48"
              />
              <span>(Medium of Instruction). I understand that self learning is important in the open schooling</span>
            </div>

            <p className="leading-relaxed">
              system and I take the responsibility of my own studies. I am desirous of continuing my education. I am
              sending this application form to BOSSE for fulfilling this desire of mine. I am grateful to BOSSE for
              giving me this second chance, this opportunity to continue my education.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="cert-date">Date:</Label>
            <Input
              id="cert-date"
              type="date"
              value={formData.certificateDate || ""}
              onChange={(e) => updateFormData("certificateDate", e.target.value)}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="applicant-signature">Signature of Applicant:</Label>
            <Input
              id="applicant-signature"
              placeholder="Digital signature or type name"
              value={formData.applicantSignature || ""}
              onChange={(e) => updateFormData("applicantSignature", e.target.value)}
              className="mt-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="cert-place">Place:</Label>
            <Input
              id="cert-place"
              placeholder="Enter place"
              value={formData.certificatePlace || ""}
              onChange={(e) => updateFormData("certificatePlace", e.target.value)}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="cert-applicant-name">Name of Applicant:</Label>
            <Input
              id="cert-applicant-name"
              placeholder="Enter full name"
              value={formData.certificateApplicantName || ""}
              onChange={(e) => updateFormData("certificateApplicantName", e.target.value)}
              className="mt-2"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="parent-countersign">Countersigned by Parent/Guardian's:</Label>
            <Input
              id="parent-countersign"
              placeholder="Parent/Guardian signature or name"
              value={formData.parentCountersign || ""}
              onChange={(e) => updateFormData("parentCountersign", e.target.value)}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="parent-guardian-name">Name of Parent/Guardian's:</Label>
            <Input
              id="parent-guardian-name"
              placeholder="Enter parent/guardian name"
              value={formData.parentGuardianName || ""}
              onChange={(e) => updateFormData("parentGuardianName", e.target.value)}
              className="mt-2"
            />
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-3">DECLARATION BY CANDIDATE</h4>
          <p className="text-sm mb-4">
            I hereby declare that I have carefully read the instructions and all the informations furnished by me are
            correct.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="candidate-signature">Candidate's Signature</Label>
              <Input
                id="candidate-signature"
                placeholder="Digital signature or type name"
                value={formData.candidateSignature || ""}
                onChange={(e) => updateFormData("candidateSignature", e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="parent-signature">Parent's /Guardian's Signature</Label>
              <Input
                id="parent-signature"
                placeholder="Parent/Guardian signature or name"
                value={formData.parentSignature || ""}
                onChange={(e) => updateFormData("parentSignature", e.target.value)}
                className="mt-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label htmlFor="final-date">Date</Label>
              <Input
                id="final-date"
                type="date"
                value={formData.finalDate || ""}
                onChange={(e) => updateFormData("finalDate", e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="final-place">Place</Label>
              <Input
                id="final-place"
                placeholder="Enter place"
                value={formData.finalPlace || ""}
                onChange={(e) => updateFormData("finalPlace", e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
