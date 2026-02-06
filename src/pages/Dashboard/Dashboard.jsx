import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ChartNoAxesCombined,
  Folder,
  FolderCheck,
  FileLock,
  FileCheckCorner,
  FileInput,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AppLayout from "../../components/layouts/AppLayout";
import { ActivityItem, StatCard } from "../../components/common";
import { PERFORMANCEDATA, PROJECT_TIMELINE } from "../../global/constant";
import ProgressStatusGrid from "./dashboardSections/ProgressStatusGrid";
import { SemiCircleGauge } from "./dashboardSections/SemiCircleGauge";
import PerspectiveLeaders from "./dashboardSections/PerspectiveLeaders";
import { Separator } from "../../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Dashboard() {
  return (
    <AppLayout>
      <div className=" space-y-6  min-h-screen">
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold">
              Project Timeline
            </CardTitle>
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
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center"
                >
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <StatCard
            label="Overall Progress"
            value="78.65%"
            icon={<ChartNoAxesCombined className="text-red-400" />}
          />
          <StatCard
            label="Total Criteria"
            value="95"
            icon={<Folder className="text-red-400" />}
          />
          <StatCard
            label="Completed Criteria"
            value="52"
            icon={<FolderCheck className="text-red-400" />}
          />
          <StatCard
            label="Evidence Documents"
            value="386"
            icon={<FileLock className="text-red-400" />}
          />
          <StatCard
            label="Evidence (Completed)"
            value="302"
            icon={<FileCheckCorner className="text-red-400" />}
          />
          <StatCard
            label="Uploaded to SGA"
            value="258"
            icon={<FileInput className="text-red-400" />}
          />
        </div>

        <ProgressStatusGrid />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Overall Compliance Gauge */}
          <Card className="p-6 border-none shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 border-b pb-2 mb-4">
              Overall Compliance Score
            </h3>
            <SemiCircleGauge
              value={65}
              subtext="Basic Standards 2025"
              color="#ef4444"
            />
          </Card>

          <PerspectiveLeaders />

          {/* Audit Readiness Gauge */}

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-bold">
                Recent Activities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ActivityItem
                  title='Document "Strategy_Review.pdf" was uploaded'
                  user="Ahmed Khaled"
                  time="5 mins ago"
                />
                <ActivityItem
                  title='Task "Review Compliance Files" was assigned'
                  user="Mona Hamed"
                  time="20 mins ago"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-bold">
                12-Month Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="h-75">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PERFORMANCEDATA}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f0f0f0"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    fontSize={12}
                  />
                  <YAxis axisLine={false} tickLine={false} fontSize={12} />
                  <Tooltip cursor={{ fill: "#f8fafc" }} />
                  <Bar
                    dataKey="value"
                    fill="#3b82f6"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="p-6 border-none shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 border-b pb-2 mb-4">
              Audit Readiness
            </h3>
            <SemiCircleGauge
              value={80}
              subtext="Readiness Level"
              color="#22c55e"
            />
            <Separator />

            <div className="flex justify-between text-center px-4">
              <div>
                <p className="text-xl font-bold">12</p>
                <p className="text-[10px] text-slate-400">Overdue Stats</p>
              </div>
              <div>
                <p className="text-xl font-bold">5</p>
                <p className="text-[10px] text-slate-400">Missing Evidence</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
