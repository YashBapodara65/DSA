function randomArrayElements()
{
    let newArray = [];
    let size = 3;

    for(let row=0; row<size; row++)
    {
        let store = [];
        for(let col=0; col<size; col++)
        {
            store.push(Math.round(Math.random() * 100));
        }

        newArray.push(store);
    }

    console.log(newArray);

}

randomArrayElements();