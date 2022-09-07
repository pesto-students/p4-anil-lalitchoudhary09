console.log("Problem 7.4: Check Parenthesis");
console.log("Time complexity O(n) and space complexity O(n)");
class Stack
{
    constructor()
    {
        this.item =[];
    }
    push(element)
    {
        this.item.push(element);
    }
    pop()
    {
       return this.item.pop();   
    }
    peek()
    {
      return this.item[this.item.length - 1];   
    }
    length()
    {
        return (this.item.length);
    }
    
}


function toCheckParenthesis(arr)
{
    const stack1 = new Stack();

    for(let i =0 ; i < arr.length; i++)
    {
    switch(arr[i])
    {
        case '{':
                 stack1.push(arr[i]);
                 break;
        case '(':
                 stack1.push(arr[i]);
                 break;
        case '[':
                 stack1.push(arr[i]);
                 break;
        case ']':
                 if(stack1.peek() === '[')
                 {
                     stack1.pop();
                 }
                 break;
        case ')':
                 if(stack1.peek() === '(')
                 {
                     stack1.pop();
                 }
                 break;
        case '}':
                 if(stack1.peek() === '{')
                 {
                     stack1.pop();
                 }
                 break;
    }
    
    }
    if(stack1.length() != 0)
    {
        return false;
    }
    else
    {
      return true;   
    }
}

//array = “[()]{}{()()}”
const arr = ['[','(',')',']','{','}','{','(',')','(',')','}'];
console.log("Check Parenthesis" + arr)
check = toCheckParenthesis(arr)
console.log(check);





