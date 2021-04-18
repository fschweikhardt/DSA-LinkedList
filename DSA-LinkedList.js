'DSA-LinkedList'

class _Node {
    constructor(value, next) {
      this.value = value
      this.next = next
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
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    insertBefore(newItem, beforeItem) {
        if (this.head === null) {
          this.insertFirst(newItem)
          return
        }
        let currNode = this.head
        let prevNode = this.head
    
        while (currNode !== null && currNode.value !== beforeItem) {
          prevNode = currNode
          currNode = currNode.next
        }
    
        if (currNode === null) {
          this.insertLast(newItem)
          return
        }
    
        const tempNode = new _Node(newItem, currNode)
    
        prevNode.next = tempNode
    }
    insertAfter(newItem, afterItem) {
        if (this.head === null) {
          this.insertFirst(newItem)
          return
        }
    
        let currNode = this.find(afterItem)
    
        if (currNode === null) {
          this.insertLast(newItem)
          return
        }
    
        const tempNode = new _Node(newItem, currNode.next)
    
        currNode.next = tempNode
    }
    insertAt(item, position) {
        if (this.head === null) {
          this.insertFirst(item)
          return
        }
    
        let currNode = this.head
        let currPosition = 1
    
        while (currPosition < position - 1) {
          currNode = currNode.next
          currPosition++
        }
    
        const tempNode = new _Node(item, currNode.next)
    
        currNode.next = tempNode
      }
}

const main = () => {
    const SLL = new LinkedList()

    // SLL.insertFirst('Apollo')
    // SLL.insertLast('Boomer')
    // SLL.insertLast('Helo')
    // SLL.insertLast('Husker')
    // SLL.insertLast('Starbuck')
    // SLL.insertLast('Tauhida')
    // SLL.remove('Husker')
    // SLL.insertBefore('Helo', 'Starbuck')
    // SLL.insertAfter('Hotdog', 'Helo')
    // SLL.find('Helo')
    // SLL.insertAt('Kat', 3)
    // SLL.remove('Apollo')
    SLL.insertFirst(100)
    SLL.insertLast(200)
    SLL.insertLast(300)
    // SLL.insertLast(2)


    return SLL
}

const LL = main()

function display(list) {
    if (!list.head) return null

    let output = ''
    let currNode = list.head

    while(currNode !== null) {
        output += currNode.value
        if (currNode.next !== null) {
            output += ' -> '
        }
        currNode = currNode.next
    } 

    return output
}
console.log('display: ', display(LL))


function size(list) {
    let size = 0
    let currNode = list.head

    while(currNode !== null) {
        size++
        currNode = currNode.next
    }
    return size
  }
console.log('size', size(LL))


function isEmpty(list) {
    return (list.head === null ? true : false)
}
console.log('isEmpty?', isEmpty(LL))


function findPrevious(item, list) {
    if (!list.head) return null

    let currNode = list.head
    let prevNode = list.head

    while (currNode !== null && currNode.value !== item) {
        prevNode = currNode
        currNode = currNode.next
    }
    if (currNode === null) {
        return 'item not found'
    }
    return prevNode.value
}
console.log('findPrevious: ', findPrevious('Husker', LL))


function findLast(list) {
    if (!list.head) return null
    let currNode = list.head

    while(currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode.value
}
console.log('findLast: ', findLast(LL))


'Mystery program'

'Reverse a list'

function reverseList(list) {
    if (!list.head) return null

    let currNode = list.head
    let reversedCurrent

    while (currNode !== null) {
        let tempNode = currNode.next
        currNode.next = reversedCurrent
        reversedCurrent = currNode
        currNode = tempNode
    }

    return reversedCurrent
  }
//console.log(reverseList(LL))


'3rd from the end'

function thirdFromEnd(list) {
    if (!list.head) return null
    let currNode = list.head
    if (!currNode.next) return 'only 1 item!'
    if (!currNode.next.next) return 'only 2 items!'
    while (currNode.next.next.next !== null) {
        currNode = currNode.next
    }
    return currNode.value
}

console.log('thirdFromEnd', thirdFromEnd(LL))

'Middle of a list'

function findMiddle (list) {
    if (!list.head){
      return null
    }
    else if (!list.head.next){
      return list.head
    }
    else {
      let fast = list.head;
      let slow = list.head;
  
      while ((fast !== null) && (fast.next !== null)){
        fast  = fast.next.next
        slow = slow.next
      } 
      return slow.value;
    }
  }
  console.log('findMiddle', findMiddle(LL))


'Cycle in a list'

function cycle(list) {
    if (!list.head) return null
    let currNode = list.head
    let newCurrNode = list.head
    while (currNode !== null) {
        console.log(currNode)
        if (currNode.next === null) {
            currNode.next = newCurrNode
        }
        currNode = currNode.next
    }
}

//creates an infinite loop
//console.log('cycle', cycle(LL))


'Sorting a list'

function sort(list) {
    if (!list.head) return null
    let currNode = list.head
    let x = currNode.value
    let y = currNode.next.value
    let sortedList
    return x > y ? x : y
}

console.log('sort', sort(LL))