import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Atal Bihari Vajpayee Skill University",
  description: "Atal Bihari Vajpayee Skill University",
};

export default function RootLayout({ children }) {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  );
}
