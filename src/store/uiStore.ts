import { create } from "zustand";

interface UIStore {
  selectedNodeId: string | null;
  selectedAppId: string;
  activeTab: "config" | "runtime";

  isMobilePanelOpen: boolean;

  setSelectedNodeId: (
    id: string | null
  ) => void;

  setSelectedAppId: (
    id: string
  ) => void;

  setActiveTab: (
    tab: "config" | "runtime"
  ) => void;

  setMobilePanelOpen: (
    open: boolean
  ) => void;
}

export const useUIStore =
  create<UIStore>((set) => ({
    selectedNodeId: null,

    selectedAppId: "app1",

    activeTab: "config",

    isMobilePanelOpen: false,

    setSelectedNodeId: (id) =>
      set({
        selectedNodeId: id,
      }),

    setSelectedAppId: (id) =>
      set({
        selectedAppId: id,
      }),

    setActiveTab: (tab) =>
      set({
        activeTab: tab,
      }),

    setMobilePanelOpen: (
      open
    ) =>
      set({
        isMobilePanelOpen: open,
      }),
  }));