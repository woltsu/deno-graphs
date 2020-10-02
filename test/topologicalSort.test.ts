import { Graph, topologicalSort, Vertex } from "../mod.ts";
import {
  assertEquals,
} from "https://deno.land/std@0.72.0/testing/asserts.ts";

Deno.test("topologicalSort", () => {
  const G = new Graph();
  const a = new Vertex("a");
  const b = new Vertex("b");
  const c = new Vertex("c");
  const d = new Vertex("d");
  const e = new Vertex("e");

  a.add(b);
  b.add(c);
  d.add(a);
  a.add(e);
  b.add(e);
  e.add(c);

  G.add(a, b, c, d, e);

  const sorted = topologicalSort(G);
  assertEquals(sorted.length, 5);
  assertEquals(sorted[0].key, "d");
  assertEquals(sorted[1].key, "a");
  assertEquals(sorted[2].key, "b");
  assertEquals(sorted[3].key, "e");
  assertEquals(sorted[4].key, "c");
});
