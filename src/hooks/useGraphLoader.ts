import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { getGraph } from "../api/mockApi";

import { useUIStore } from "../store/uiStore";

import { useGraphStore } from "../store/graphStore";

export default function useGraphLoader() {
  const selectedAppId =
    useUIStore(
      (s) => s.selectedAppId
    );

  const setSelectedNodeId =
    useUIStore(
      (s) =>
        s.setSelectedNodeId
    );

  const setGraph =
    useGraphStore(
      (s) => s.setGraph
    );

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "graph",
      selectedAppId,
    ],

    queryFn: () =>
      getGraph(
        selectedAppId
      ),
  });

  useEffect(() => {
    if (!data) return;

    setGraph(
      data.nodes,
      data.edges
    );

    setSelectedNodeId(
      data.nodes[0]?.id ??
        null
    );
  }, [
    data,
    setGraph,
    setSelectedNodeId,
  ]);

  return {
    isLoading,
    error,
  };
}