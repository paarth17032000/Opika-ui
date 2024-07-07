import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Layout({ children }: { children: JSX.Element }) {
  return <>{children};</>;
}
