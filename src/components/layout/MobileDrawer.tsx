import RightPanel from "./RightPanel";
import { useUIStore } from "../../store/uiStore";

export default function MobileDrawer() {
  const isOpen = useUIStore(
    (s) => s.isMobilePanelOpen
  );

  const setOpen = useUIStore(
    (s) => s.setMobilePanelOpen
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 999,
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "85%",
          maxWidth: "400px",
          height: "100vh",
          background: "#fff",
          zIndex: 1000,
          overflowY: "auto",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h3>Inspector</h3>

          <button
            onClick={() =>
              setOpen(false)
            }
            style={{
              border: "none",
              background: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        <div
          style={{
            padding: "16px",
          }}
        >
          <RightPanel mobile />
        </div>
      </div>
    </>
  );
}