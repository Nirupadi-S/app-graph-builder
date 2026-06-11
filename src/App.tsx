import GraphCanvas from "./components/canvas/GraphCanvas";
import TopBar from "./components/layout/TopBar";
import LeftRail from "./components/layout/LeftRail";
import RightPanel from "./components/layout/RightPanel";
import MobileDrawer from "./components/layout/MobileDrawer";

import useGraphLoader from "./hooks/useGraphLoader";

export default function App() {
  const {
    isLoading,
    error,
  } = useGraphLoader();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading Graph...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-600 text-xl">
        Failed To Load Graph
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <LeftRail />

        <div className="flex-1">
          <GraphCanvas />
        </div>

        <div className="hidden md:block">
          <RightPanel />
        </div>
      </div>

      <MobileDrawer />
    </div>
  );
}