var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //adds to set:
  this._storage[item] = true;

};

setPrototype.contains = function(item) {
  //checks if item is there or not
  if (this._storage[item]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  //just use delete
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//The time Complexity for all 3 functions is O(1) constant time.