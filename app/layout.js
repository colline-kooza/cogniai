import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/main.scss";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";

import { Inter } from "next/font/google";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ColAi",
  description:
    "ColAI is your gateway to effortless, intelligent conversations. Powered by Next.js and tailored by Collinz Dev, our chatbot redefines how you interact and engage. Seamlessly designed for a lightning-fast user interface, it offers you a world of information, assistance, and engaging dialogue at your fingertips",
};
export default async function RootLayout({ children }) {
  return (
    <html lang="en ">
      <body class="relative bg-black" className={inter.className}>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <ToastContainer />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
