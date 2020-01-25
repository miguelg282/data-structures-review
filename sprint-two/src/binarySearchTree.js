var BinarySearchTree = function(value) { //passed in value.
    var newTree = {}; //holds new nodes.
    newTree.value = value; // 
    // your code here
    newTree.children = [];  // fix me, add children to this array.
    newTree.left = this.value;
    newTree.right = this.value;
  
    _.extend(newTree, bstMethods);
    return newTree;
  };
  
  var bstMethods = {}; //this holds the methods.
  
  bstMethods.insert = function(value) {  
  //if parent is empty, new node is parent.
  //else each new node is a child.
  //BST value = 5;
    //this.newTree.children.push(newTree.value);
    var newChild = BinarySearchTree(value);
    this.children.push(newChild);
    //each new child is a Tree. each Tree has a value and a child.

    if(newChild.value > this.value){
        newChild.right = value;
    } else {
        newChild.left = value;
    }
  };
  
  bstMethods.contains = function(target) {
    if(this.value === target){ //this checks parent node.
      return true;
    }
    if(this.children.length){ //if children 
      for (var i  = 0; i < this.children.length; i++){ //iterate over children contains(target)
        if (this.children[i].contains(target)) { //if contains has target, then returns true.
          return true;
        }
      } 
    }
    return false;
  
  };

  bstMethods.depthFirstLog = function() {

  };
  
  /*
   * Complexity: What is the time complexity of the above functions?
   */
  