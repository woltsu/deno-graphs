import { Graph, Vertex } from "../core/mod.ts";

const pathRecursive = (
  v: Vertex,
  c: number,
  C: number,
  P: { [key: string]: boolean[] },
) => {
  v.edges.forEach((e) => {
    const next = c + e.weight;
    if (next > C || P[e.t.key][next]) return;

    P[e.t.key][next] = true;
    pathRecursive(e.t, next, C, P);
  });
};

export const exactPath = (G: Graph, s: Vertex, t: Vertex, C: number) => {
  const vertices = G.getVertices();
  const P: { [key: string]: boolean[] } = {};

  // Assume that |V| < |E|, thus time complexity here is O(|E|).
  vertices.forEach((v, i) => {
    P[v.key] = new Array(C + 1).fill(false);
  });

  P[s.key][0] = true;

  pathRecursive(s, 0, C, P);

  return P[t.key][C];
};
