  var HashTable = function() {
    this._limit = 8;
    // this.count = 0;
    this._storage = LimitedArray(this._limit);
  };
  HashTable.prototype.insert = function(k, v) {
    //given an index, retrieve a bucket.
    var idx = getIndexBelowMaxForKey(k, this._limit);
    //retrieve bucket
    var bucket = this._storage.get(idx);

    //!if bucket exists, create it.
    if (!bucket){
      bucket = [];
      this._storage.set(idx, bucket)
    };
    var found = false;
    //iterate over bucket
    for (var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      //key exists?
      if(bucket[i] === k){
        //update it
        bucket[1] = v;
        break;
      }
    }
    //if no key found
    if(!found){
      bucket.push(k, v);
    }
  };

  HashTable.prototype.retrieve = function(k) {
    var idx = getIndexBelowMaxForKey(k, this._limit);

    var bucket = this._storage.get(idx);
      //!if exists
    if (!bucket) {
      return undefined;
    };
    
    //var found = false;
    //iterate over bucket
    for (var i = 0; i < bucket.length; i++){
      //key exists?
      if(bucket[i] === k){
        return bucket[i+1];
      }
    }
  return undefined;
  };

  HashTable.prototype.remove = function(k) {
    var idx = getIndexBelowMaxForKey(k, this._limit);

    var bucket = this._storage.get(idx);
      //!if exists
    if (!bucket){
      return null;
    };

    // var found = false;
    //iterate over bucket
    for (var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      //key exists?
      if(bucket[0] === k){
        bucket.splice(i, 1);
        return tuple;
      }
    }
  return null;
  };

  /*
  * Complexity: What is the time complexity of the above functions?
  */


