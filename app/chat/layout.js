import NavBar from "@/components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import SideBar from "@/components/SideBar";
import SearchForm from "@/components/SearchForm";
import { ChatProvider } from "@/components/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ColAi",
  description: "ColAI is your gateway to effortless, intelligent conversations. Powered by Next.js and tailored by Collinz Dev, our chatbot redefines how you interact and engage. Seamlessly designed for a lightning-fast user interface, it offers you a world of information, assistance, and engaging dialogue at your fingertips",
};
export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <ChatProvider>
        <ToastContainer />
        <div className="w-[100%] ">
          <NavBar />
        </div>
        <div className="flex">
          <div className="w-[23%] relative hidden h-[100vh]  lg:block overflow-hidden md:hidden">
            <SideBar />
          </div>
          <div className="flex flex-col md:w-[100%] w-[100%] lg:w-[74%] bg-[#222327] lg:h-[85vh] rounded-[1rem]">
            <main className="min-h-full overflow-hidden w-[100%]">
              {children}
            </main>
            <div className="lg:w-[74%] md:w-[80%] w-[100%] h-[18vh] md:h-[14vh] lg:h-[18vh] bg-[#222327]  fixed bottom-0 md:bottom-3 lg:bottom-3 rounded-b-[1px] md:rounded-b-[39px] lg:rounded-b-[39px] overflow-hidden z-50">
              <SearchForm />
            </div>
          </div>
        </div>
      </ChatProvider>
    </ClerkProvider>
  );
}
