import { DashboardShowcase } from "./dashboard-showcase";
import { WorkflowFeature } from "./workflow-feature";

export function ProjectAccount() {
  return (
    <>
      <div className="mb-16 sm:mb-24 border-b border-border-secondary/40 pb-12">
        <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-text-primary tracking-tight mb-6 leading-tight">
          Accounting Management System
        </h3>
        <p className="text-[15px] sm:text-[17px] text-text-secondary max-w-3xl leading-[1.7]">
          Accounting software used to track inventory, supplier purchases, invoicing, bank reconciliations, and double-entry financial records.
        </p>
      </div>

      <DashboardShowcase>
        <img
          src="/images/projects/accounting-dashboard.webp"
          alt="Accounting Dashboard"
          className="w-full h-full object-cover object-top"
        />
      </DashboardShowcase>
      <div className="space-y-16 sm:space-y-24 lg:space-y-28">
        <WorkflowFeature
          title="Inventory & Supplier Purchasing"
          description="Inventory levels, stock movements, supplier purchases, and procurement activities are managed from a centralized workspace. Purchase orders, supplier transactions, and stock updates automatically flow into the accounting records to maintain accurate inventory valuations."
          focusPoints={[
            "Inventory management",
            "Stock movement tracking",
            "Supplier purchases",
            "Purchase order processing",
            "Inventory valuation",
          ]}
          imageLabel="Inventory & Supplier Management"
          screenshots={["/images/projects/accounting-inventory-dashboard.webp"]}
          reversed
        />

        <WorkflowFeature
          title="Customer Invoicing & Reconciliation"
          description="Customer invoices, incoming payments, bank transactions, and financial records are reconciled through a unified accounting workflow. The system maintains accurate receivable balances while automatically recording entries within the double-entry bookkeeping structure."
          focusPoints={[
            "Customer invoicing",
            "Payment reconciliation",
            "Accounts receivable tracking",
            "Bank transaction matching",
            "Double-entry bookkeeping",
          ]}
          imageLabel="Invoicing & Reconciliation"
          screenshots={["/images/projects/accounting-invoicing-dashboard.webp"]}
        />
      </div>
    </>
  );
}
