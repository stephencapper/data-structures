

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //create bucket if don't have already
  if (bucket === undefined) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  }
  //create boolean tracking if key exists set to false
  var keyExists = false;
  //iterate over the array
  for (var i = 0; i < bucket.length; i += 2) {
    if (bucket[i] === k) {
      bucket[i + 1] = v;
      keyExists = true;
    }
  }
  if (!keyExists) {
    bucket.push(k);
    bucket.push(v);
  }
  //if the key already exists
  //change value at key
  //make boolean true
  //if boolean is push the key value pair to the bucket



};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i += 2) {
    if (bucket[i] === k) {
      return bucket[i + 1];
    }
  }
  //note will be undefined if not found
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i += 2) {
    if (bucket[i] === k) {
      //delete value at i and value at i + 1 from array bucket
      bucket.splice(i, 2);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * Approximates O(1); On average would be O(1),
 * but in worse case would be O(n) where n is number of elements stored
 * which is generally shorter than the length of the storage itself
 */




