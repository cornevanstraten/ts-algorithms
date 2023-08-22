type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        let newNode = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }
        newNode.prev = this.head;
        this.head = newNode;
    }

    pop(): T | undefined {
        if (this.head) {
            const oldHead = this.head;
            this.head = this.head.prev;
            this.length--;
            return oldHead.value;
        } else {
            return undefined;
        }
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
