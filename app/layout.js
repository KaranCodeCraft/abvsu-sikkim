import "./globals.css";

export const metadata = {
  title: "SIKKIM GLOBAL TECHNICAL UNIVERSITY",
  description: "Sikkim Global Technical University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-white text-black text-justify"
      >
        {children}
      </body>
    </html>
  );
}
