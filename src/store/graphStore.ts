import { create } from "zustand";
import type { Node, Edge } from "@xyflow/react";

interface GraphStore {
  nodes: Node[];
  edges: Edge[];

  setGraph: (
    nodes: Node[],
    edges: Edge[]
  ) => void;

  deleteNode: (
    nodeId: string
  ) => void;

  updateNodeName: (
    nodeId: string,
    name: string
  ) => void;

  updateNodeLoad: (
    nodeId: string,
    load: number
  ) => void;
}

export const useGraphStore =
  create<GraphStore>((set) => ({
    nodes: [],
    edges: [],

    setGraph: (
      nodes,
      edges
    ) =>
      set({
        nodes,
        edges,
      }),

    deleteNode: (nodeId) =>
      set((state) => ({
        nodes: state.nodes.filter(
          (node) =>
            node.id !== nodeId
        ),

        edges: state.edges.filter(
          (edge) =>
            edge.source !== nodeId &&
            edge.target !== nodeId
        ),
      })),

    updateNodeName: (
      nodeId,
      name
    ) =>
      set((state) => ({
        nodes: state.nodes.map(
          (node) =>
            node.id === nodeId
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    label: name,
                  },
                }
              : node
        ),
      })),

    updateNodeLoad: (
      nodeId,
      load
    ) =>
      set((state) => ({
        nodes: state.nodes.map(
          (node) =>
            node.id === nodeId
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    load,
                  },
                }
              : node
        ),
      })),
  }));