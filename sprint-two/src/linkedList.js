

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    // new node created
    var newNode = new Node(value);

    //Edge cases - list is empty
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    //Edge cases - head equals tail
    } else if (list.head === list.tail) {
      list.head.next = newNode;
      list.tail = newNode;
    } else {
      //find the previous tail
      var previousTail = list.tail;

      //make the newNode the tail
      list.tail = newNode;

      //make the pointer for previous tail point to new tail
      previousTail.next = newNode;
    }
  };

  list.removeHead = function() {
    //empty linked list

    if (list.head === null) {
      return undefined;
    }

    //find head (first node)
    var currentHead = list.head;

    //store value of first node
    var currentHeadValue = currentHead.value;

    //node after head is new head
    list.head = list.head.next;

    //remove first node
    delete currentHead;

    //return value of head being removed
    return currentHeadValue;
  };

  list.contains = function(target) {
    //empty list
    if (list.head === null) {
      return false;
    }
    //create result equal to false
    var obj = list.head;
    //iterate over the list maybe with a while
    while (obj.next !== null) {
      //if value is found
      if (obj.value === target) {
        return true;
      }
      //iterate
      obj = obj.next;
    }
    //check tail
    if (obj.value === target) {
      return true;
    }
    //return false if never true
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 //addToTail's Time complexity:  Should be O(1) because no loops

 //removeHead's Time complexity: Should be O(1) as well because of the same reasons

 //contains's Time complexity: O(n) where n is length of list because we have one while loop that we are using to check over our target value within the list.

 */
