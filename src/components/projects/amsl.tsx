import { WorkflowFeature } from "./workflow-feature";
import { DashboardShowcase } from "./dashboard-showcase";

export function ProjectAmsl() {
  return (
    <>
      <div className="mb-16 sm:mb-24 border-b border-border-secondary/40 pb-12">
        <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-primary tracking-tight mb-6 leading-tight">
          AMSL Broker Portal
        </h3>
        <p className="text-[15px] sm:text-[17px] text-text-secondary max-w-3xl leading-[1.7]">
          Multi-tenant CRM used by utility brokers to coordinate suppliers, quotations, contracts, agencies, and commission structures.
        </p>
      </div>

      <DashboardShowcase>
        <img
          src="/images/projects/amsl-dashboard.webp"
          alt="AMSL Dashboard"
          className="w-full h-full object-cover object-top"
        />
      </DashboardShowcase>

      <div className="space-y-16 sm:space-y-24 lg:space-y-28">
        <WorkflowFeature
          title="Supplier Pricing Logic"
          description={`Suppliers submit pricing matrices containing electricity and gas rates used throughout the quotation process. Administrators upload these files to map varied supplier schemas into a unified database format, triggering automated validation before rates become available for live quoting.`}
          focusPoints={[
            "Supplier onboarding and configuration",
            "CSV and Excel matrix uploads",
            "Automated price validation rules",
            "Matrix mapping logic",
            "Rate publication and availability",
          ]}
          workflowStages={["Upload", "Validate", "Publish"]}
          screenshots={[
            "/images/projects/pricing-create-dashboard.webp",
            "/images/projects/pricing-upload-dashboard.webp",
            "/images/projects/pricing-mapping-dashboard.webp",
            "/images/projects/pricing-list-dashboard.webp"
          ]}
          screenshotMap={[0, 1, 2, 2, 3]}
        />

        <WorkflowFeature
          title="Quote Generation Engine"
          description={`Customer requirements are matched against active supplier pricing structures to generate contract-ready utility quotations. Agents input consumption data to immediately produce comparative matrices, complete with automated commission calculations and filtered by strict contract eligibility rules.`}
          focusPoints={[
            "Dynamic supplier matching",
            "Comparative pricing matrices",
            "Configurable commission models",
            "Supplier eligibility checks",
            "Contract PDF generation",
          ]}
          workflowStages={["Input", "Match", "Generate"]}
          screenshots={[
            "/images/projects/quote-generation-dashboard.webp",
            "/images/projects/quote-results-dashboard.webp"
          ]}
          screenshotMap={[0, 1, 0, 1, 1]}
          reversed
        />

        <WorkflowFeature
          title="Customer & Contract Lifecycle"
          description={`Once a quotation is accepted, customer records, contracts, and supporting documents are managed through a centralized process. This ensures contract generation, digital signing, status tracking, and related activities are coordinated as customers move from approval to completion.`}
          focusPoints={[
            "Lead and prospect capture",
            "Customer onboarding",
            "Quote and proposal approvals",
            "Digital contract processing",
            "Payment scheduling",
          ]}
          workflowStages={["Onboard", "Approve", "Execute"]}
          screenshots={[
            "/images/projects/crm-customer-dashboard.webp",
            "/images/projects/crm-contract-dashboard.webp"
          ]}
          screenshotMap={[0, 0, 1, 1, 1]}
        />

        <WorkflowFeature
          title="Multi-Tenant Agency Access"
          description={`Agencies operate independently within the same application while maintaining access only to their own customers, contracts, and business data. Administrators can provision new agencies, assign users, and restrict access through role-based permissions without exposing data across boundaries.`}
          focusPoints={[
            "Agency creation and setup",
            "Role-based user access",
            "Custom permission controls",
            "Agency data separation",
            "Activity and audit tracking",
          ]}

          workflowStages={["Agency", "Roles", "Access"]}
          screenshots={[
            "/images/projects/agency-mgmt-dashboard.webp",
            "/images/projects/agent-mgmt-dashboard.webp",
            "/images/projects/rbac-mgmt-dashboard.webp"
          ]}
          screenshotMap={[0, 1, 2, 0, 1]}
          reversed
        />
      </div>
    </>
  );
}
