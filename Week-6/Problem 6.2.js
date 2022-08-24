// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Problem 6.1: Max Sum Contiguous Subarray");
const test = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
let row = 3;
let col = 3;
let size = row * col;
let top,bottom,right,left;
top=0;
left=0;
bottom= row - 1;
right = col - 1;
const result = [];
//result.push(2);
let val = 1;
console.log(size);
console.log(result);

while(val <= size)
{
    for(let j=left; j<= right;j++)
    {
       val++;
       result.push(test[left][j]);
    }
    top = top + 1;
    
    for(let j=top;j<=bottom;j++)
    {
         val++;
        result.push(test[j][right]);
    }
    //console.log(result);
    right=right-1;
    for(let j=right;j>=left;j--)
    {
        val++;
      result.push(test[bottom][j]);
    }
    bottom=bottom-1;
    for(let j=bottom; j>=top;j--)
    {
    val++;
     result.push(test[j][left]);   
    }
    left=left+1;
    
}
console.log(result);






