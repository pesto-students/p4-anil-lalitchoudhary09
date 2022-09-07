console.log("Rotate link list");
console.log("Time complexity O(n) and space complexity O(1)");
class SLL
{
    constructor(value)
    {
       
        this.value=value;
        this.next=null;
    }
}

function createSLL(arr)
{
    let node = new SLL(arr[0]);
    head = node;
    let current = head;
    for(let i=1;i < arr.length; i++ )
    {
        current.next = new SLL(arr[i]);
        current = current.next;
    }
    return head;
    
}

function travelSLL(head)
{
    let current = head;
    while(current!= null)
    {
        console.log(current.value);
        current = current.next;
    }
}

const arr = [1,2,3,4,5];
head = createSLL(arr);
travelSLL(head);

function rotateSLL(head, k)
{
    
    let tail = head;
    let lengthOfList=1;
    while(tail.next!= null)
    {
      lengthOfList++;
      tail = tail.next;
    }
    
    let mod = lengthOfList % k;
    
    if(mod ===0)
    {
        return head;
    }
    
    let steps = lengthOfList - mod;
    tail.next = head;
    
    while(steps--)
    {
        tail =tail.next 
    }
    
    newHead= tail.next; 
    tail.next= null;
    head = newHead
    return head;
}
console.log("After rotate");
head = rotateSLL(head ,3);
travelSLL(head);






