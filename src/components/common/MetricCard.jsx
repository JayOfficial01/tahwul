import { Card, CardContent } from "@/components/ui/card";

function MetricCard({ count, label, icon: Icon }) {
  return (
    <Card className="border-none shadow-sm p-0">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="p-2  rounded-lg">
          <Icon className="w-6 h-6 text-red-500 " />
        </div>
        <div>
          <p className="text-lg font-black text-[#1e293b] leading-none">
            {count}
          </p>
          <p className="text-[13px] text-slate-400   tracking-tighter">
            {label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default MetricCard;
