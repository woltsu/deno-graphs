import { Vertex } from "./vertex.ts";
import { Edge } from "./edge.ts";

export class Graph {
  vertices: { [key: string]: Vertex } = {};

  add(...vertices: Vertex[]) {
    vertices.forEach((n) => {
      this.vertices[n.key] = n;
    });
  }

  get(key: string): Vertex | null {
    return this.vertices[key] ?? null;
  }

  getVertices(): Vertex[] {
    return Object.values(this.vertices);
  }

  getEdges(): Edge[] {
    return Object.values(this.vertices).reduce<Edge[]>(
      (res, curr) => [...res, ...curr.edges],
      [],
    );
  }

  print() {
    console.log(this.vertices);
  }
}
