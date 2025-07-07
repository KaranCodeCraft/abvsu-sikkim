import Provider from "@/app/dashboard/Provider";
import Navbar from "@/ui/dashboard/Navbar";
export const metadata = {
  title: "SIKKIM GLOBAL TECHNICAL UNIVERSITY",
  description: "Sikkim Global Technical University",
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
