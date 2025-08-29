"use client"

import { Input } from "@/components/ui/input"

export default function SubjectSelection({ formData, setFormData, errors = {} }) {
  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* TOC Subjects */}
      <div className="space-y-4">
        <div className="bg-blue-950 text-white p-3 text-center">
          <h3 className="text-lg font-semibold">Subjects of TOC (If applicable)</h3>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left border-r">TOC Subjects</th>
                <th className="p-3 text-left border-r">Subjects of BOSSE</th>
                <th className="p-3 text-left">Code</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((num) => (
                <tr key={num} className="border-t">
                  <td className="p-3 border-r">
                    <div className="flex items-center">
                      <span className="mr-2">({num})</span>
                      <Input
                        placeholder="Enter TOC subject"
                        className="h-8"
                        value={formData[`tocSubject${num}`] || ""}
                        onChange={(e) => updateFormData(`tocSubject${num}`, e.target.value)}
                      />
                    </div>
                  </td>
                  <td className="p-3 border-r">
                    <div className="flex items-center">
                      <span className="mr-2">({num})</span>
                      <Input
                        placeholder="Enter BOSSE subject"
                        className="h-8"
                        value={formData[`bosseSubject${num}`] || ""}
                        onChange={(e) => updateFormData(`bosseSubject${num}`, e.target.value)}
                      />
                    </div>
                  </td>
                  <td className="p-3">
                    <Input
                      placeholder="Code"
                      className="h-8"
                      value={formData[`tocCode${num}`] || ""}
                      onChange={(e) => updateFormData(`tocCode${num}`, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Part Admission Subjects */}
      <div className="space-y-4">
        <div className="bg-blue-950 text-white p-3 text-center">
          <h3 className="text-lg font-semibold">Subjects of Part Admission</h3>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left border-r">Part Admission Subjects</th>
                <th className="p-3 text-left">Code</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((num) => (
                <tr key={num} className="border-t">
                  <td className="p-3 border-r">
                    <div className="flex items-center">
                      <span className="mr-2">({num})</span>
                      <Input
                        placeholder="Enter part admission subject"
                        className="h-8"
                        value={formData[`partSubject${num}`] || ""}
                        onChange={(e) => updateFormData(`partSubject${num}`, e.target.value)}
                      />
                    </div>
                  </td>
                  <td className="p-3">
                    <Input
                      placeholder="Code"
                      className="h-8"
                      value={formData[`partCode${num}`] || ""}
                      onChange={(e) => updateFormData(`partCode${num}`, e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-2">
        <p>
          <strong>Note:</strong>
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>'Self Attested Copies of Certificates/Marks Sheets should be attached'</li>
          <li>
            'If you are an applicant for Secondary Course and do not have any school leaving certificate, please attach
            a self certificate of Literacy, saying that you know how to read and write. The format of the self
            certificate is attached.'
          </li>
        </ul>
      </div>
    </div>
  )
}
