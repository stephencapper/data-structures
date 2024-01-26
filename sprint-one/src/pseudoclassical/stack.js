var Stack = function() {
  this.storage = {};
  this._size = 0; // previous size here and size down there caused a problem
};



Stack.prototype.push = function(value) {
  this.storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function() {
  if (this._size === 0) {
    return undefined;
  }
  this._size--;
  var result = this.storage[this._size];
  delete this.storage[this._size];
  return result;
};

Stack.prototype.size = function() {
  return this._size;
};