import { verticals } from "@/data/verticals";
import { VerticalPage } from "@/components/VerticalPage";

export const metadata = {
  title: "SaaS & Cloud Benchmark — WebTaskBench",
  description: "Cloud documentation serves AI agents up to 118× more waste than needed. See how SaaS platforms compare on token efficiency.",
};

export default function SaaSPage() {
  const vertical = verticals.find((v) => v.id === "saas")!;
  return <VerticalPage vertical={vertical} />;
}
