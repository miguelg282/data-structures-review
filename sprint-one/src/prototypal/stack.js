var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

//method for push
stackMethods.push = function(value) {
  var currNum = this.size();
  this.storage[currNum] = value;
};

//method for pop
stackMethods.pop = function() {
  var lastNum = this.size();
  var deletedItem = this.storage[lastNum-1]; // var holding item to be deleted.
  delete this.storage[lastNum-1]; // delete last item.
  return deletedItem; // return deleted item.
};

//method for size
stackMethods.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};

