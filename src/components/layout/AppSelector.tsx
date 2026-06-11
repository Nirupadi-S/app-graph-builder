import { useQuery } from "@tanstack/react-query";

import { getApps } from "../../api/mockApi";

import { useUIStore } from "../../store/uiStore";

export default function AppSelector() {
  const selectedAppId = useUIStore(
    (s) => s.selectedAppId
  );

  const setSelectedAppId =
    useUIStore(
      (s) =>
        s.setSelectedAppId
    );

  const {
    data,
    isLoading,
  } = useQuery({
    queryKey: ["apps"],
    queryFn: getApps,
  });

  if (isLoading) {
    return (
      <div className="p-4">
        Loading Apps...
      </div>
    );
  }

  return (
    <div className="p-4 border-b">
      <h3 className="font-semibold mb-2">
        Apps
      </h3>

      {data?.map((app) => (
        <button
          key={app.id}
          onClick={() =>
            setSelectedAppId(
              app.id
            )
          }
          className={`block w-full text-left p-2 rounded mb-2 ${
            selectedAppId ===
            app.id
              ? "bg-black text-white"
              : "border"
          }`}
        >
          {app.name}
        </button>
      ))}
    </div>
  );
}