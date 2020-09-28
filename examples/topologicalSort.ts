import { Graph, Vertex } from "../core/mod.ts";
import { topologicalSort } from "../algorithms/mod.ts";

const G = new Graph();

const a = new Vertex("a");
const b = new Vertex("b");
const c = new Vertex("c");
const d = new Vertex("d");
const e = new Vertex("e");

a.add(b);

b.add(e);

c.add(a);
c.add(e);

d.add(c);
d.add(e);

G.add(a, b, c, d, e);
const topologicalOrder = topologicalSort(G);
console.log(topologicalOrder);
