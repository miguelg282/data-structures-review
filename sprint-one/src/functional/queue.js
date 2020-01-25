var Queue = function() {
  var someInstance = {};//holds methods.

  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // var keyLength = Object.keys(storage).length; //current length of Storage.
    // for ( var i = keyLength - 1; i > -1; i--) {//iterate through keyLength -1 to match key value.
    //   storage[i + 1] = storage[i]
    // }
    storage[end++] = value;
  };

  someInstance.dequeue = function() {
    // var lastVal = someInstance.size(); //num representing current size
    // var deletedVal = storage[lastVal - 1]; 
    // delete storage[lastVal - 1]; // deletes the val at jast index - 1;
    // return deletedVal;
    var deleteItem = storage[start]
    delete storage[start];
    start++;
    return deleteItem;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
