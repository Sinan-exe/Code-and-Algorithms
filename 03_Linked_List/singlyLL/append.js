// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }

//   prepand(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//   }

//   toString() {
//     let tempNode = this.head;
//     let result = "";
//     while (tempNode !== null) {
//       result += tempNode.value;
//       if (tempNode.next !== null) {
//         result += "->";
//       }
//       tempNode = tempNode.next;
//     }
//     return result;
//   }

//   insert(value, index) {
//     const newNode = new Node(value);
//     if (index < -1 || index > this.length) {
//       return false;
//     } else if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//     } else if (index === -1 || index === this.length) {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     } else {
//       let tempNode = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         tempNode = tempNode.next;
//       }
//       newNode.next = tempNode.next;
//       tempNode.next = newNode;
//     }
//     this.length++;
//     return true;
//   }

//   traverse() {
//     let current = this.head;
//     while (current !== null) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }

//   search(target) {
//     let current = this.head;
//     let index = 0;
//     while (current !== null) {
//       if (current.value === target) {
//         return index;
//       }
//       current = current.next;
//       index++;
//     }

//     return -1;
//   }

// }

// const newLinkedList = new LinkedList();
// newLinkedList.append(10);
// newLinkedList.append(20);
// newLinkedList.append(30);
// newLinkedList.append(40);
// // newLinkedList.insert(5, 0);
// // newLinkedList.insert(15, -1);
// // newLinkedList.insert(35, 10);

// console.log(newLinkedList.toString());
// console.log(newLinkedList.getIndexof(3));

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }

//   toString() {
//     let tempNode = this.head;
//     let result = "";
//     while (tempNode !== null) {
//       result += tempNode.value;
//       if (tempNode.next !== null) {
//         result += "->";
//       }
//       tempNode = tempNode.next;
//     }
//     return result;
//   }

//   prepand(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//   }

//   insert(value, index) {
//     const newNode = new Node(value);
//     if (index < -1 || index > this.length) {
//       return false;
//     } else if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//     } else if (index === -1 || index === this.length) {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     } else {
//       let current = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         current = current.next;
//       }
//       newNode.next = current.next;
//       current.next = newNode;
//     }
//     this.length++;
//     return true;
//   }

//   traverse() {
//     let current = this.head;
//     while (current !== null) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }

//   search(target) {
//     let current = this.head;
//     let index = 0;
//     while (current !== null) {
//       if (current.value === target) {
//         return index;
//       }
//       current = current.next;
//       index++;
//     }
//     return -1;
//   }

//   get(index) {
//     if (index < -1 || index >= this.length) {
//       return null;
//     } else if (index === -1) {
//       return this.tail;
//     }
//     let current = this.head;
//     for (let i = 0; i < index; i++) {
//       current = current.next;
//     }
//     return current;
//   }

//   setValue(index, value) {
//     const node = this.get(index);
//     if (node) {
//       node.value = value;
//       return true;
//     }
//     return false;
//   }
// }

// const newLinkedList = new LinkedList();
// newLinkedList.append(10);
// newLinkedList.append(20);
// newLinkedList.append(30);
// newLinkedList.insert(40, 3);
// console.log(newLinkedList.get(4));
// console.log(newLinkedList.setValue(2, 100));
// console.log(newLinkedList.toString());

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

  insert(index, value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (index === -1) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else if (index < -1 || index > this.length) {
      return false;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.length++;
    return true;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  search(target) {
    let current = this.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  get(index) {
    if (index < -1 || index >= this.length) {
      return null;
    } else if (index === -1) {
      return this.tail;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  setValue(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
}

const newLinkedList = new LinkedList();
newLinkedList.insert(0, 10);
newLinkedList.insert(-1, 100);
newLinkedList.traverse();
console.log(newLinkedList.search(20));
console.log(newLinkedList.get(1));
newLinkedList.setValue(1, 500);
console.log(newLinkedList.toString());
