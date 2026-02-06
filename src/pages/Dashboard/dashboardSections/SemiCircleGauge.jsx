import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function SemiCircleGauge({ value, subtext, color = "#ef4444" }) {
  const data = [
    { value: value },
    { value: 100 - value },
    { value: 100 }, // Bottom half spacer
  ];

  return (
    <div className="h-50 w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="70%"
            startAngle={180}
            endAngle={0}
            innerRadius="70%"
            outerRadius="80%"
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            <Cell fill={color} />
            <Cell fill="#f1f5f9" />
            <Cell fill="transparent" /> {/* Hides the bottom half */}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
        <span className="text-4xl font-bold text-slate-800">{value}%</span>
        <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
          {subtext}
        </span>
      </div>
    </div>
  );
}
