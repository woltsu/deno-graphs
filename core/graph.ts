import { Vertex } from "./vertex.ts";

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

  print() {
    console.log(this.vertices);
  }
}
