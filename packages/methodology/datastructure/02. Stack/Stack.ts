class Stack {
    maxSize: number;
    stack: never[];
    top: number;
    constructor() {
        this.maxSize = 100;
        this.stack = [];
        this.top = -1;
    }

    push(value) {
        if(this.isFull()) {
            return false;
        }

        this.top++;
        this.stack[this.top] = value;
        return true;
    }

    pop() {
        if(this.isEmpty()) {
            return null;
        }
        // const valueToReturn = this.stack[this.top];
        this.top--;
        // return valueToReturn;
        return this.stack.pop();
    }

    peek() {
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.maxSize - 1;
    }
}