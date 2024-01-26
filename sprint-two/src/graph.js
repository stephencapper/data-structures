// Instantiate a new graph
var Graph = function() {
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  //delete references to the node being deleted from the edge array references in other nodes
  var nodesObj = this.nodes;
  _.each(nodesObj[node], function(otherNode) {
    var indexNode = nodesObj[otherNode].indexOf(node);
    nodesObj[otherNode].splice(indexNode, 1);
  });
  delete nodesObj[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  //iterate over fromNodes and check if toNode is present
  _.each(this.nodes[fromNode], function(node, index, fromNodeArray) {
    if (node === toNode) {
      //make result true
      result = true;
    }
  });
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  console.log(this.nodes[fromNode]);
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //find toNode in the array at fromNode and delete it
  var indexToNode = this.nodes[fromNode].indexOf(toNode);
  this.nodes[fromNode].splice(indexToNode, 1);
  //find fromNode in the array at toNode and delete it
  var indexFromNode = this.nodes[toNode].indexOf(fromNode);
  this.nodes[toNode].splice(indexFromNode, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterate over all nodes
  for (var node in this.nodes) {
    //execute the callback on the node
    cb(node);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
O(1): addNode, contains, addEdge
O(n): removeEdge, hasEdge, forEachNode
O(n^2): removeNode

 */


