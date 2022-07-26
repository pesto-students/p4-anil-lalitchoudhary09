
console.log("Problem 6.6:  3 sum");
console.log("Time complexity O(n*log(n) and space complexity O(1)");
let A = [-1,2,1,-4];
let target = 1,start,end,sum,closeSum = 1000000000;
A = A.sort((a,b)=>a-b);
console.log(A);
for(let i =0;i<A.length;i++)
{
    start = i+1;
    end = A.length - 1;
    sum = A[i] + A[start] + A[end];
    while(start < end)
    {
        if(Math.abs(target-sum) < Math.abs(target-closeSum) )
        {
            closeSum = sum;
        }
        if(sum > target)
        {
            end--;
        }
        else
        {
            start++;
        }
    }
    
}

console.log(closeSum);