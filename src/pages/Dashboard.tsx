import TopBar from "../components/layout/TopBar";
import LeftRail from "../components/layout/LeftRail";
import RightPanel from "../components/layout/RightPanel";
import GraphCanvas from "../components/canvas/GraphCanvas";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />

      <div className="flex flex-1">
        <LeftRail />

        <main className="flex-1">
          <GraphCanvas />
        </main>

        <RightPanel />
      </div>
    </div>
  );
}