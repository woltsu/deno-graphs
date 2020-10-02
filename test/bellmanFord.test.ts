import { Graph, bellmanFord, Vertex } from "../mod.ts";
import {
  assertArrayContains,
  assertEquals,
  assert
} from "https://deno.land/std@0.72.0/testing/asserts.ts";

Deno.test("bellmanFord", () => {
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

  assertEquals(shortestPaths[0].s, 0);
  assertEquals(shortestPaths[0].c, 1);
  assertEquals(shortestPaths[0].t, 2);
  assertEquals(shortestPaths[0].b, 3);

  assertEquals(shortestPaths[1].s, null);
  assert(shortestPaths[1].c instanceof Vertex);
  assert(shortestPaths[1].t instanceof Vertex);
  assert(shortestPaths[1].b instanceof Vertex);

  assertEquals(shortestPaths[1]?.c.key, "b");
  assertEquals(shortestPaths[1]?.t.key, "c");
  assertEquals(shortestPaths[1]?.b.key, "s");
});
