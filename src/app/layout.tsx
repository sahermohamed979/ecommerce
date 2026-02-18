import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer, Bounce } from "react-toastify";
import type { Metadata } from "next";
import "./../styles/globals.css";
import logo from "../assets/images/mini-logo.png";
import AuthProvider from "@/src/featuers/auth/providers/AuthProvider";
import ReactQueryProvider from "../providers/ReactQueryProvider";

config.autoAddCss = false;
import { Exo } from "next/font/google";
const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "E-commerce App",
  description: "Modern e-commerce application",
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${exo.variable} font-medium`}>
        <ReactQueryProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
