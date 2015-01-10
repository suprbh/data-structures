var makeBinarySearchTree = function(value){
  var newBSTree = {};
  newBSTree.value = value;
  newBSTree.left = null;
  newBSTree.right = null;
  _.extend(newBSTree, bsTreeMethods);
  return newBSTree;
};

var bsTreeMethods = {};

bsTreeMethods.insert = function(value){
  var newNode = makeBinarySearchTree(value);
  var result = this._find(this, value);
  if (result[1] === -1){
    result[0].left = newNode;
  } else if (result[1] === 1){
    result[0].right = newNode;
  }
};

bsTreeMethods.contains = function(value){
  return this._find(this, value)[1] === 0;
};

bsTreeMethods.depthFirstLog = function(callback){
  var walk = function(node){
    callback(node.value);
    if (node.left !== null){
      walk(node.left);
    }
    if (node.right !== null){
      walk(node.right);
    }
  };
  walk(this);
};

bsTreeMethods._find = function (node, value){
  // returns array of [node, flag] where flag is:
  //   -1 if value < node.value,
  //    0 if value = node.value, or
  //    1 if value > node.value
  if (value > node.value){
    if (node.right === null){
      return [node, 1];
    } else {
      return node._find(node.right, value);
    }
  } else if (value < node.value){
    if (node.left === null){
      return [node, -1];
    } else {
      return node._find(node.left, value);
    }
  } else {
    return [node, 0];
  }
}

/*var findAndInsert = function(node){
    if (node.value < value){
      if (node.right === null){
        node.right = newNode;
      } else {
        findAndInsert(node.right);
      }
    } else if (node.value > value){
      if (node.left === null){
        node.left = newNode;
      } else {
        findAndInsert(node.left);
      }
    }
  };*/



// function to take a node
// find

/*
 * Complexity: What is the time complexity of the above functions?
 */
