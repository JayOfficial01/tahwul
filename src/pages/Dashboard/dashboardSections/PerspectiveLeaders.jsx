import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LEADERS } from "../../../global/constant";

function PerspectiveLeaders() {
  return (
    <Card className="border-none shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-[14px] font-bold text-[#1e293b]">
          Top Performing Perspective Leaders
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-0">
        {LEADERS.map((leader, index) => (
          <div
            key={index}
            className={`flex items-center justify-between py-4 ${
              index !== LEADERS.length - 1 ? "border-b border-slate-100" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* Profile Image with Border logic */}
                <div
                  className={`p-0.5 rounded-full ${leader.isActive ? "bg-blue-500" : "bg-transparent"}`}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#1e293b]">
                  {leader.name}
                </span>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-tight">
                  {leader.perspective}
                </span>
              </div>
            </div>

            {/* Percentage Score */}
            <div className="text-sm font-black text-[#1e293b]">
              {leader.score}%
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default PerspectiveLeaders;
