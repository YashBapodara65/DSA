class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList 
{
    constructor()
    {
        this.head = null;
    }

    appendData(datas)
    {
        let nodeData = new Node(datas);
        if(this.head == null)
        {
            this.head = nodeData;
        }
        else
        {
            let current = this.head;
            while(current.next != null)
            {
                current = current.next;
            }
            current.next = nodeData;
        }
    }
}

let ourData = new SinglyLinkedList();
ourData.appendData(10);
ourData.appendData(24);
ourData.appendData(33);
ourData.appendData(45);
ourData.appendData(58);

console.log(ourData);