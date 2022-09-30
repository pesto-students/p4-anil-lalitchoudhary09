
console.log("Problem 6.5: Pair With Given Difference");
console.log("Time complexity O(n*log(n)) and Space complexity O(1) ");
let A = [-10,20];
let B = 30,Result=0,i=0,j=1;
A = A.sort((a,b)=>a-b);
console.log(A);
while(i <A.length && j< A.length)
{
    if((A[j]-A[i]) === B)
    {
     Result =1;
     break;
    }
    else if((A[j]-A[i]) < B)
    {
        j++
    }
    else
    {
        i++;
    }
}

console.log(Result);