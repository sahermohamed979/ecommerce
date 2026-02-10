import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import "../styles/globals.css";
import { ReactNode } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer, Bounce } from "react-toastify";

config.autoAddCss = false;
import { Exo } from "next/font/google";
const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default async function layout({ children }: { children: ReactNode }) {

  return (
    <html lang="en">
      <body className={`${exo.variable} font-medium`}>
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
          theme="colored"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
