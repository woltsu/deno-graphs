import { Graph } from "../core/graph.ts";
import { Vertex } from "../core/vertex.ts";

// Topological sort in iterative fashion adapted to typescript from https://www.cs.helsinki.fi/u/ahslaaks/kkkk.pdf

export const topologicalSortIterative = (G: Graph) => {
  const vertices = Object.values(G.vertices);
  const incomingEdges: { [key: string]: number }  = {};
  const result: Vertex[] = [];

  vertices.forEach(vertex => {
    vertex.edges.forEach(edge => {
      if (!incomingEdges[edge.t.key])
        incomingEdges[edge.t.key] = 0
      incomingEdges[edge.t.key]++;
    })
  })
  vertices.forEach(vertex => {
    if (!incomingEdges[vertex.key])
      result.push(vertex)
  })
  for (let i = 0; i < vertices.length; i++) {
    result[i].edges.forEach(edge => {
      if (--incomingEdges[edge.t.key] == 0)
        result.push(edge.t);
    })
  }
  return result;
};
