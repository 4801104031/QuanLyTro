import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: "--font-poppins"
});
export const metadata: Metadata = {
  title: "Quản lý trọ IT MOTEL",
  description: "Dịch vụ phòng trọ tốt nhất",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <main className="font-normal">
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>



        </main>
      </body>
    </html>
  );
}
