
// ===== 1. Create a linked list class =====
// include insertFirst, insertLast, remove, find

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertCycleItem(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } 
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, this.head);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  // inserts a new node before a given node containing a key
  insertBefore(item, node){
    // if no nodes, use insertFirst
    if (this.head === null) {
      this.insertFirst(item);
    }
    else{
      // track the address of current and previous node
      let currNode = this.head;
      let previousNode = this.head;

      // traverse to the insertion point
      while ((currNode !== null) && (currNode.value !== node)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      // create the node
      let newNode = new _Node(item, null);
      // set the new node's next pointer 
      newNode.next = previousNode.next;
      // set the previous node's next pointer to new node
      previousNode.next = newNode;
    }
  }
  // inserts a new node after a node containing a key
  insertAfter(item, node){
    // if no nodes, insert first
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
    // track the address of current and next node
      let currNode = this.head;
      let nextNode = currNode.next;

      // traverse to the insertion point
      while ((currNode !== null) && (currNode.value !== node)) {

        currNode = currNode.next;
        nextNode = currNode.next;
      }
      // create the node
      let newNode = new _Node(item, null);
      // set the new node's next pointer to ---
      newNode.next = nextNode;
      // set the previous node's next pointer to new node
      currNode.next = newNode;
    }
  }
  
  // inserts an item at a specific position in the linked list
  insertAt(item, position){
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;
      let positionCounter = 0;

      // traverse to the insertion point
      while ((currNode !== null) && (positionCounter !== position)) {
        previousNode = currNode;
        currNode = currNode.next;
        positionCounter++;
      }
      // create the node
      let newNode = new _Node(item, null);
      // set the new node's next pointer to ---
      newNode.next = previousNode.next;
      // set the previous node's next pointer to new node
      previousNode.next = newNode;
    }
  }
}

let SLL = new LinkedList;
let empty = new LinkedList;

// ===== 2. Create a singly linked list =====
// Write a function using a linked list 
// add items: Apollo, Boomer, Helo, Husker, Starbuck
function main(ll) {

  ll.insertFirst('Apollo');
  ll.insertLast('Boomer');
  ll.insertLast('Helo');
  ll.insertLast('Husker');
  ll.insertLast('Starbuck');
  ll.insertLast('Tauhida');
  ll.remove('squirrel');
  ll.insertBefore('Athena', 'Boomer');
  ll.insertAfter('Hotdog', 'Helo'); 
  ll.insertAt('Kat', 2);
  ll.remove('Tauhida');

  return(ll);
} 

main(SLL);

// ===== 3. Supplemental functions for a linked list =====

// DISPLAY - displays the linked list
function print(ll) {
  let currNode = ll.head;
  let list = [];
  while (currNode !== null) {
    list.push(currNode.value);
    currNode = currNode.next;
  }
  console.log(list);
}

print(SLL);
// SIZE - returns the size of the linked list
function size(ll) {
  let currNode = ll.head;
  let size = 0;
  while (currNode !== null) {
    size++;
    currNode = currNode.next;
  }
  return size;
}

console.log('Size: ', size(SLL));

// ISEMPTY - finds if the list is empty or not without using size
function isEmpty(ll) {
  let currNode = ll.head;
  if (!currNode) {
    return 'This list is empty';
  }
  else {
    return 'This list is not empty!';
  }
}

console.log('Is empty (false): ', isEmpty(SLL));
console.log('Is empty (true): ', isEmpty(empty));

// FINDPREVIOUS - finds the node before the item you are looking for
function findPrevious(ll, item){
  let currNode = ll.head;
  let previousNode = ll.head;

  if (!ll.head) {
    return null;
  }

  while (currNode.value !== item) {
    // If we get to the end without finding a match
    if (currNode.next === null) {
      return null;
    }
    else {
      previousNode = currNode;
      currNode = currNode.next;
    }
  }
  return `${previousNode.value} comes before ${item}`;
}

console.log('Find previous: ', findPrevious(SLL, 'Boomer'));


// FINDLAST - finds the last node in the linked list

