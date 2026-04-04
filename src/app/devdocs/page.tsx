import { verticals } from "@/data/verticals";
import { VerticalPage } from "@/components/VerticalPage";

export const metadata = {
  title: "Developer Documentation Benchmark — WebTaskBench",
  description: "Developer docs are read by AI coding agents millions of times daily — mostly as raw HTML. See how doc sites compare.",
};

export default function DevDocsPage() {
  const vertical = verticals.find((v) => v.id === "devdocs")!;
  return <VerticalPage vertical={vertical} />;
}
