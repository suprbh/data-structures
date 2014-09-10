var makeQueue = function(){
  var que = Object.create(queueMethods);
  que.len = 0;
  que.storage = {};
  return que;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  for (var i=this.len; i>0; i--){
      this.storage[i] = this.storage[i-1];
    }
    this.storage[0] = value;
    this.len++;
};

queueMethods.dequeue = function(){
  var result;
    if (this.len > 0) {
      this.len--;
      result = this.storage[this.len];
      delete this.storage[this.len];
    }
    return result;
};

queueMethods.size = function(){
  return this.len;
};


