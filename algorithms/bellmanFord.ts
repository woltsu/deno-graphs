import { Graph } from "../core/graph.ts";
import { Vertex } from "../core/vertex.ts";

export const bellmanFord = (G: Graph, s: Vertex) => {
  const vertices = Object.values(G.vertices);

  const d: { [vertex: string]: number } = {};
  const path: { [vertex: string]: (Vertex | null) } = {};

  vertices.forEach((v) => {
    d[v.key] = Infinity;
    path[v.key] = null;
  });

  d[s.key] = 0;

  for (let i = 0; i < vertices.length - 1; i++) {
    vertices.forEach((v) => {
      Object.entries(v.edges).forEach(([target, weight]) => {
        if (d[v.key] + weight < d[target]) {
          d[target] = d[v.key] + weight;
          path[target] = v;
        }
      });
    });
  }

  return [d, path];
};
