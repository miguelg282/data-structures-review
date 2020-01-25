var LinkedList = function() {
  var list = {}; 
  
  list.head = null; 
  list.tail = null;

  list.addToTail = function(value) {
    //create a new node
    //new node to be assigned head in head is null.
    //following nodes to be assigned tail. 

    //create new node
    var newNode = new Node(value) 
    // if null then....
    if (list.head === null){ 
      //list.head becomes newNode;
      list.head = newNode;
    } else {                  //else, next new Nodes is tail.next.
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    //when removing, store current head in var to return it before removing.
    //move head reference to list.head.next
    //current list.head to equal list.head.next
    //return old head.

    var oldHead = list.head.value;
    list.head = list.head.next;
    
    return oldHead;

  };

  list.contains = function(target) {
    //currentNode set to head Node.
    //while currentNode is not null, loop.
    //target is the value it's checking. 
    //Returns true/false to check value is either there or not.
    var currentNode = list.head;
    
    while (currentNode !== null) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  // this is were we create new nodes.
  var node = {};

  node.value = value; //this is where value is being added.?M
  node.next = null; //
  //node.next.head?m


  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
