import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
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
import { PERFORMANCEDATA } from "../../global/constant";
import ProgressStatusGrid from "./dashboardSections/ProgressStatusGrid";
import { SemiCircleGauge } from "./dashboardSections/SemiCircleGauge";
import PerspectiveLeaders from "./dashboardSections/PerspectiveLeaders";
import { Separator } from "../../components/ui/separator";
import ProjectTimeline from "./dashboardSections/ProjectTimeline";

function Dashboard() {
  const statCardsData = [
    {
      label: "Overall Progress",
      value: "78.65%",
      icon: <ChartNoAxesCombined className="text-red-400" />,
    },
    {
      label: "Total Criteria",
      value: "95",
      icon: <Folder className="text-red-400" />,
    },
    {
      label: "Completed Criteria",
      value: "52",
      icon: <FolderCheck className="text-red-400" />,
    },
    {
      label: "Evidence Documents",
      value: "386",
      icon: <FileLock className="text-red-400" />,
    },
    {
      label: "Evidence (Completed)",
      value: "302",
      icon: <FileCheckCorner className="text-red-400" />,
    },
    {
      label: "Uploaded to SGA",
      value: "258",
      icon: <FileInput className="text-red-400" />,
    },
  ];

  return (
    <AppLayout>
      <div className=" space-y-6  min-h-screen">
        <ProjectTimeline />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {statCardsData.map((card, index) => (
            <StatCard
              key={index}
              label={card.label}
              value={card.value}
              icon={card.icon}
            />
          ))}
        </div>

        <ProgressStatusGrid />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <defs>
                    <linearGradient
                      id="blueWhiteGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#0078D7" />
                      <stop offset="30%" stopColor="#2563eb" />
                      <stop offset="70%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#dbeafe" />
                    </linearGradient>
                  </defs>

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
                    fill="url(#blueWhiteGradient)"
                    barSize={45} // Even wider bars
                    radius={[6, 6, 0, 0]}
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

export default Dashboard;
