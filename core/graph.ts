import { Node } from "./node.ts";

export class Graph {
  nodes: { [key: string]: Node } = {};

  add(...nodes: Node[]) {
    nodes.forEach((n) => {
      this.nodes[n.key] = n;
    });
  }

  get(key: string): Node | null {
    return this.nodes[key] ?? null;
  }

  print() {
    console.log(this.nodes);
  }
}
