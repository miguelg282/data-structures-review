var Stack = function() {
  var someInstance = {};
 
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    var currentNum = someInstance.size();
    storage[currentNum] = value;
  };

  someInstance.pop = function() {
    //return what was deleted.
    //find out the last item, delete last item, and return deleted item.
   var lastNum = someInstance.size();
   var deletedItem = storage[lastNum - 1]; // var holding item to be deleted.
   delete storage[lastNum - 1]; // delete last item.
  //  lastNum - 1;
   return deletedItem; // return deleted item.
    
  };

  someInstance.size = function() {
    //after adding 2 items and removing 1, it alerts size of 1.
    var keys = Object.keys(storage).length;
    return keys;
  };
  return someInstance;
};
