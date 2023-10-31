import Navbar from "@/components/shared/Navbar";
import { UserContextProvider } from "@/contexts/UserContext";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full xs:max-w-[420px] bg-neutral-900 h-full relative flex flex-col text-white">
        <main className="h-[calc(100vh-65px)] overflow-y-auto hide-scrollbar px-[5.75%] py-[8%]">
          {children}
        </main>
        <Navbar className="h-[65px] border-t-[1px] border-neutral-800" />
      </div>
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AppWrapper>
      <UserContextProvider>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.pathname}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.5,
            }}
            variants={{
              initialState: { opacity: 0 },
              animateState: { opacity: 1 },
              // exitState: { opacity: 0 },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </UserContextProvider>
    </AppWrapper>
  );
}
