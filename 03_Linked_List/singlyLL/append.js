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

  append(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepand(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
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

  insert(value, index) {
    const newNode = new Node(value);
    if (index < -1 || index > this.length) {
      return false;
    } else if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (index === -1 || index === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let tempNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        tempNode = tempNode.next;
      }
      newNode.next = tempNode.next;
      tempNode.next = newNode;
    }
    this.length++;
    return true;
  }
}

const newLinkedList = new LinkedList();
newLinkedList.append(10);
newLinkedList.append(20);
newLinkedList.append(30);
newLinkedList.prepand(40);
newLinkedList.insert(5, 0);
newLinkedList.insert(15, -1);
newLinkedList.insert(35, 10);

console.log(newLinkedList.toString());
