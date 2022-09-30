import { toInsertNode } from "./classes.js";
console.log("Validate a Binary Tree");
console.log("Time complexity O(n) and space complexity O(1)");

//Creates a binary tree
const root = toInsertNode(8);
root.left = toInsertNode(6);
root.right = toInsertNode(12);
root.left.left = toInsertNode(4);
root.left.right = toInsertNode(7);
root.right.left = toInsertNode(11);
root.right.right = toInsertNode(13);

function isBST(root) {
  return isBSTUntil(root);
}

function isBSTUntil(root) {
  var prev;
  if (root != null) {
    if (!isBSTUntil(root.left)) {
      return false;
    }

    if (prev != null && prev.key >= root.key) return false;

    prev = root;

    return isBSTUntil(root.right);
  }
  return true;
}

console.log(isBST(root));
