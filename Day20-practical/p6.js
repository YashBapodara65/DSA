let str = "hello";
let count = 0;
let myMap = new Map();
function uniqueString(str)
{
    let myMap = new Map();
    for(let val of str)
    {
        if(myMap.has(val))
        {
            myMap.set(val,myMap.get(val) + 1);
        }
        else
        {
            myMap.set(val,1);
        }
    }

    console.log(myMap);

    let uniqueStr = "";
    let newSet = new Set(str);

    console.log(newSet);

}

uniqueString("hello");