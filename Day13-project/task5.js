class Node
{
    constructor(data)
    {
        this.data = data,
        this.next = null
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

function findMiddle(head)
{
    let fast = head;
    let slow = head;

    while(fast != null && fast.next != null)
    {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;

}

let ourData = new SinglyLinkedList();
ourData.appendData(1);
ourData.appendData(2);
ourData.appendData(3);
ourData.appendData(4);
ourData.appendData(5);

// console.log(ourData);

console.log(findMiddle(ourData.head).data);