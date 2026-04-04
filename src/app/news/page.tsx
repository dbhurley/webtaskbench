import { verticals } from "@/data/verticals";
import { VerticalPage } from "@/components/VerticalPage";

export const metadata = {
  title: "News & Media Benchmark — WebTaskBench",
  description: "The average news site could serve AI agents 41× more efficiently. See how major publishers compare on token efficiency.",
};

export default function NewsPage() {
  const vertical = verticals.find((v) => v.id === "news")!;
  return <VerticalPage vertical={vertical} />;
}
