# deno-graphs
Graph algorithms for deno.

# Usage
```js
import { Graph, Vertex, bellmanFord } from "https://raw.githubusercontent.com/woltsu/deno-graphs/master/mod.ts";

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
```

Running examples:
```bash
deno run -r https://raw.githubusercontent.com/woltsu/deno-graphs/master/examples/bellmanFord.ts
```

# Contributing
1. Clone the project
2. Create an algorithm to `/algorithms` and an example of it in `/examples`
3. Create a pull request