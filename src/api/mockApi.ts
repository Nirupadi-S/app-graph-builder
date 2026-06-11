import type {
  Node,
  Edge,
} from "@xyflow/react";

const delay = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

export async function getApps() {
  await delay(1000);

  return [
    {
      id: "app1",
      name: "Payments App",
    },

    {
      id: "app2",
      name: "Analytics App",
    },

    {
      id: "app3",
      name: "Inventory App",
    },
  ];
}

export async function getGraph(
  appId: string
): Promise<{
  nodes: Node[];
  edges: Edge[];
}> {
  await delay(1000);

  if (Math.random() < 0.1) {
    throw new Error(
      "Mock API Error"
    );
  }

  if (appId === "app1") {
    return {
      nodes: [
        {
          id: "1",
          position: {
            x: 100,
            y: 100,
          },
          data: {
            label: "Gateway",
            status: "Healthy",
            load: 60,
          },
        },

        {
          id: "2",
          position: {
            x: 400,
            y: 100,
          },
          data: {
            label:
              "Payment Service",
            status: "Healthy",
            load: 40,
          },
        },

        {
          id: "3",
          position: {
            x: 700,
            y: 100,
          },
          data: {
            label: "Database",
            status: "Healthy",
            load: 25,
          },
        },
      ],

      edges: [
        {
          id: "e1",
          source: "1",
          target: "2",
        },

        {
          id: "e2",
          source: "2",
          target: "3",
        },
      ],
    };
  }

  if (appId === "app2") {
    return {
      nodes: [
        {
          id: "1",
          position: {
            x: 100,
            y: 100,
          },
          data: {
            label: "Collector",
            status: "Healthy",
            load: 20,
          },
        },

        {
          id: "2",
          position: {
            x: 400,
            y: 100,
          },
          data: {
            label:
              "Analytics Engine",
            status:
              "Degraded",
            load: 80,
          },
        },

        {
          id: "3",
          position: {
            x: 700,
            y: 100,
          },
          data: {
            label: "Warehouse",
            status: "Healthy",
            load: 35,
          },
        },
      ],

      edges: [
        {
          id: "e3",
          source: "1",
          target: "2",
        },

        {
          id: "e4",
          source: "2",
          target: "3",
        },
      ],
    };
  }

  return {
    nodes: [
      {
        id: "1",
        position: {
          x: 100,
          y: 100,
        },
        data: {
          label:
            "Inventory API",
          status: "Healthy",
          load: 55,
        },
      },

      {
        id: "2",
        position: {
          x: 400,
          y: 100,
        },
        data: {
          label:
            "Inventory Service",
          status: "Healthy",
          load: 45,
        },
      },

      {
        id: "3",
        position: {
          x: 700,
          y: 100,
        },
        data: {
          label:
            "Inventory DB",
          status: "Healthy",
          load: 30,
        },
      },
    ],

    edges: [
      {
        id: "e5",
        source: "1",
        target: "2",
      },

      {
        id: "e6",
        source: "2",
        target: "3",
      },
    ],
  };
}