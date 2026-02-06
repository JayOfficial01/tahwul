import { useNavigate } from "react-router-dom";
import { FileSearch, Home, ArrowLeft } from "lucide-react";
import { SiteButton } from "../components/common";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="relative bg-white p-8 rounded-full shadow-sm border border-slate-100">
            <FileSearch size={80} className="text-blue-500 stroke-[1.5]" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-7xl font-black text-[#1e293b] tracking-tighter">
            404
          </h1>
          <h2 className="text-xl font-bold text-[#1e293b]">Page Not Found</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-70 mx-auto">
            The evidence you are looking for might have been moved, deleted, or
            never existed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <SiteButton
            variant="outline"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto border-slate-200 text-slate-600 font-bold text-xs uppercase px-6 h-11"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </SiteButton>

          <SiteButton
            onClick={() => navigate("/")}
            className="w-full sm:w-auto bg-[#1e293b] hover:bg-[#2d3d52] text-white font-bold text-xs uppercase px-8 h-11 shadow-lg shadow-blue-900/10"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Dashboard
          </SiteButton>
        </div>

        <div className="pt-12">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
            Tahwul Management System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page404;
