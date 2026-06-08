import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectAmsl } from "./amsl";
import { ProjectAuc } from "./auc";
import { ProjectTrk } from "./trk";
import { ProjectAccount } from "./account";

export function ProjectsSection() {
  return (
    <Section id="projects" spacing="lg" border size="wide">
      <SectionHeader
        title="PROJECTS"
        description="
Business applications, financial tools, and industry-specific software built for real-world use."
      />

      <div className="flex flex-col space-y-16 sm:space-y-20 lg:space-y-24 mt-6 sm:mt-10">
        <div id="project-amsl">
          <ProjectAmsl />
        </div>

        <div id="project-auc">
          <ProjectAuc />
        </div>

        <div id="project-trk">
          <ProjectTrk />
        </div>

        <div id="project-account">
          <ProjectAccount />
        </div>
      </div>
    </Section>
  );
}
