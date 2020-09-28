export class Vertex {
  key: string;
  edges: { [key: string]: number } = {};

  constructor(key: string) {
    this.key = key;
  }

  add(vertex: Vertex, weight: number = 1) {
    this.edges[vertex.key] = weight;
  }
}
