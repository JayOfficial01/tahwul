import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { TooltipProvider } from "@/components/ui/tooltip";
import DigitalTansformation from "./pages/DigitalTransformation/DigitalTransformation";
import Page404 from "./pages/Page404";

function App() {
  return (
    <TooltipProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/digital-transformation"
            element={<DigitalTansformation />}
          />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Router>
    </TooltipProvider>
  );
}

export default App;
