import { toInsertNode } from "./classes.js";

console.log("Binary Tree Level Order Traversal");
console.log("Time complexity O(n) and space complexity O(n)");

//Creates a graph
const root = toInsertNode(25);
root.left = toInsertNode(15);
root.right = toInsertNode(40);
root.left.left = toInsertNode(10);
root.left.right = toInsertNode(20);
root.right.left = toInsertNode(35);
root.right.right = toInsertNode(45);

function printLevel(root) {
  var q = [];
  var p = [];
  q.push(root);

  p.push([root.key]);

  while (q.length > 0) {
    const tem = q.shift();
    if (tem.left != null && tem.right != null) {
      q.push(tem.left);
      q.push(tem.right);
      let set = [tem.left.key, tem.right.key];
      p.push(set);
    }
  }

  return p;
}

console.log(printLevel(root));
