var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here

  //change null to empty array of child objects
  newTree.children = []; // fix me

  // add treeMethods to the newTree
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // find position of where to add within tree
  var currNode = this;
  // sets the input value as a node
  var child = Tree(value);
  //add node as child to tree
  currNode.children.push(child);
};

treeMethods.contains = function(target) {
  var currNode = this;
  //check if current node is target
  if (currNode.value === target) {
    //return true
    return true;
  }
  //iterate over children
  for (var i = 0; i < currNode.children.length; i++) {
    //for each child if recursively called function on child is true
    var child = currNode.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  //return false
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
addChild has complexity O(1)
contains has complexity O(n)
 */
