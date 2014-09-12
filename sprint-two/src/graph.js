var Graph = function(){
  this.nodes = {};
  this.nodeCount = 0;

};

Graph.prototype.addNode = function(newNode, toNode){
  var node = makeNode(newNode);
  if(this.nodeCount === 1){
    for (var key in this.nodes){
      toNode = this.nodes[key].value;
    }

  } else if(this.nodeCount > 1){
    if (toNode === undefined){
      return;
    }
    else {
      this.addEdge(newNode, toNode);
    }
  }
  this.nodes[newNode]=node;
  this.nodeCount++;
  if (this.nodeCount > 1){
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return (this._find(node) !== undefined);
};

Graph.prototype.removeNode = function(node){
  var thisNode = this._find(node);
  if (thisNode !== undefined){
    for (var key in thisNode.edges){
      this.removeEdge(node, thisNode.edges[key].value);
    }
    delete this.nodes[node];
    this.nodeCount--;
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  //debugger;
  var firstNode = this._find(fromNode);
  if (firstNode === undefined || firstNode.edges[toNode] === undefined){
    return false;
  }
  return true;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //debugger;
  var firstNode = this._find(fromNode);
  if (firstNode === undefined){
    return;
  }
  var secondNode = this._find(toNode);
  if (secondNode === undefined){
    return;
  }

  if (!this.getEdge(fromNode, toNode)){
    firstNode.edges[secondNode.value] = secondNode;
    firstNode.edgeCount++;
    secondNode.edges[firstNode.value] = firstNode;
    secondNode.edgeCount++;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var firstNode = this._find(fromNode);
  if (firstNode === undefined){
    return;
  }
  var secondNode = this._find(toNode);
  if (secondNode === undefined){
    return;
  }
  delete firstNode.edges[toNode];
  firstNode.edgeCount--;
  if (firstNode.edgeCount < 1){
    delete this.nodes[fromNode];
    this.nodeCount--;
  }

  delete secondNode.edges[fromNode];
  secondNode.edgeCount--;
  if (secondNode.edgeCount < 1){
    delete this.nodes[toNode];
    this.nodeCount--;
  }
};

Graph.prototype._find = function(value){
  for (var key in this.nodes){
    var test = this.nodes[key];
    if (test.value === value){
      return test;
    }
  }
  return undefined;
};

var makeNode = function(value){
  var node = {};
  node.edges = {};
  node.value = value;
  node.edgeCount = 0;

  return node;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
