var BinarySearchTree = function(value) {

  var obj = Object.create(BinarySearchTree.prototype);

  obj.value = value;
  obj.left = null;
  obj.right = null;

  return obj;

  //obj.value = value;
  //this.prototype.value = value;
  //this.value = value;

};

BinarySearchTree.prototype.insert = function(value) {
  if (value === this.value) {
    return;
  } else if (value < this.value) {
    if (this.left === null) {
      //create new instance of binary search tree with value
      this.left = new BinarySearchTree(value);

    } else {
      //recurse insert on the object at left
      this.left.insert(value);
    }

  } else if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

};

BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value && this.left !== null) {
    return this.left.contains(value);
  } else if (value > this.value && this.right !== null) {
    return this.right.contains(value);
  }
  return false;

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  //callback value
  cb(this.value);

  //check left
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  //check right
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */


// The time complexities:
//insert function: O(log n)

//contains function: O(log n)

//depthFirstLog function: O(n)
