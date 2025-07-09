import Provider from "@/app/dashboard/Provider";
import Navbar from "@/ui/dashboard/Navbar";
export const metadata = {
  title: "Atal Bihari Vajpayee Skill University",
  description: "Atal Bihari Vajpayee Skill University",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Provider>
      <Navbar />

        {children}
        </Provider>
    </>
  );
}
