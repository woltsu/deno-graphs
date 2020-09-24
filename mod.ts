import { Graph } from "./core/graph.ts";
import { Node } from "./core/node.ts";

const G = new Graph();

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");

A.add(B, 1);
B.add(C, 1);

G.add(A, B, C);

G.print()