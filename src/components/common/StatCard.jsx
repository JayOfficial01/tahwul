import { Card, CardContent } from "@/components/ui/card";

function StatCard({ label, value, icon }) {
  return (
    <Card className="border-none shadow-sm py-2">
      <CardContent className="p-2 py-0 px-3 flex flex-col justify-center ">
        <article className="flex items-center justify-between w-full">
          <p className="text-2xl font-bold text-blue-950">{value}</p>
          <span className="p-2  rounded-full mb-2">{icon}</span>
        </article>
        <p className="text-[10px] text-gray-500 uppercase tracking-wider">
          {label}
        </p>
      </CardContent>
    </Card>
  );
}

export default StatCard;
