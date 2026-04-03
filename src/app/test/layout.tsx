import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Your Site — WebTaskBench",
  description:
    "Look up any URL in the WebTaskBench benchmark dataset or get a token efficiency projection. Submit sites for the next weekly benchmark run.",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
