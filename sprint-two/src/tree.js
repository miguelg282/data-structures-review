var Tree = function(value) { //passed in value.
  var newTree = {}; //holds new nodes.
  newTree.value = value; // 
  // your code here
  newTree.children = [];  // fix me, add children to this array.

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {}; //this holds the methods.

treeMethods.addChild = function(value) {  
//if parent is empty, new node is parent.
//else each new node is a child.
  //this.newTree.children.push(newTree.value);
  var newChild = Tree(value);
  this.children.push(newChild);
  //each new child is a Tree. each Tree has a value and a child.
};

treeMethods.contains = function(target) {
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

/*
 * Complexity: What is the time complexity of the above functions?
 */
