import { Graph } from "../core/graph.ts";
import { Vertex } from "../core/vertex.ts";

const topologicalRecursive = (
  v: Vertex,
  visited: { [key: string]: boolean },
  stack: Vertex[],
  graph: Graph,
) => {
  visited[v.key] = true;

  Object.keys(v.edges).forEach((k) => {
    const t = graph.vertices[k];

    if (!visited[t.key]) {
      topologicalRecursive(t, visited, stack, graph);
    }
  });

  stack.push(v);
};

export const topologicalSort = (G: Graph) => {
  const vertices = Object.values(G.vertices);
  const visited: { [key: string]: boolean } = {};
  const stack: Vertex[] = [];

  vertices.forEach((v) => {
    if (!visited[v.key]) {
      topologicalRecursive(v, visited, stack, G);
    }
  });

  return stack.reverse();
};