function findLast(ll) {
  let currNode = ll.head;
  if (!ll.head) {
    return null;
  }

  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return `${currNode.value} is the last item!`;
}

console.log('Find last: ', findLast(SLL));

// ===== 4. Mystery Program =====
// Analyze the following function (without running it in
// an IDE) to determine what problem it is trying to solve.
// What is the time complexity of this algorithm?

//Myster program is trying to solve:
//  WhatDoesThisProgramDo takes in a list.  The program sets the variable current to the list's head.  While the current (node) is not null, the program creates the variable newNode and sets it to the current node.  While the newNode's next does not equal null (the end of the list) the program checks to see if the next node after the newNode's value is equal to the current value (if the current node and the node after are the same?) If so, the program sets the newNode's next to the next node's next?  

// I think this program is looking for duplicate values and removing duplicates from the list so that each list value is unique?

//Time Complexity:  O(n)?  It's only going through the list once?

// ===== 5. Reverse a list =====
// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.

function reversePointers(ll) { //<---- Reverse not working yet, all but how to end is implemented
  let currNode = ll.head;
  let previousNode = ll.head;
  let nextNode = currNode.next;

  while (currNode !== null) {
    console.log('=====');
    if (currNode === ll.head) {
      currNode.next = null;
      console.log('Setting pointer of', currNode.value, 'to null');
    } 
    else {
      currNode.next = previousNode;
      console.log('Setting pointer of', currNode.value, 'to previous', previousNode.value);
    }
    previousNode = currNode;
    currNode = nextNode;
    nextNode = (!currNode.next)? null : currNode.next;
  }
  return (ll);
}

//console.log('Reverse pointers: ', reversePointers(SLL));

// ===== 6. 3rd from the end =====

function thirdFromTheEnd(ll) {
  let currNode = ll.head;
  let threeAway = currNode.next.next.next;

  while (currNode !== null) {
    if (threeAway === null) {
      return currNode.value;
    }
    else {
      currNode = currNode.next;
      threeAway = currNode.next.next.next;
    }
  }
}

console.log('Third from the end: ', thirdFromTheEnd(SLL));

// ===== 7. Middle of a list =====
// how to find the middle without length or size
// "Two pointers travel over the list, one with double speed. When the fast one reaches the end, the other one is half-way." https://cs.stackexchange.com/questions/56219/how-to-find-middle-element-of-linked-list-in-one-pass

function middleOfList(ll) {
// Two pointers
  let slowPointer = ll.head;
  let fastPointer = ll.head;

  while (fastPointer !== null) {
    if (fastPointer.next === null) {
      return slowPointer.value;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer.value;
}

console.log('Middle of the list: ', middleOfList(SLL));

// ===== 8. Cycle in a list =====
// Research: "Floyd’s Cycle-Finding Algorithm: This is the fastest method and has been described below:

// Traverse linked list using two pointers. 
// Move one pointer(slow_p) by one and another pointer(fast_p) by two. 
// If these pointers meet at the same node then there is a loop. If pointers do not meet then linked list doesn’t have a loop" Credit: https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/

let CycleLL = new LinkedList;
function cycleCreator(ll) {
  ll.insertFirst('Apollo');
  ll.insertLast('Boomer');
  ll.insertLast('Helo');
  ll.insertCycleItem('Husker');

  return ll;
}
// <-- creating a cycle list not working yet
console.log('CYCLE LIST', CycleLL);

function cycleInAList(ll) {
  // create two pointers
  let slowPointer = ll.head;
  let fastPointer = ll.head;

  while (slowPointer !== null) {
    if (fastPointer === null) {
      return 'No loop detected';
    } 

    if (slowPointer === fastPointer) {
      return 'Loop detected!';
    }

    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
}

//console.log('Cycle in a list: ', cycleInAList(cycleList));

// ===== 9. Doubly linked list =====

function doublyLinkedList() {}

//console.log('Doubly linked list: ', doublyLinkedList());

// ===== 10. Reverse a DLL =====

function reverseDLL() {}

//console.log('Reverse doubly linked list: ', reverseDLL());
