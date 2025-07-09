"use client";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Anti Ragging Committee</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Anti Ragging Committee</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 md:px-16">
        {/* Notification 1 - Anti Ragging Committee */}
        <div className="mb-16 border border-gray-200 rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gray-800 text-white px-6 py-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Ref: No: SGTU/ND/25/281</p>
                <p className="text-sm">Date: 27th June 2025</p>
              </div>
              <h2 className="text-xl font-bold">NOTIFICATION</h2>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Subject: Constitution of Anti-ragging Committee, Atal Bihari Vajpayee Skill University (SGTU) – Namchi, South Sikkim reg.</h3>
            <p className="mb-4 text-gray-700">Reference: UGC Anti-Ragging Regulations 2009 - Compliances.</p>
            <p className="mb-6 text-gray-700">
              The SGTU, Sikkim has constituted the Anti-Ragging Committee for the Academic Year of the Campus as per the clause 6.3 (a) of UGC Regulations on Curbing the Menace of Ragging in Higher Education, 2009. Following are the members of the Anti-Ragging Committee:
            </p>
            
            {/* Committee Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Sr. No.</th>
                    <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Composition</th>
                    <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [1, "Head of the Institution", "Dr. (Prof.) Swami Prasad Sinha", "Vice-Chancellor, Chairperson of Committee"],
                    [2, "Member", "Dr. Ankur Johari", "Pro Chancellor"],
                    [3, "Member", "Mr. Sanjeev", "Registrar", ],
                    [4, "Representative of Civil & Police Administration", "Dr. Tshering Namgyal Gyatso Lepcha", "Sr. Superintendent of Police",],
                    [5, "Representative of NGO involved in Youth Activity", "Ms. Saraswati Rai", "President, Voice", ],
                    [6, "Representative of Parents", "Mrs. Ongchen Bhutia", "Parents", ],
                    [7, "Representative of Parents", "Mrs. Alamara Khatoon Ansari", "Parents",],
                    [8, "Representative of Student", "Ms. Nikita Chettri", "Students",],
                    [9, "Representative of Student", "Ms. Shahin Akhtari Ansari", "Students", ],
                    [10, "Representative of Local Media", "Mr. Anish Pradhan", "Local Media, Reporter, Fastest Fast Sikkim",]
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-gray-700">The tenure of the Committee will be 1 year.</p>
            <div className="mt-6 pt-4 border-t border-gray-300 text-right">
              <p className="font-semibold">Registrar, Atal Bihari Vajpayee Skill University</p>
            </div>
          </div>
        </div>

        {/* Notification 2 - Anti Ragging Squad */}
        <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gray-800 text-white px-6 py-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Ref: SGTU/RO/2024/014</p>
                <p className="text-sm">Date: 14th June 2024</p>
              </div>
              <h2 className="text-xl font-bold">Anti-Ragging Squad</h2>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <p className="mb-6 text-gray-700">
              The following members have been selected to the Anti-Ragging squad of the University to curb the menace of ragging in and around the Campus:
            </p>
            
            {/* Squad Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Sr. No.</th>
                    <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Composition</th>
                    <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">Name & Designation</th>
                    <th className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">E-mail ID & Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [1, "Representative Of Teaching Staff", "Sweety, Assistant Professor", "sweetympharmcology@gmail.com, 9999389921"],
                    [2, "Representative Of Non-Teaching Staff", "Vikash Yadav", "Manager Administration, SGTU, suvikash4591@gmail.com, 8076939777"],
                    [3, "Representative Of Non-Teaching Staff", "Ms. Rabina Chettri", "Program Manager, SGTU, programmanagersgtu@gmail.com, 7584905374"],
                    [4, "Representative Of Non-Teaching Staff", "Bishal Basnett", "System Administrator, SGTU, bishalchettri1590@gmail.com, 7584937139"],
                    [5, "Representative Of Non-Teaching Staff", "Geeta Rai", "Admin cum Office Executive, 7318906324"],
                    [6, "Representative Of Non-Teaching Staff", "Kushal Gurung", "Admin cum Office Executive, 7431957544"]
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border border-gray-300 px-4 py-2 text-left whitespace-nowrap">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-gray-700">The tenure of the Committee will be 1 year.</p>
            <div className="mt-6 pt-4 border-t border-gray-300 text-right">
              <p className="font-semibold">Registrar, Atal Bihari Vajpayee Skill University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;