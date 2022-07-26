//memorize methods for add function 
function memoize(fn)
{
    const log ={};
    return function(...args)
    {
        const key = args.toString();
        const key2= args.reverse().toString();
        if(!log[key] || !log[key2] )
        {
            log[key] = fn(...args);
            log[key2] = fn(...args);
        }
        return log[key]; 
    };

}




// function add, adds two numbers
function add(a,b)
{
    return (a+b);
    
}

//Reference to memorize add function
const test1= memoize(add);

function timeCalculate(fn)
{
    console.time();
    fn();
    console.timeEnd();
}
 
// call add function to add number and note time required to add 
timeCalculate(() => console.log(test1(5,2)));
timeCalculate(() => console.log(test1(2,5)));
timeCalculate(() => console.log(test1(5,7)));
timeCalculate(() => console.log(test1(7,5)));

