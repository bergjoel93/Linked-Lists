import LinkedList from "./LinkedList.js";

/**
 * Acts as the main method.
 */

let linkedList = new LinkedList();

linkedList.append("link-1");
linkedList.append("link-2");
linkedList.append("link-3");
linkedList.append("link-4");
linkedList.append("link-5");
linkedList.append("link-6");

console.log("Original Linked List:", linkedList.toString());

// Testing

// append
linkedList.append("new link");
console.log("Appeneded Linked List:", linkedList.toString());

// Prepend
linkedList.prepend("prepended link");
console.log("Prepended Linked List:", linkedList.toString());

// size
console.log("Size:", linkedList.getSize());

// head
console.log("head:", linkedList.getHead());

// tail
console.log("tail:", linkedList.getTail());

// at(index)
console.log("value at index 3:", linkedList.at(3));

//pop
console.log("Popped value: ", linkedList.pop());
console.log("updated list after pop:", linkedList.toString());

// contains(value)
console.log(
  "does linked list contain 'link-4'?",
  linkedList.contains("link-4")
);

// find(value)
console.log("What index is value 'link-3' at?", linkedList.find("link-3"));

// insertAt(value,index)
console.log("insert 'foo' at index 3");
linkedList.insertAt("foo", 3);
console.log("updated linked list:", linkedList.toString());

// removeAt(value,index)
console.log("remove 'foo' at index 3");
linkedList.removeAt(3);
console.log("updated linked list:", linkedList.toString());
