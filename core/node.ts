export class Node {
  key: string;
  edges: { [key: string]: number } = {};

  constructor(key: string) {
    this.key = key;
  }

  add(node: Node, weight: number) {
    this.edges[node.key] = weight;
  }
}
