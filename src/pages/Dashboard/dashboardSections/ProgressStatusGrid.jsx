import { Card } from "@/components/ui/card";
import { PROGRESS_STATUS_DATA, STATUS_COLORS } from "../../../global/constant";

function ProgressStatusGrid() {
  return (
    <Card className="p-6 max-lg:overflow-x-auto border-none shadow-sm bg-white">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-800">Progress Status</h3>
        <div className="flex gap-4 text-[10px] text-slate-500">
          {Object.entries(STATUS_COLORS).map(([label, color]) => (
            <div key={label} className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${color}`} />
              <span className="capitalize">
                {label.replace(/([A-Z])/g, " $1")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-10 gap-2 ">
        {PROGRESS_STATUS_DATA.map((cat, idx) => (
          <div key={idx} className="space-y-2">
            <div className="bg-[#1e293b] text-white p-3 rounded-lg text-center h-20 flex flex-col justify-center">
              <p className="text-[10px] font-medium leading-tight mb-1">
                {cat.title}
              </p>
              <p className="text-xs font-bold">{cat.percentage}</p>
            </div>

            {cat.subItems.map((sub, sIdx) => (
              <div
                key={sIdx}
                className="bg-slate-50 p-2 rounded-md text-center border border-slate-100"
              >
                <p className="text-[9px] text-slate-500 mb-2 min-h-6">
                  {sub.name}
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  {sub.dots.map((status, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white font-bold ${STATUS_COLORS[status]}`}
                    >
                      {dIdx + 1}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ProgressStatusGrid;
