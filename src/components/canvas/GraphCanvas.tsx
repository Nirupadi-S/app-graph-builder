import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
} from "@xyflow/react";

import { useEffect } from "react";

import "@xyflow/react/dist/style.css";

import { useUIStore } from "../../store/uiStore";
import { useGraphStore } from "../../store/graphStore";

export default function GraphCanvas() {
  const nodes = useGraphStore(
    (state) => state.nodes
  );

  const edges = useGraphStore(
    (state) => state.edges
  );

  const deleteNode =
    useGraphStore(
      (state) =>
        state.deleteNode
    );

  const selectedNodeId =
    useUIStore(
      (state) =>
        state.selectedNodeId
    );

  const setSelectedNodeId =
    useUIStore(
      (state) =>
        state.setSelectedNodeId
    );

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (
        (event.key === "Delete" ||
          event.key ===
            "Backspace") &&
        selectedNodeId
      ) {
        deleteNode(
          selectedNodeId
        );

        setSelectedNodeId(
          null
        );
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [
    selectedNodeId,
    deleteNode,
    setSelectedNodeId,
  ]);

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodeClick={(
          _,
          node
        ) =>
          setSelectedNodeId(
            node.id
          )
        }
      >
        <Background
          variant={
            BackgroundVariant.Dots
          }
        />

        <Controls />

        <MiniMap />
      </ReactFlow>
    </div>
  );
}