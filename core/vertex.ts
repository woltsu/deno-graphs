import { Edge } from "./edge.ts";

export class Vertex {
  key: string;
  edges: Edge[] = [];

  constructor(key: string) {
    this.key = key;
  }

  add(vertex: Vertex, weight?: number, capacity?: number) {
    this.edges.push(
      new Edge(this, vertex, weight, capacity),
    );
  }
}
