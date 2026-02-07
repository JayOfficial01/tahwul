import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function SemiCircleGauge({ value, subtext, color = "#ef4444" }) {
  const data = [{ value: value }, { value: 100 - value }];

  return (
    <div className="h-64 w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="80%"
            startAngle={180}
            endAngle={0}
            innerRadius="85%"
            outerRadius="100%"
            paddingAngle={0}
            dataKey="value"
            stroke="none"
            cornerRadius={30}
          >
            <Cell fill={color} />
            <Cell fill="#f1f5f9" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12">
        <span className="text-5xl font-bold text-[#1e293b]">{value}%</span>
        <span className="text-xs font-semibold text-slate-400 mt-2 uppercase tracking-tight">
          {subtext}
        </span>
      </div>
    </div>
  );
}
