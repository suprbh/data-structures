var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if (list.head == null)
    {
      list.head = newNode;
      list.tail = list.head;
    } else {
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }

  };

  list.removeHead = function(){
    var value = list.head.value;;
    if (list.tail) {
      list.head = list.head.next;
    } else {
      list.head = null;
    }
    return value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode) {
      if (target === currentNode.value){
        return true;
      } 
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
