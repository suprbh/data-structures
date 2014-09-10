var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;

    // 
  };

  someInstance.dequeue = function(){

    //shift array
    size && size--;
    var result;
    for (var key in storage) {
      result = storage[key];
      delete storage[key];
      break;
    }
    //result = storage[0];
    // delete storage[0];
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
