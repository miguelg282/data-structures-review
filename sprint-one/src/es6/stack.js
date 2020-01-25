class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var currNum = this.size();
    this.storage[currNum] = value;
  }

//methods for pop
  pop() {
    var lastNum = this.size();
    var deletedItem = this.storage[lastNum-1]; // var holding item to be deleted.
    delete this.storage[lastNum-1]; // delete last item.
    return deletedItem; // return deleted item.
  }

//methods for size
  size() {
    var keys = Object.keys(this.storage);
    return keys.length;
  }

}

