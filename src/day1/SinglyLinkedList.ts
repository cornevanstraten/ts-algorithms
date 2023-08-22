class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;

    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    prepend(item: T): void {
        const newNode = new Node(item);
        newNode.next = this.head;
        this.head = newNode;
        if (this.tail === null) {
            this.tail = newNode;
        }
    }

    insertAt(item: T, idx: number): void {}

    append(item: T): void {
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        return curr?.data;
    }
    removeAt(idx: number): T | undefined {}
}
