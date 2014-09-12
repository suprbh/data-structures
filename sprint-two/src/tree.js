var makeTree = function(value){
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];
  
  _.extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	var child = makeTree(value);
	var len = this.children.length;
	this.children[len] = child;
};

treeMethods.contains = function(target){
	
	var hasValue = function (currentNode, value){
		if (currentNode.value === target) {
			return true;
		} else {
      // use of underscore.js for this implementation?
			for (var i = 0; i < currentNode.children.length; i++) {
				 if(hasValue(currentNode.children[i], value)) {
				 	return true;
				 }
			}
		}
		return false;
	}

	return hasValue(this, target);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
