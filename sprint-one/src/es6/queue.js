class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.startIndex = 0;
    this.endIndex = 0;
  }

  enqueue(value) {
    this.storage[this.endIndex] = value;
    this.endIndex++;
  }

  dequeue() {
    if (this.size() === 0) {
      return undefined;
    }
    const result = this.storage[this.startIndex];
    delete this.storage[this.startIndex];
    this.startIndex++;
    return result;
  }

  size() {
    return this.endIndex - this.startIndex;
  }
}