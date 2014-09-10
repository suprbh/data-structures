var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    for (var i=size; i>0; i--){
      storage[i] = storage[i-1];
    }
    storage[0] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result;
    if (size > 0) {
      size--;
      result = storage[size];
      delete storage[size];
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
