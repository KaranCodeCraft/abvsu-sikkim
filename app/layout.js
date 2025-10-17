import "./globals.css";
import AdmissionAlertPopup from "@/ui/common/Popup";
export const metadata = {
  title: "Atal Bihari Vajpayee Skill University",
  description: "Atal Bihari Vajpayee Skill University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-white text-black text-justify"
      >
         <AdmissionAlertPopup />
        {children}
      </body>
    </html>
  );
}
