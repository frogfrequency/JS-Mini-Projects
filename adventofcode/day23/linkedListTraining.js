class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.subsequent = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addAtBeginning(value) {
        this.head = new Node(value, this.head);
    }


}



let theLinkedList = new LinkedList;



console.log(`before: `);

console.log(theLinkedList);



console.log(`after: `);

console.log(theLinkedList);
