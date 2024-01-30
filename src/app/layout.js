import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav.jsx";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stage",
  description: "concerts and dj sessions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <div>
      <Nav />
    </div>
      </body>
    </html>
  );
}
