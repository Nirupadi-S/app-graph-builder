import AppSelector from "./AppSelector";

import { useUIStore } from "../../store/uiStore";
import { useGraphStore } from "../../store/graphStore";

type Props = {
  mobile?: boolean;
};

export default function RightPanel({
  mobile = false,
}: Props) {
  const selectedNodeId = useUIStore(
    (state) => state.selectedNodeId
  );

  const activeTab = useUIStore(
    (state) => state.activeTab
  );

  const setActiveTab = useUIStore(
    (state) => state.setActiveTab
  );

  const nodes = useGraphStore(
    (state) => state.nodes
  );

  const updateNodeName = useGraphStore(
    (state) => state.updateNodeName
  );

  const updateNodeLoad = useGraphStore(
    (state) => state.updateNodeLoad
  );

  const selectedNode = nodes.find(
    (node) => node.id === selectedNodeId
  );

  const wrapperClass = mobile
    ? "w-full bg-white"
    : "hidden md:block w-80 border-l bg-white";

  if (!selectedNode) {
    return (
      <aside className={wrapperClass}>
        <AppSelector />

        <div className="p-4">
          <h2 className="font-semibold text-lg">
            Node Inspector
          </h2>

          <p className="mt-4 text-gray-500">
            Select a node from the graph.
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className={wrapperClass}>
      <AppSelector />

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          Node Inspector
        </h2>

        <div className="flex gap-2 mt-4">
          <button
            onClick={() =>
              setActiveTab("config")
            }
            className={`px-3 py-1 border rounded ${
              activeTab === "config"
                ? "bg-black text-white"
                : ""
            }`}
          >
            Config
          </button>

          <button
            onClick={() =>
              setActiveTab("runtime")
            }
            className={`px-3 py-1 border rounded ${
              activeTab === "runtime"
                ? "bg-black text-white"
                : ""
            }`}
          >
            Runtime
          </button>
        </div>

        {activeTab === "config" && (
          <div className="mt-4">
            <label className="block text-sm">
              Node Name
            </label>

            <input
              className="border p-2 rounded w-full mt-1"
              value={
                selectedNode.data.label as string
              }
              onChange={(e) =>
                updateNodeName(
                  selectedNode.id,
                  e.target.value
                )
              }
            />

            <div className="mt-4">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                {
                  selectedNode.data
                    .status as string
                }
              </span>
            </div>

            <div className="mt-4">
              <label>Load</label>

              <input
                type="range"
                min="0"
                max="100"
                className="w-full"
                value={
                  selectedNode.data.load as number
                }
                onChange={(e) =>
                  updateNodeLoad(
                    selectedNode.id,
                    Number(
                      e.target.value
                    )
                  )
                }
              />

              <input
                type="number"
                min="0"
                max="100"
                className="border p-2 rounded w-full mt-2"
                value={
                  selectedNode.data.load as number
                }
                onChange={(e) =>
                  updateNodeLoad(
                    selectedNode.id,
                    Number(
                      e.target.value
                    )
                  )
                }
              />
            </div>
          </div>
        )}

        {activeTab === "runtime" && (
          <div className="mt-4 space-y-3">
            <div>CPU Usage: 45%</div>
            <div>Memory: 512 MB</div>
            <div>Requests/sec: 120</div>
          </div>
        )}
      </div>
    </aside>
  );
}