var Queue = function() {
  var queue = {};
  queue.storage = {};
  queue.front = 0;
  queue.back = 0;

  // Extend the queue object
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back++;
  },
  dequeue: function() {
    if (this.front === this.back) {
      return undefined;
    }
    var result = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return result;
  },
  size: function() {
    return this.back - this.front;
  }
};
