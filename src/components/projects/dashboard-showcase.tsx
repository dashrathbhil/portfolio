import React from 'react';

export function DashboardShowcase({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full mb-16 sm:mb-24 mt-8 rounded-2xl border border-border-secondary/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-[#0f172a] overflow-hidden flex flex-col relative group">

      
      {/* Mockup Container */}
      <div className="relative w-full overflow-y-auto overflow-x-hidden max-h-[800px] custom-scrollbar bg-[#020617] rounded-b-2xl">
         <div className="w-full relative [&>img]:!h-auto [&>img]:!w-full [&>img]:!object-top">
             {children}
         </div>
      </div>
    </div>
  );
}
