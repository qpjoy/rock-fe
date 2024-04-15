class LinkedList {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    addToHead(value) {
        // 先生成Node节点
        const newNode = new Node(value, this.head, this.tail);
        // 1. 如果存在链表头，改变当前的头指向
        // 2. 如果不存在，尾巴改成该节点
        // 3. 链表头改成新节点
        if(this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
    }

    addToTail(value) {
        // 生成新节点
        const newNode = new Node(value, null, this.tail);
        // 1. 如果是空链表，头尾都需要改成newNode
        // 2. 如果是非空，尾节点的next = newNode，
        if(!this.tail) {
            this.head = newNode;
        }else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    
    removeHead() {
        // 如果空链表，返回null
        if(!this.head) return null;
        // 获取头的值
        const value = this.head.value;
        // 断开头的链接
        this.head = this.head.next;
        // 如果还存在头，把头的prev改成null
        if(this.head) {
            this.head.prev = null;
        }else {
            this.tail = null;
        }
        return value;
    }

    removeTail() {
        // 如果是空链表，返回null
        if(!this.tail) return null;
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if(this.tail) {
            this.tail.next = null;
        }else {
            this.head = null;
        }
        return value;
    }

    search(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) return currentNode.value;
            currentNode = currentNode.next;
        }
        return null;
    }

    indexOf(value) {
        let currentNode = this.head;
        let indexes = [];
        let currentIndex = 0;
        while(currentNode) {
            if(currentNode.value === value) {
                indexes.push(currentIndex)
            }
            currentIndex++;
            currentNode = currentNode.next;
        }
        return indexes;
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

let ll = new LinkedList();
ll.addToHead(1);
ll.addToHead(2);
ll.addToHead('world');
ll.addToTail(3);
ll.addToTail(4);
ll.addToTail(2);
ll.addToTail(1);
ll.addToTail('hello');

console.log(ll.search('hello'), ll.removeHead(), ll.removeHead(), ll.removeTail(), ll.indexOf(1));