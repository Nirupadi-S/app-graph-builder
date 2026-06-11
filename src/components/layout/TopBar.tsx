import { useUIStore } from "../../store/uiStore";

export default function TopBar() {
  const setMobilePanelOpen = useUIStore(
    (s) => s.setMobilePanelOpen
  );

  return (
    <header className="border-b bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4">
        <h1 className="font-bold text-2xl">
          App Graph Builder
        </h1>

        <div className="flex flex-wrap gap-2">
          <button className="border px-4 py-2 rounded">
            Fit View
          </button>

          <button
            className="border px-4 py-2 rounded md:hidden"
            onClick={() =>
              setMobilePanelOpen(true)
            }
          >
            Inspector
          </button>

          <button className="border px-4 py-2 rounded">
            Settings
          </button>
        </div>
      </div>
    </header>
  );
}