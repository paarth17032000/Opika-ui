"use client";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider } from "ethers";
import { ethers } from "ethers";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const { address, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [balance, setBalance] = useState<string>('0');
  const getBalance = async (address: `0x${string}`) => {
    // const provider = new ethers.Web3Provider(window.ethereum);
    console.log(walletProvider);
    if (!walletProvider) return;
    const browserProvider = new BrowserProvider(walletProvider);
    const balance = await browserProvider.getBalance(address);
    const balanceInEth = ethers.formatEther(balance);
    const numberValue = parseFloat(balanceInEth).toFixed(3)
    setBalance(numberValue);
    console.log(numberValue, 'eth balance')
  };
  useEffect(() => {
    if (address != undefined && address.length > 0) {
      getBalance(address);
    }
  }, [address]);
  return (
    <Link
      href={"/"}
      className="md:px-24 px-10 font-bold text-lg h-[84px] w-full flex items-center justify-between"
    >
      <div>Opika</div>
      <div className="flex items-center gap-4">
        {isConnected && <div className="bg-white/10 text-white px-3 py-1 text-md rounded-[16px]">{balance} eth</div>}
        <w3m-button />
      </div>
    </Link>
  );
}
