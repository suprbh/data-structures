var makeTree = function(value){
  var newTree = {};

  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	var child = makeTree(value);
	var len = this.children.length;
	this.children[len] = child;
  child.parent = this;
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

treeMethods.removeFromParent = function(){
  for (var i = 0; i < this.parent.children.length; i++){
    if(this.parent.children[i] === this){
      this.parent.children.splice(i);
    }
  }
  this.parent = null;
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
