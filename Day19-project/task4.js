class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    appendData(datas) {
        let nodeData = new Node(datas);
        if (this.head === null) {
            this.head = nodeData;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = nodeData;
        }
    }

    // Method to count the total number of nodes
    countNodes() {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if (current.data !== -1) { // Exclude -1 from the count
                count++;
            }
            current = current.next;
        }
        return count;
    }
}

// Create and populate the linked list
let ourData = new SinglyLinkedList();
ourData.appendData(1);
ourData.appendData(2);
ourData.appendData(3);
ourData.appendData(4);
ourData.appendData(5);
ourData.appendData(-1);

// Count the nodes
console.log(ourData.countNodes());