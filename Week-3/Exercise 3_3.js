function createIncrement()
{
    let count = 0;
    function increment()
    {
        count++;
    }
    let message= `count is ${count}`;
    function log()
    {
        console.log(message);
    }
    return [increment, log];
}

// At this time only variable 'message' stores value as 'count is 0'
const[increment, log] = createIncrement(); 
increment();
increment();
increment();
//increment function incremented value but message variable already computed i,e why output is 'count is 0'
log();

