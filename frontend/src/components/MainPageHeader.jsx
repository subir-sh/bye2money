import { ChevronLeft, ChevronRight, FileText, Calendar, BarChart3 } from "lucide-react";

export default function Header() {
  return (
    <header>
      <div className="relative">
        <div className="w-[846px] flex justify-between absolute top-[40px] left-[297px]">
          <div className="w-[132px] gap-[4px] flex justify-start items-center">
            <h1 className="font-serif font-normal text-[24px] leading-[32px]">
                Wise Wallet
            </h1>
          </div>

          <div className="w-[240px] flex flex-row justify-center items-center gap-[24px]">
            <button className="w-[32px] h-[32px]">
              <ChevronLeft size={24} />
            </button>
            <div className="flex flex-col items-center gap-[4px]">
              <p className="font-sans font-light text-[14px]">2025</p>
              <p className="inline-block leading-none font-sans font-semibold text-[48px]">10</p>
              <p className="font-sans font-light text-[14px]">October</p>
            </div>
            <button className="w-[32px] h-[32px]">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="w-[132px] flex flex-row justify-end items-center gap-[12px]">
            <FileText size={24} />
            <Calendar size={24} />
            <BarChart3 size={24} />
          </div>

        </div>
      </div>
    </header>
  );
}