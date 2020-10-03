import { Graph, exactPath, Vertex } from "../mod.ts";
import { assert, assertEquals } from "https://deno.land/std@0.72.0/testing/asserts.ts";

Deno.test("exactPath - has path when target length >= 2", () => {
  const G = new Graph();

  const s = new Vertex("s");
  const b = new Vertex("b");
  const c = new Vertex("c");
  const t = new Vertex("t");

  s.add(b, 2);
  s.add(c, 2);
  b.add(c, 1);
  b.add(t, 0);
  c.add(b, 1);
  c.add(t, 0);
  G.add(s, b, c, t);

  assertEquals(exactPath(G, s, t, 0), false);
  assertEquals(exactPath(G, s, t, 1), false);
  assertEquals(exactPath(G, s, t, 2), true);
  assertEquals(exactPath(G, s, t, 3), true);
  assertEquals(exactPath(G, s, t, 4), true);
  assertEquals(exactPath(G, s, t, 5), true);
});

Deno.test("exactPath - no path", () => {
  const G = new Graph();

  const s = new Vertex("s");
  const b = new Vertex("b");
  const c = new Vertex("c");
  const t = new Vertex("t");

  s.add(b, 0);
  s.add(c, 0);
  b.add(c, 1);
  c.add(b, 2);
  G.add(s, b, c, t);

  assertEquals(exactPath(G, s, t, 0), true);
  assertEquals(exactPath(G, s, t, 1), false);
  assertEquals(exactPath(G, s, t, 2), false);
  assertEquals(exactPath(G, s, t, 3), false);
  assertEquals(exactPath(G, s, t, 4), false);
  assertEquals(exactPath(G, s, t, 5), false);
});

Deno.test("exactPath - even path lengths are found", () => {
  const G = new Graph();

  const s = new Vertex("s");
  const b = new Vertex("b");
  const c = new Vertex("c");
  const t = new Vertex("t");

  s.add(b, 0);
  s.add(c, 0);
  b.add(c, 2);
  b.add(t, 0);
  c.add(b, 2);
  c.add(t, 0);
  G.add(s, b, c, t);

  assertEquals(exactPath(G, s, t, 0), true);
  assertEquals(exactPath(G, s, t, 1), false);
  assertEquals(exactPath(G, s, t, 2), true);
  assertEquals(exactPath(G, s, t, 3), false);
  assertEquals(exactPath(G, s, t, 4), true);
  assertEquals(exactPath(G, s, t, 5), false);
  assertEquals(exactPath(G, s, t, 6), true);
});
