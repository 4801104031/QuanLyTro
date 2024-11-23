import type { Metadata } from "next";
import { Poppins } from "next/font/google";  // font chữ
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: "--font-poppins"
});
// header title and description
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
      <body className={poppins.className}>
          <NextAuthProvider>
            <ThemeProvider>
              <Toast />
              <main className="font-normal">
              <Header />
              {children}
              <Footer />
              </main>
            </ThemeProvider>
          </NextAuthProvider>
      </body>
    </html>
  );
}
