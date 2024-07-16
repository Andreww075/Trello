import { Header } from "@/components/header";
import { PlansComp } from "@/components/plans-comp";
import { Productivity } from "@/components/productivity";
import { Workflow } from "@/components/workflow";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="py-16 bg-[#e6fafc]">
        <Productivity />
        <Workflow />
        <PlansComp />
      </div>
    </main>
  );
}
