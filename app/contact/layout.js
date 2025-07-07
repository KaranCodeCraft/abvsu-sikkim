import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SIKKIM GLOBAL TECHNICAL UNIVERSITY",
  description: "Sikkim Global Technical University",
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
