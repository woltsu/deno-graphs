import { Graph, Vertex } from "../core/mod.ts";
import { exactPath } from "../algorithms/mod.ts";

const G = new Graph();

const s = new Vertex("s");
const b = new Vertex("b");
const c = new Vertex("c");
const t = new Vertex("t");

s.add(b, 0);
s.add(c, 0);

b.add(c, 1);
b.add(t, 0);

c.add(b, 1);
c.add(t, 0);

G.add(s, b, c, t);

const shortestPaths = exactPath(G, s, t, 5);
console.log(shortestPaths);
