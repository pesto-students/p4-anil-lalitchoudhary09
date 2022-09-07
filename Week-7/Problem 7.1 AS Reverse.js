
console.log("Problem 7.1 : Reverse Link List");
console.log("Time complexity O(n) and space complexity O(1)");
class singleList
{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}

function createSLL(arr)
{

    let temp;
    head = new singleList(arr[0]);
    //console.log(head.value);
    let current = head;
    for(let i=1; i< arr.length;i++)
    {
        temp = new singleList(arr[i]);
        current.next= temp;
        current=temp;
    }
    return head;
}

function travel(head)
{
    let current = head;
    while(current!=null)
    {
        console.log(current.value);
        current=current.next;
    }
}

console.log("Create and display Single Link List");
let arr=[1,2,3,4];
head = createSLL(arr);
travel(head);


function reverse(head)
{
    
    let previous = null, current = head, after= null;
    while(current.next != null)
    {
        after= current.next;
        current.next=previous;
        previous=current;
        current= after;
        
    }
   current.next=previous;
   head=current;
   return head;
}

console.log("Reverse Link List");
head = reverse(head);
travel(head);



