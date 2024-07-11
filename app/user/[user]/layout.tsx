import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Layout({ children }: { children: JSX.Element }) {
  return <>{children};</>;
}
