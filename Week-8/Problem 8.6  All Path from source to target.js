import { toAddvertex, addEdge } from "./classes.js";
console.log("Time complexity O(N^N) and space complexity O(N^N)");
console.log("All Path from source to target");

var v = 4;
var adj = toAddvertex(v); // adds nodes

//Creates a graph
adj = addEdge(adj, 0, 1);
adj = addEdge(adj, 0, 2);
adj = addEdge(adj, 1, 2);

console.log("Adjacency List", adj);

function printPath(v, s, d) {
  var visited = new Array(v).fill(false);
  let pathList = [];
  visited[s] = true;
  pathList.push(s);
  printPathUntill(s, d, visited, pathList);
}

function printPathUntill(s, d, visited, localpathList) {
  if (s === d) {
    console.log(localpathList);
    return;
  }

  visited[s] = true;

  for (let i = 0; i < adj[s].length; i++) {
    if (!visited[adj[s][i]]) {
      localpathList.push(adj[s][i]);
      printPathUntill(adj[s][i], d, visited, localpathList);
      localpathList.splice(localpathList.indexOf(adj[s][i]), 1);
    }
  }

  visited[s] = false;
}
console.log("Prints paths");
printPath(v, 0, 2);
