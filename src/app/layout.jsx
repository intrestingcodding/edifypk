import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

const inter = Inter({ subsets: ["latin"] });
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-dm_sans",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={dm_sans.className}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}