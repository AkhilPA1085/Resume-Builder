import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import CustomTab from "@/components/custom/CustomTab"

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <CustomTab/>
    </section>
  );
}
