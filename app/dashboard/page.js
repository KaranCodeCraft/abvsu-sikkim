import { getEnquiries } from "./actions";
import EnquiryStatusSelector from "@/app/dashboard/EnquiryStatusSelector";


export default async function Dashboard() {
  const enquiries = await getEnquiries();
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Enquiry Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Created</th>
            </tr>
          </thead>
          <tbody>
            {enquiries && enquiries.map((enquiry) => (
              <tr key={enquiry.id} className="border-t">
                <td className="p-2 border">{enquiry.name}</td>
                <td className="p-2 border">{enquiry.email}</td>
                <td className="p-2 border">{enquiry.phone}</td>
                <td className="p-2 border">
                  <details>
                    <summary className="cursor-pointer text-blue-600">View</summary>
                    <p className="text-sm">{enquiry.message}</p>
                  </details>
                </td>
                <td className="p-2 border">
                  <EnquiryStatusSelector id={enquiry.id} status={enquiry.status}/>
                </td>
                <td className="p-2 border">{new Date(enquiry.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
