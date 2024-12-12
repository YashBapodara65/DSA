let q1 = [];

function enqueue(q1,a)
{
    q1.push(a);
}

function dequeue()
{
    return q1.shift();
}

function front()
{
    return q1[0];
}

function rear()
{
    return q1[q1.length-1];
}

function reverseQueue()
{
    let stack = [];
    while(q1.length)
    {
        stack.push(dequeue())
    }

    while(stack.length)
    {
        enqueue(q1,stack.pop());
    }
    console.log(q1);
}

enqueue(q1,10);
enqueue(q1,20);
enqueue(q1,30);

reverseQueue();