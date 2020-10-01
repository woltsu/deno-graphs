import { Vertex } from "./vertex.ts";

export class Edge {
  s: Vertex;
  t: Vertex;
  weight: number;
  capacity: number;

  constructor(s: Vertex, t: Vertex, weight?: number, capacity?: number) {
    this.s = s;
    this.t = t;
    this.weight = weight ?? 1;
    this.capacity = capacity ?? 1;
  }
}
