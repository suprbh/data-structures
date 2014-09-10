var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var que = {};
  que.len = 0;
  que.storage = {};
  _.extend(que, queueMethods);
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


