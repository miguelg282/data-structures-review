// Instantiate a new graph
var Graph = function() {
    //  this.storage = {};
  };  

Graph.prototype.addNode = function(node) {
  //should store values as nodes when inserted.
  //var val = node;
  this[node] = {};
  this[node].value = node;
  this[node].edges = [];  //storage.1 = [];
  // this.storage[node] = [node];
  //this.storage['edge'];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

    if (this[node].value === node){
      return true;
    }
  
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node].value;
  //this.value--;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var frNode = false;
  var tNode = false;
  for (var i = 0; i < this[fromNode].edges.length; i++){
    if(this[fromNode].edges[i] = this[toNode].value){
      frNode = true;
      break;
    }
  }
    for (var i = 0; i < this[toNode].edges.length; i++){
    if(this[toNode].edges[i] = this[fromNode].value){
      tNode = true;
      break;
    }
  }
  if(frNode && tNode){
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges.push(this[toNode].value);
  this[toNode].edges.push(this[fromNode].value);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var idxFromNode = this[fromNode].edges.indexOf(toNode);
  var idxToNode = this[toNode].edges.indexOf(fromNode);

  this[fromNode].edges.splice(idxToNode, 1);
  this[toNode].edges.splice(idxFromNode, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //iterating through keys for each node in graph. 
  _.each(this, function(node){
    cb(node.value)
  });
 

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph();

