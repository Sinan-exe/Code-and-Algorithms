class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  toString() {
    let tempNode = this.head;
    let result = "";
    while (tempNode !== null) {
      result += tempNode.value;
      if (tempNode.next !== null) {
        result += "->";
      }
      tempNode = tempNode.next;
    }
    return result;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

const newLinkedList = new LinkedList();
newLinkedList.append(10);
newLinkedList.append(20);
newLinkedList.append(30);
newLinkedList.append(40);
console.log(newLinkedList.toString());
