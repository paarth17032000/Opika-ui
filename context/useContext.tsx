"use client"
import Loader from "@/components/Loader/Loader";
import { createContext, FC, ReactNode, useContext, useState } from "react";

interface GlobalContextProps {
  setOpenLoader: (openLoader: boolean) => void;
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a Web3ModalProvider");
  }
  return context;
};

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [openLoader, setOpenLoader] = useState<boolean>(false);
  return (
    <GlobalContext.Provider value={{ setOpenLoader }}>
      {openLoader && <Loader />}
      {children}
    </GlobalContext.Provider>
  );
};
