import { Graph, Vertex } from "../core/mod.ts";
import { bellmanFord } from "../algorithms/mod.ts";

const G = new Graph();

const s = new Vertex("s");
const b = new Vertex("b");
const c = new Vertex("c");
const t = new Vertex("t");

s.add(b, 3);
s.add(c, 2);

b.add(c, -2);
b.add(t, 1);

c.add(b, 3);
c.add(t, 1);

G.add(s, b, c, t);

const shortestPaths = bellmanFord(G, s);
console.log(shortestPaths);
