class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    const NewNode = new Node(10);
    this.head = NewNode;
    this.tail = NewNode;
    this.length = 1;
  }
}

const newLinkedList = new linkedList();
console.log(newLinkedList);
