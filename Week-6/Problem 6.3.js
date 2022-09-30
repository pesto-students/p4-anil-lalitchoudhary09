
console.log("Problem 6.3:-  Sort array of 0's,1's and 2'");
console.log("Time complexity O(n) and space complexity O(1)");
const arr =[0,0,1,1,1,1,1,2,0,0,0,2];
console.log(arr);
let low=0;
let mid=0;
let high = arr.length-1;
while(mid<=high)
{
    switch(arr[mid])
    {
        
        case 0:
               arr[low]=arr[mid];
               low++;
               mid++;
               break;
        case 1:
               mid++;
               break;
        case 2:
               arr[high]=arr[mid];
               high--;
               break;
    }
}
console.log(arr);