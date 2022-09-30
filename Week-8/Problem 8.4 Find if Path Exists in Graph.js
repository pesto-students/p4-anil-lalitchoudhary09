import { toAddvertex, addEdge } from "./classes.js";
console.log("Find if Path Exists in Graph");
console.log("Time complexity O(n) and space complexity O(n)");

//Number of vertex
var v = 4;
var adj = toAddvertex(v); // adds nodes
//Creates graph
adj = addEdge(adj, "0", "1");
adj = addEdge(adj, "0", "2");
adj = addEdge(adj, "1", "2");
adj = addEdge(adj, "2", "3");

//function to find path between two points source and destination
function findPath(v, s, d) {
  var q = [];
  var visited = new Array(v).fill(false);

  q.push(s);
  visited[s] = true;
  while (q.length != 0) {
    s = q.pop();

    for (let i = 0; i < adj[s].length; i++) {
      if (adj[s][i] == d) {
        return true;
      }

      if (!visited[adj[s][i]]) {
        visited[adj[s][i]] = true;
        q.push(adj[s][i]);
      }
    }
  }
  return false;
}

console.log("Adjacency List", adj);
console.log("is path available between node 0 to 3:- ", findPath(v, "0", "3"));
