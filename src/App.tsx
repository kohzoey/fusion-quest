import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ProgressProvider } from "./context/ProgressContext";
import { Landing } from "./pages/Landing";
import { ModulePage } from "./pages/ModulePage";
import { Completion } from "./pages/Completion";
import { module1, module2, module3, module4, module5 } from "./data/modules";

function App() {
  return (
    <ProgressProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="module-1" element={<ModulePage module={module1} />} />
          <Route path="module-2" element={<ModulePage module={module2} />} />
          <Route path="module-3" element={<ModulePage module={module3} />} />
          <Route path="module-4" element={<ModulePage module={module4} />} />
          <Route path="module-5" element={<ModulePage module={module5} />} />
          <Route path="complete" element={<Completion />} />
        </Route>
      </Routes>
    </ProgressProvider>
  );
}

export default App;
