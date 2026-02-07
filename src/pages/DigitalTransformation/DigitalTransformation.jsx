import AppLayout from "../../components/layouts/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Send,
  Files,
  FileSearchCorner,
  FileInput,
  FileCheckCorner,
} from "lucide-react";
import {
  EVEDENCE_TABLE_DATA,
  RECENT_ACTIVITIES,
  INFO_DATA,
} from "../../global/constant";
import { MetricCard } from "../../components/common";

const Evidence = () => {
  return (
    <div className="space-y-6">
      <Card className="border-none shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-225">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                <th className="p-4">Document Number</th>
                <th className="p-4">Document Name</th>
                <th className="p-4">Document Lead</th>
                <th className="p-4">Document Preparer</th>
                <th className="p-4">Date</th>
                <th className="p-4">Due Date</th>
                <th className="p-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="text-[11px] font-medium text-[#1e293b]">
              {EVEDENCE_TABLE_DATA.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-4 font-bold">{row.id}</td>
                  <td className="p-4 text-slate-600">{row.name}</td>
                  <td className="p-4">{row.lead}</td>
                  <td className="p-4">{row.preparer}</td>
                  <td className="p-4 text-slate-400">{row.date}</td>
                  <td className="p-4 text-slate-400">{row.due}</td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter ${
                        row.status === "Approved"
                          ? "bg-emerald-50 text-emerald-500"
                          : "bg-amber-50 text-amber-500"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-none shadow-sm p-6">
          <h3 className="text-xs font-bold text-[#1e293b] mb-4 uppercase tracking-tighter">
            Comments
          </h3>
          <div className="space-y-4">
            {["Sara Ibrahim", "Mona Hamed"].map((name, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border  border-slate-100 bg-white relative`}
              >
                <span className="absolute top-4 right-4 text-[10px] text-slate-400 font-bold">
                  2025-08-05
                </span>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400">
                    {name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <span className="text-xs font-bold text-[#1e293b]">
                    {name}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  Ensure The Plan Includes A Clear Governance Model.
                </p>
              </div>
            ))}

            <div className="mt-6 pt-4 space-y-4">
              <textarea
                placeholder="Type your comment here..."
                className="w-full min-h-25 bg-slate-50 border border-slate-100 rounded-xl p-4 text-[11px] focus:outline-none focus:ring-1 focus:ring-slate-200 transition-all"
              />
              <button className="bg-[#1e293b] text-white px-6 py-2.5 rounded-lg text-[11px] font-bold flex items-center gap-2 hover:bg-[#2d3d52] transition-colors">
                <Send size={14} />
                Post Comment
              </button>
            </div>
          </div>
        </Card>

        <Card className="border-none shadow-sm p-6">
          <h3 className="text-xs font-bold text-[#1e293b] mb-4 uppercase tracking-tighter">
            Recent Activities
          </h3>
          <div className="space-y-6">
            {RECENT_ACTIVITIES.map((activity, idx) => (
              <div key={activity.id} className="flex gap-3 relative">
                {idx !== RECENT_ACTIVITIES.length - 1 && (
                  <div className="absolute left-[3.5px] top-4 -bottom-6 w-px bg-slate-100" />
                )}
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1 shrink-0 z-10" />
                <div className="space-y-1 flex items-start justify-between w-full">
                  <p className="text-[11px] w-45 font-semibold text-[#1e293b] leading-tight">
                    {activity.text}
                  </p>
                  <p className="text-[10px]  text-slate-400 font-medium">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <>
      <article className="bg-white p-3 border rounded-lg shadow-sm">
        {INFO_DATA.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-3 mb-3">
            <div className="w-full md:w-36 shrink-0  bg-slate-50  rounded-lg p-3 flex items-start justify-center">
              <span className="text-[11px] font-bold text-slate-500  text-center uppercase tracking-tighter">
                {item.label}
              </span>
            </div>
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-3">
              <p className="text-[12px] leading-relaxed text-slate-600 font-medium">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </article>

      <article className="bg-white p-3 border rounded-lg shadow-sm">
        <h3 className="text-xs font-bold text-[#1e293b] mb-4">Leaders</h3>
        <div className="flex flex-wrap gap-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-neutral-100 p-3 rounded-xl border border-slate-100 shadow-sm min-w-55"
            >
              <img
                src={`https://nomorecopyright.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fddtk9h9bc%2Fimage%2Fupload%2Fv1736697726%2Frbszlozjdos4vhtzlkjx.jpg&w=1200&q=75`}
                className="w-9 h-9 rounded-full"
                alt="leader"
              />
              <div>
                <p className="text-xs font-bold text-[#1e293b]">Ahmed Al-Ali</p>
                <p className="text-[9px] text-slate-400 font-bold uppercase">
                  Strategy Perspective
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
};

function DigitalTransformation() {
  const EVIDENCE_METRICS = [
    {
      id: 1,
      count: "4",
      label: "Total Evidence",
      icon: Files,
    },
    {
      id: 2,
      count: "3",
      label: "Under Review Evidence",
      icon: FileSearchCorner,
    },
    {
      id: 3,
      count: "2",
      label: "In Progress Evidence",
      icon: FileInput,
    },
    {
      id: 4,
      count: "1",
      label: "Completed Evidence",
      icon: FileCheckCorner,
    },
  ];

  return (
    <AppLayout>
      <div className="min-h-screen space-y-6">
        <div className="flex items-center gap-2 text-[#1e293b] mb-4 cursor-pointer hover:opacity-70 transition-opacity">
          <ArrowLeft size={14} strokeWidth={3} />
          <span className="text-[11px] font-bold uppercase tracking-tight">
            Digital Transformation Strategic Planning
          </span>
        </div>

        <Card className="border-none shadow-sm bg-white overflow-hidden">
          <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-3 flex-1">
              <span className="text-[9px] bg-slate-100 text-slate-400 px-3 py-1 rounded-full font-bold border border-slate-200 uppercase tracking-tighter">
                Strategy & Planning
              </span>
              <h1 className="text-xl font-bold text-[#1e293b] mt-3">
                Digital Transformation Strategic Planning
              </h1>
              <p className="text-[11px] text-slate-400 leading-tight max-w-2xl">
                Develop Comprehensive Strategic Plans For Digital Transformation
                Aligned With Organizational Goals.
              </p>
            </div>

            <div className="relative w-20 h-20">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-slate-100"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-emerald-500"
                  strokeWidth="3"
                  strokeDasharray="100, 100"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-black text-[#1e293b]">100%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EVIDENCE_METRICS.map((metric) => (
            <MetricCard
              key={metric.id}
              count={metric.count}
              label={metric.label}
              icon={metric.icon}
            />
          ))}
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-slate-200/50 p-1 h-auto rounded-lg mb-6">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-white cursor-pointer data-[state=active]:shadow-sm px-8 py-2 text-xs font-bold"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="evidence"
              className="data-[state=active]:bg-white cursor-pointer data-[state=active]:shadow-sm px-8 py-2 text-xs font-bold"
            >
              Evidence
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-3 ">
            <Overview />
          </TabsContent>
          <TabsContent value="evidence" className="space-y-3 ">
            <Evidence />
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}

export default DigitalTransformation;
