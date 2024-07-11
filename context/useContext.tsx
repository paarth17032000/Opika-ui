"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Loader from "@/components/Loader/Loader";
import AddPostModal from "@/components/Modal/AddPostModal";
import { Users } from "@/components/types/types";
import { fetchUsers } from "@/api/users/_fetchUsers";
import { generateToken, messaging } from "@/components/Notifications/firebase";
import { MessagePayload, onMessage } from "firebase/messaging";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastMessage } from "@/components/Toast/toastMessage";

// Your WalletConnect Cloud project ID
export const projectId = "2840c15ceebc7ebfb00536a56d4d86ef";

// 2. Set chains
const polygonAmoy = {
  chainId: 80002,
  name: "Polygon Amoy Testnet",
  currency: "MATIC",
  explorerUrl: "https://amoy.polygonscan.com/",
  rpcUrl: "https://rpc-amoy.polygon.technology/",
};

// 3. Create a metadata object
const metadata = {
  name: "lucky-lottery",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "https://rpc-amoy.polygon.technology/", // used for the Coinbase SDK
  defaultChainId: 80002, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [polygonAmoy],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

interface GlobalContextProps {
  openAddPostModal: boolean;
  users: Users[];
  setOpenLoader: (openLoader: boolean) => void;
  setIsOpenAddPostModal: (openAddPostModal: boolean) => void;
  selected: Users | null;
  setSelected: Dispatch<SetStateAction<Users | null>>;
  handlePostAdd: () => void;
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
  const [openAddPostModal, setIsOpenAddPostModal] = useState(false);
  const [users, setUsers] = useState<Users[]>([]);
  const [selected, setSelected] = useState<Users | null>(users[0]);
  const [postVal, setPostVal] = useState<{ title: string; desc: string }>({
    title: "",
    desc: "",
  });
  useEffect(() => {
    setOpenLoader(true);
    const getUsersData = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setOpenLoader(false);
    };
    generateToken()
    onMessage(messaging, (payload: MessagePayload) => {
      console.log(payload)
      // toastMessage(payload?.data, 'success')
    })
    
    getUsersData();
  }, []);
  const handlePostAdd = () => {
    console.log(selected, postVal)
  }
  return (
    <GlobalContext.Provider
      value={{ setOpenLoader, setIsOpenAddPostModal, openAddPostModal, users, selected, setSelected, handlePostAdd }}
    >
      {openLoader && <Loader />}
      <AddPostModal
        openAddPostModal={openAddPostModal}
        setIsOpenAddPostModal={setIsOpenAddPostModal}
        setPostVal={setPostVal}
        postVal={postVal}
      />
      <ToastContainer />
      {children}
    </GlobalContext.Provider>
  );
};
