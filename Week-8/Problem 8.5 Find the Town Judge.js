console.log("Time complexity O(n) and space complexity O(n)");
function findJudge() {
  const N = 3;
  const adj = [
    [1, 3],
    [2, 3],
  ];
  console.log("2D array", adj);

  const indegree = {},
    outdegree = {};

  for (let i = 1; i <= N; i++) {
    indegree[i] = 0;
    outdegree[i] = 0;
  }

  for (let set of adj) {
    outdegree[set[0]]++; // counting each person giving trust vote
    indegree[set[1]]++; // counting trust each person getting and counting
  }

  var judge = -1;

  for (let key in outdegree) {
    if (outdegree[key] == 0) {
      // if person with 0 vote giving to other person might be judge
      judge = key;
    }
  }

  if (indegree[judge] == N - 1) return judge;
  else return -1;
}

console.log("Judge is ", findJudge());
