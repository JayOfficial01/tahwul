import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PROJECT_TIMELINE } from "../../../global/constant";

function ProjectTimeline() {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-bold">Project Timeline</CardTitle>
        <Select>
          <SelectTrigger className="w-25 cursor-pointer">
            <SelectValue placeholder="2024" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem className="cursor-pointer" value="2024">
                2024
              </SelectItem>
              <SelectItem className="cursor-pointer" value="2025">
                2025
              </SelectItem>
              <SelectItem className="cursor-pointer" value="2026">
                2026
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="relative flex justify-between items-center py-4">
          <div className="absolute top-1/2 left-0 w-full h-3 rounded-full bg-gray-100 -translate-y-1/2" />
          <div className="absolute top-1/2 rounded-full left-0 w-1/3 h-3 bg-green-600 -translate-y-1/2" />
          {PROJECT_TIMELINE.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-2 h-2 mt-10 rounded-full ${i <= 1 ? "bg-white" : "bg-red-600"} `}
              />
              <article className="text-center">
                <span className="text-[10px]  font-medium text-gray-500">
                  {step.date}
                </span>
                <h3 className="text-xs">{step.event}</h3>
              </article>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectTimeline;
