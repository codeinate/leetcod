class LinkedNode {
    public data: number;
    public next: LinkedNode | null;
    
    constructor(val: number) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {
    private _length: number;
    public get length()
    {
        return this.length;
    }

    public head: LinkedNode;
    public tail: LinkedNode;

    constructor(val: number) {
        this.head = new LinkedNode(val);
        this.tail = this.head;
        this._length = 1;
    }

    public append(val: number) {
        const node = new LinkedNode(val);
        const tail = this.tail;
        tail.next = node;
        this.tail = node;
        this._length++;
    }

    public prepend(val: number): void {
        const node = new LinkedNode(val);
        const head = this.head;
        node.next = head;
        this.head = node;
        this._length++;
    }

    public printList(): void {
        let thisNode = this.head;
        const values: number[] = [];

        while(thisNode.next != null) {
            values.push(thisNode.data);
            thisNode = thisNode.next;
        }

        values.push(thisNode.data);

        console.log(values);
    }

    public delete(pos: number): LinkedNode {
        if (pos == 0) 
        {
            const head = this.head;
            this.head = this.head.next as LinkedNode;

            return head;
        }

        const node = this.findNodeByIndex(pos - 1);

        if (pos >= this._length)
        {
            const tail = this.tail;
            
            node.next = null;
            return tail;
        }

        const removedNode = node as LinkedNode;
        const jumpNode = node.next?.next as LinkedNode;

        node.next = jumpNode;

        return removedNode;
    }

    public insert(val: number, pos: number): LinkedNode {
        if (pos == 0) this.prepend(val);
        
        const node = this.findNodeByIndex(pos);
        const next = node.next;

        const newNode = new LinkedNode(val);
        
        newNode.next = next;
        node.next = newNode;

        return newNode;
    }

    public reverse(): void {
        this.printList();
        
        if (!this.head.next)
        {
            return;
        }

        let current = this.head;
        let future = current.next;

        // make next point to head, head will point to nothing at the end
        //scoot each variable forward
        //temp just holds the future next since next will flip around before we can assign it
        while(future) {
            const temp = future.next;
            future.next = current;
            current = future;
            future = temp;
        }

        // null out the tail
        this.head.next = null;
        this.head = current;
        this.printList();
    }

    private findNodeByIndex(pos: number): LinkedNode {
        if (pos > this._length) return this.tail;
        if (pos == 0) return this.head;
        
        let idx = 0;
        let thisNode: LinkedNode | null = this.head;

        while (idx != pos) {
            if (thisNode != null)
            {
                thisNode = thisNode.next;
                idx++;
            }
        }

        return thisNode as LinkedNode;
    }
}

const list = new LinkedList(10);
list.prepend(5);
list.append(7);
list.append(4);
list.delete(0);
list.insert(30, 2);
list.printList();
list.reverse();