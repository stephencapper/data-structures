var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.front = 0;
  instance.back = 0;

  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    //adding values to the back
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


