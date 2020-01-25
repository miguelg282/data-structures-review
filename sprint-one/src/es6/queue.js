class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0;
  }

    enqueue(value) {
      var sizeNum = this.size();// current size is keys.length
      var frontNum = this.front;
      var currNum = sizeNum + frontNum; //front num val + keys.length;
      this.storage[currNum] = value;
  };

//method for dequeue
  dequeue() {
    var deleteNum = this.front
    var deleteStack = this.storage[deleteNum];
    delete this.storage[deleteNum];
    this.front++;
    return deleteStack;
  };

//method for size
  size() {
    var keys = Object.keys(this.storage);
    return keys.length;
  };

}
