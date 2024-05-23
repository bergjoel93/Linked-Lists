import Node from "./Node.js";
/**
 * Represets the full linked-list.
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // implement the 'append' method to add a node to the end of the list.
  /**
   * When appending a new node to the list:
   * 1. create a new 'Node'
   * 2. If the list is empty, set both the head and tail to this new node.
   * 3. If the list is not empty, link the current tail node to the new node and update the tail reference.
   */
  append(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Link the current tail node to the new node
      this.tail = newNode; // update the tail reference.
    }
    this.size++;
  }
  /**
   * Prepend Function: adds a new node containing value to the start of the list.
   * 1. Create a new 'Node' instance with the given data
   * 2. If the list is empty, set both the head and the tail to this new node.
   * 3. If the list is not empty, link the new node to the current head node and update the head reference.
   */

  prepend(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // link the new node to the current head node
      newNode.next = this.head;
      // update the head reference
      this.head = newNode;
    }
    this.size++;
  }
  /**
   * Returns the size of the Linked List.
   */
  getSize() {
    return this.size;
  }

  /**
   * head() returns the first node in the list.
   */
  getHead() {
    return this.head;
  }

  /**
   * tail() returns the last node in the list.
   */
  getTail() {
    return this.tail;
  }

  /**
   * at(index) returns the node at the given index.
   * Linked lists don't have direct indexing like arrays. Instead, we traverse the list node by node until we reach the desired index.
   * Traversing the List: starting from the head, move to the next node repeatedly until you reach the specified index.
   * Bounds Cheking - Ensure the index is valid (i.e. non-negative and less than the size of the list. )
   * @param {number} index
   */
  at(index) {
    if (index < 0) {
      console.error("The index can't be less than 0.");
      return;
    }
    if (index >= this.size) {
      console.error("Index exceeds the size of the list. ");
      return;
    }

    let currentNode = this.head;
    // travers the list by using a loop to move from one node to the next, keeping a counter to track the current position.
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    // Return the value of the node at the specified index.
    return currentNode.value;
  }

  /**
   * Removes the last node from the linked list.
   * 1. First, check if the linked list is empty.
   * 2. Check if there's a single node.
   * 3. Traverse to the second to last node (this.size - 2)
   * 4. update the tail to the second to last node.
   * 5. Remove the last node. Set the 'next' pointer of the new tail node to 'null' to remove the reference to the last node.
   * 6. Decremene the size of the list by one.
   * @returns Popped node data.
   */
  pop() {
    if (this.size === 0) {
      console.error("Nothing to pop because the list is size 0.");
      return;
    }
    if (this.size === 1) {
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return poppedNode.data;
    }
    let secondToLast = this.head;
    // traverse to the second to lat node using a for loop.
    for (let i = 0; i < this.size - 2; i++) {
      secondToLast = secondToLast.next;
    }
    // Store the last node to return it's data.
    const poppedNode = this.tail;

    // update the tail
    this.tail = secondToLast;

    // set the next pointer to the null
    secondToLast.next = null;

    // decrement the size
    this.size--;

    return poppedNode.value;
  }

  /**
   * contains(value) returns true if the passed in value is in the list and otherwise returns false.
   * Check if the list is empty. If it's empty return a message.
   * Traverse the list and use includes() method to check if the value is contained.
   * If it's contained, return true.
   * else return false.
   */

  contains(value) {
    if (this.size === 0) {
      return false;
    }
    let currentNode = this.head;
    // traverse the linked list
    for (let i = 0; i < this.size; i++) {
      // check if value is contained in node value.
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  /**
   * find(value) returns the index of the node containing value , or null if not found.
   *
   */
  find(value) {
    if (this.size === 0) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  /**
   * toString prints out the linkedList objecsts as strings in the following format:
   * ( value ) -> ( value ) -> ( value ) -> null
   */
  toString() {
    if (this.size === 0) {
      console.error("Nothing in linked list.");
      return null;
    }

    let currentNode = this.head;
    let printString = "";
    // traverse the list
    for (let i = 0; i < this.size; i++) {
      printString += "( ";
      printString += currentNode.value;
      printString += " ) -> ";
      currentNode = currentNode.next;
    }
    printString += "null";
    return printString;
  }

  ///EXTRA CREDIT/////

  /**
   * insertAt(value,index) inserts a new node with the provided value at the given index.
   * @param {value} - the value you want to insert.
   * @param {number} - the index you choose.
   *
   */

  insertAt(value, index) {
    // first check for valid index
    if (index < 0 || index >= this.size) {
      error.log("Invalid index yo");
    }

    let nodeBefore = this.head;
    // Iterate through the linked list to find the node before the desired index.
    for (let i = 0; i < index - 1; i++) {
      nodeBefore = nodeBefore.next;
    }

    // create a new node
    let newNode = new Node(value);

    // assign the newNode.next to the node at index 3.
    newNode.next = nodeBefore.next;

    //assign before node.next to point to new node
    nodeBefore.next = newNode;
  }

  /**
   * removeAt(index) removes the node at the given index
   * @param {number} - index
   */
  removeAt(index) {
    // first check for valid index
    if (index < 0 || index >= this.size) {
      error.log("Invalid index yo");
    }
    let nodeBefore = this.head;
    // Iterate through the linked list to find the node before the desired index.
    for (let i = 0; i < index - 1; i++) {
      nodeBefore = nodeBefore.next;
    }
    // initializes the node after that is to be removed.
    let nodeAfter = nodeBefore.next.next;

    nodeBefore.next = nodeAfter;
  }
}

export default LinkedList;
