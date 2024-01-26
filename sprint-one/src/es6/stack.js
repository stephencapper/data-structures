class Stack {
  constructor() {
    this.storage = {};
    this.currentSize = 0;
  }

  push(value) {
    this.storage[this.currentSize] = value;
    this.currentSize++;
  }

  pop() {
    if (this.currentSize === 0) {
      return undefined;
    }
    this.currentSize--;
    const result = this.storage[this.currentSize];
    delete this.storage[this.currentSize];
    return result;
  }

  size() {
    return this.currentSize;
  }
}