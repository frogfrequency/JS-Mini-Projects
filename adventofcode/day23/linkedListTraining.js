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
        this.length++
    }

    //add last
    
    // add at

    // remove

    // get at

    // remove at

    // clear list

    // print
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.subsequent;
        }
    }

}



let theLinkedList = new LinkedList;



console.log(`before: `);

// console.log(theLinkedList);

theLinkedList.addAtBeginning(100);
theLinkedList.addAtBeginning(200);

theLinkedList.addAtBeginning(300);
theLinkedList.addAtBeginning(50);






console.log(`after: `);

// console.log(theLinkedList);


theLinkedList.printListData();