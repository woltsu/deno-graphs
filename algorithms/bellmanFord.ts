import { Graph } from "../core/graph.ts";
import { Vertex } from "../core/vertex.ts";

export const bellmanFord = (G: Graph, s: Vertex) => {
  const vertices = G.getVertices();
  const edges = G.getEdges();

  const d: { [vertex: string]: number } = {};
  const path: { [vertex: string]: (Vertex | null) } = {};

  vertices.forEach((v) => {
    d[v.key] = Infinity;
    path[v.key] = null;
  });

  d[s.key] = 0;

  for (let i = 0; i < vertices.length - 1; i++) {
    edges.forEach((edge) => {
      const source = edge.s;
      const target = edge.t;

      if (d[source.key] + edge.weight < d[target.key]) {
        d[target.key] = d[source.key] + edge.weight;
        path[target.key] = source;
      }
    });
  }

  return [d, path];
};
