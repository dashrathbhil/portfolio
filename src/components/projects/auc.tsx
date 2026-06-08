import { WorkflowFeature } from "./workflow-feature";
import { DashboardShowcase } from "./dashboard-showcase";

export function ProjectAuc() {
  return (
    <>
      <div className="mb-16 sm:mb-24 border-b border-border-secondary/40 pb-12">
        <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-primary tracking-tight mb-6 leading-tight">
          AUC Debt Recovery Platform
        </h3>
        <p className="text-[15px] sm:text-[17px] text-text-secondary max-w-3xl leading-[1.7]">
          Debt collection software handling automated case allocation, postcode-based agent assignments, field visit reporting, evidence collection, and recovery tracking.
        </p>
      </div>

      <DashboardShowcase>
        <img
          src="/images/projects/auc-dashboard.webp"
          alt="AUC Dashboard"
          className="w-full h-full object-cover object-top"
        />
      </DashboardShowcase>

      <div className="space-y-16 sm:space-y-24 lg:space-y-28">
        <WorkflowFeature
          title="Customer Assignment Engine"
          description="Debt collection cases are automatically assigned to field agents based on postcode coverage and availability. The assignment process helps distribute workloads efficiently while ensuring cases are routed to the most appropriate agent for each location."
          focusPoints={[
            "Automatic case assignment",
            "Postcode-based routing",
            "Agent workload distribution",
            "Coverage area routing",
            "Assignment tracking",
          ]}
          imageLabel="Assignment Engine"
          screenshots={[
            "/images/projects/auc-agent-coverage-dashboard.webp",
            "/images/projects/auc-customer-upload-dashboard.webp"
          ]}
          screenshotMap={[0, 1, 1, 0, 1]}
        />
        <WorkflowFeature
          title="Site Visit Execution"
          description="Assigned field agents use a dedicated mobile interface to log collection visits, record recovery outcomes, capture supporting evidence, and update case progress directly from the field. This information is synchronized back to the office team in real-time."
          focusPoints={[
            "Field visit logging",
            "Recovery outcome recording",
            "Photo and evidence capture",
            "Payment collection tracking",
            "Case status updates",
          ]}
          imageLabel="Site Visit Processing"
          screenshots={[
            "/images/projects/auc-customer-details-dashboard.webp",
            "/images/projects/auc-site-visit-dashboard.webp",
            "/images/projects/auc-payment-collection-dashboard.webp"
          ]}
          screenshotMap={[0, 1, 1, 2, 2]}
          reversed
        />

        <WorkflowFeature
          title="Commission & Invoice Processing"
          description="Successful recovery cases drive the commission calculations used by the finance team. The underlying logic tracks completed collections, applies structured fee tiers, generates invoices, and maintains payment ledgers for recovery activities. By centralizing these calculations, it reduces manual errors while providing visibility into agent earnings, agency payouts, and overall recovery performance."
          focusPoints={[
            "Commission calculations",
            "Invoice generation",
            "Agent earnings tracking",
            "Recovery payment records",
            "Payout reporting",
          ]}
          imageLabel="Invoice Processing"
          screenshots={["/images/projects/commission-reports-dashboard.webp"]}
        />
      </div>
    </>
  );
}
