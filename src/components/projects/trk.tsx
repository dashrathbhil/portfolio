import { WorkflowFeature } from "./workflow-feature";
import { DashboardShowcase } from "./dashboard-showcase";

export function ProjectTrk() {
  return (
    <>
      <div className="mb-16 sm:mb-24 border-b border-border-secondary/40 pb-12">
        <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-primary tracking-tight mb-6 leading-tight">
          TRK Finance Software
        </h3>
        <p className="text-[15px] sm:text-[17px] text-text-secondary max-w-3xl leading-[1.7]">
          Financial application handling customer onboarding, loan processing, investor fund allocations, EMI scheduling, and repayment tracking.
        </p>
      </div>

      <DashboardShowcase>
        <img
          src="/images/projects/trk-dashboard.webp"
          alt="TRK Dashboard"
          className="w-full h-full object-cover object-top"
        />
      </DashboardShowcase>

      <div className="space-y-16 sm:space-y-24 lg:space-y-28">
        <WorkflowFeature
          title="Customer Onboarding"
          description="Broker-submitted applications go through a strict vetting process that verifies customer identities, validates supporting documents, and completes mandatory KYC checks before loan approval."
          focusPoints={[
            "Broker lead submissions",
            "Customer verification",
            "KYC checks",
            "Document review",
            "Profile creation",
          ]}
          imageLabel="Customer Onboarding"
          screenshots={["/images/projects/trk-onboarding-dashboard.webp"]}
          reversed
        />
        <WorkflowFeature
          title="Loan Processing"
          description="Approved applications trigger a funding sequence where lending terms, interest calculations, repayment schedules, and customer agreements are drafted before funds are issued."
          focusPoints={[
            "Loan configuration",
            "Interest calculations",
            "Repayment schedules",
            "Agreement generation",
            "Loan approvals",
          ]}
          imageLabel="Loan Processing"
          screenshots={[
            "/images/projects/trk-loan-app-dashboard.webp",
            "/images/projects/trk-document-review-dashboard.webp",
            "/images/projects/trk-loan-calculator-dashboard.webp"
          ]}
          screenshotMap={[0, 1, 1, 1, 2]}
        />
        <WorkflowFeature
          title="EMI Tracking"
          description="Customer repayments are scheduled and tracked throughout the life of the loan. This tracks installment activity, monitors outstanding balances, and highlights late payments to maintain healthy repayment cycles."
          focusPoints={[
            "EMI scheduling",
            "Repayment tracking",
            "Outstanding balances",
            "Payment records",
            "Account monitoring",
          ]}
          imageLabel="EMI Tracking"
          screenshots={["/images/projects/trk-emi-tracking-dashboard.webp"]}
          reversed
        />
        <WorkflowFeature
          title="Investor Allocation & Returns"
          description="Investor funds are allocated across approved loans, allowing finance teams to track investment exposure, calculate returns, and manage distributions linked to active lending portfolios."
          focusPoints={[
            "Fund allocation",
            "Investor portfolios",
            "Return calculations",
            "Distribution tracking",
            "Investment reporting",
          ]}
          imageLabel="Investor Returns"
          screenshots={["/images/projects/trk-investor-allocation-dashboard.webp"]}
        />
      </div>
    </>
  );
}
