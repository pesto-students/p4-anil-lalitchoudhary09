export class node {
  constructor() {
    this.key = 0;
    this.left = null;
    this.right = null;
  }
}

export function toInsertNode(data) {
  const nod = new node();
  nod.key = data;
  return nod;
}

export function toAddvertex(v) {
  //Adjacency list
  var adj = [];
  for (let i = 0; i < v; i++) {
    adj.push(new Array());
  }
  return adj;
}

export function addEdge(adj, v, w) {
  adj[v].push(w);
  adj[w].push(v);
  return adj;
}
