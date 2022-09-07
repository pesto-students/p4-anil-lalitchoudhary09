console.log("Problem 7.5 : Next greater element");
console.log("Time Complexity O(n) and space complexity o(n)");
class stack
{
    constructor()
    {
        this.item =[];
    }
    push(value)
    {
        this.item.push(value);
    }
    pop()
    {
        this.item.pop();
    }
    peek()
    {
        return this.item[this.item.length-1];
    }
    length()
    {
        return this.item.length;
    }
}

const arr =[1,3, 2, 4];


function nextGreaterElement(arr)
{
 const stack1 = new stack();
 const output =[];
 stack1.push(arr[0]);

 for(let i =1 ; i < arr.length; i++ )
 {
     
     while(stack1.length() !=0 && stack1.peek() < arr[i])
     {
         output.push(arr[i]);
         stack1.pop();
     }
    
     stack1.push(arr[i]);
     
 }
 
 while(stack1.length() !=0)
 {
      output.push(-1);
      stack1.pop();
 }
 
 console.log(output);
}
 
console.log("Input : " + arr);  
console.log("Next greater element");  
nextGreaterElement(arr);





