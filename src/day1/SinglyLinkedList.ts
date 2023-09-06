class Node<T> {
    value: T;
    next: Node<T>;
}

export default class SinglyLinkedList<T> {
    public length: number;

    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    isEmpty(): boolean {
        return this.head === undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error(
                "oh no, you can't insert beyond the list's length.",
            );
        }

        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        const curr = this.getAt(idx) as Node<T>;
        const node = { value: item } as Node<T>;

        const tmp = curr.next;
        curr.next = node;
        node.next = tmp;
    }

    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node; //link previous tail node's next to new tail

        this.tail = node; //set new node to new tail
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }
        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;
        }
        return this.removeNode(node);
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        let prev: Node<T> | undefined;

        if (node.next) {
            prev = this.getPrev(node);
            if (prev && prev.next) {
                prev.next = node.next;
            }
        }

        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = prev;
        }

        return node?.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr;
    }

    private getPrev(item: Node<T>): Node<T> | undefined {
        let curr = this.head;
        while (curr && curr.next !== item && curr !== this.tail) {
            curr = curr.next;
        }
        return curr || this.head;
    }
}
