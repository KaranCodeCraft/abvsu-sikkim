import AnimatedFooter from "@/components/board/Footer";
import Navbar from "@/components/board/Navbar";
import { Caveat } from "next/font/google";
import Footer from "@/components/board/Footer"

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // add weights you need
});

export const metadata = {
  title: "Atal Bihari Vajpayee Skill Board",
  description: "Atal Bihari Vajpayee Skill Board",
};

export default function RootLayout({ children }) {
  return (
    <main>
      <Navbar/>
      {children}
      {/* <AnimatedFooter/> */}
      <Footer />
    </main>
  );
}
