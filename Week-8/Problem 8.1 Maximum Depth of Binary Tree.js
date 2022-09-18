import { toInsertNode } from "./classes.js";

console.log("Time complexity O(n) and space complexity O(n)");
//Creates a graph
const root = toInsertNode(1);
root.left = toInsertNode(2);
root.right = toInsertNode(3);
root.right.left = toInsertNode(4);
root.right.right = toInsertNode(5);

function findMaxDepth(root) {
  const q = [];
  let depth = 0;
  q.push(root);
  q.push(null);
  while (q.length > 0) {
    const temp = q.shift();

    if (temp === null) {
      depth = depth + 1;
    }

    if (temp != null) {
      if (temp.left) {
        q.push(temp.left);
      }
      if (temp.right) {
        q.push(temp.right);
      }
    } else if (q.length > 0) {
      q.push(null);
    }
  }
  return depth;
}

const depth = findMaxDepth(root);
console.log("Maximum depth is :- ", depth);
