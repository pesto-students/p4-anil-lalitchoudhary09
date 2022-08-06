console.log("Example Of Calls");
function details(name, price)
{
    this.name = name;
    this.price = price;
}

function carDetails(name, price)
{
    details.call(this,name,price);
    /*  The call() method calls the function with a given this value and arguments provided individually.*/
}

function bikeDetails(name, price)
{
    details.call(this,name, price);
     /*  The call() method calls the function with a given this value and arguments provided individually.*/
}

function printDetails(printObj)
{
    console.log("Vehicle Name is :" +  printObj.name + " and price is :" + printObj.price );
}

const car1= new carDetails("Wagnor",100);
printDetails(car1);
const bike1= new bikeDetails("Pulsar",10);
printDetails(bike1);


console.log("Example of Apply");

function storeNumbers(num1, num2)
{
    this.num1 =num1;
    this.num2 =num2;

}

function add(num1, num2)
{
    storeNumbers.apply(this,[num1, num2]);
     /*  The apply() method calls the function with a given this value and arguments provided as an array.*/
    this.result = this.num1+ this.num2;
    return this;
}


function multiply(num1, num2)
{
    storeNumbers.apply(this,[num1, num2]);
    /*  The apply() method calls the function with a given this value and arguments provided as an array.*/
    this.result = this.num1 * this.num2;
    return this;
}

function printResult(printObj,operation)
{
    console.log("Result of " + operation + " for numbers " + printObj.num1 + " and " + printObj.num2  +" is " + printObj.result);
}

var operation1 = new add(5,2);
printResult(operation1,"Addition");

operation1 = new multiply(5,2);
printResult(operation1,"Multiplication");


console.log("Example of bind");

const person= {
    name: "Vijay",
    age: 50,
    getDetails: function()
    {
        console.log("Person Name is " + this.name + " and age is " + this.age)
    }
}

const unBindExample = person.getDetails;
unBindExample();
//Output is undefined

const bindExample = unBindExample.bind(person);
bindExample();
//output is Person Name is Vijay and age is 50











