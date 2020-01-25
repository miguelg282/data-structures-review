var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.front = 0;
  return newQueue;
};

var queueMethods = {};

//method for enqueu
queueMethods.enqueue = function(value) {
  var sizeNum = this.size();// current size is keys.length
  var frontNum = this.front;
  var currNum = sizeNum + frontNum; //front num val + keys.length;
  this.storage[currNum] = value;
};

//method for dequeue
queueMethods.dequeue = function() {
  var deleteNum = this.front
  var deleteStack = this.storage[deleteNum];
  delete this.storage[deleteNum];
  this.front++;
  return deleteStack;
};

//method for size
queueMethods.size = function() {
  var keys = Object.keys(this.storage);
  return keys.length;
};

