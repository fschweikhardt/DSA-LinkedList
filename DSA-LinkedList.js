'DSA-LinkedList'

class _Node {
    constructor(val, next) {
      this.val = val
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
    
        while (currNode !== null && currNode.val !== beforeItem) {
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

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    // SLL.insertLast('Tauhida')
    // SLL.remove('Husker') // remove not working
    // SLL.insertBefore('Helo', 'Starbuck')
    // SLL.insertAfter('Hotdog', 'Helo')
    // SLL.find('Helo')
    //SLL.insertAt('Kat', 3)
    // SLL.remove('Apollo') // remove not working

    return SLL
}

const LKDLST = main()
//console.log(LKDLST)

const display = LL => {
    let output = ''
    let currNode = LL.head
    if (LL.head === null) {
        return 'nothing to display'
    }
    while(currNode !== null) {
        output += currNode.val
        if(currNode.next !== null) {
            output += ' -> '
        }
        currNode = currNode.next
    } 
     return output
}
console.log('display', display(LKDLST))


const size = LL => {
    let size = 0
    let currNode = LL.head
    while(currNode !== null) {
        size++
        currNode = currNode.next
    }
    return size
  }
console.log('size', size(LKDLST))

const isEmpty = LL => {
    return (LL.head === null ? true : false)
}
console.log('Is Empty?', isEmpty(LKDLST))


const findPrevious = (item, LL) => {
    if (LL.head === null) {
        return 'linked list is empty'
    } 
    let currNode = LL.head
    let prevNode = LL.head
    while (currNode !== null && currNode.val !== item) {
        prevNode = currNode
        currNode = currNode.next
    }
    if (currNode === null) {
        return 'item not found'
    }
    return prevNode.val
}
console.log('find previous', findPrevious('Husker', LKDLST))


const findLast = LL => {
    if (LL.head === null) {
        return 'linked list is empty'
    }
    let currNode = LL.head
    while(currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode.val
}
console.log('find last', findLast(LKDLST))


'Reverse a list'

