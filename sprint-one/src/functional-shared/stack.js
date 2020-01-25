var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};

  newStack.storage = {};//needed to store stacks
  newStack.push = stackMethods.stackPush;
  newStack.pop = stackMethods.stackPop;
  newStack.size = stackMethods.stackSize;
  return newStack;
};

var stackMethods = {};//stores all methods

//Method for push
stackMethods.stackPush = function (value) {
  var currNum = this.size();
  this.storage[currNum] = value;
}

//Method for pop
stackMethods.stackPop = function() {
  var lastNum = this.size();
  var deletedItem = this.storage[lastNum-1]; // var holding item to be deleted.
  delete this.storage[lastNum-1]; // delete last item.
  return deletedItem; // return deleted item.
}

//Method for size
stackMethods.stackSize = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};