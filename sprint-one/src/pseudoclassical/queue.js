var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function(value){
  for (var i=this.len; i>0; i--){
      this.storage[i] = this.storage[i-1];
    }
    this.storage[0] = value;
    this.len++;
};

Queue.prototype.dequeue = function(){
  var result;
    if (this.len > 0) {
      this.len--;
      result = this.storage[this.len];
      delete this.storage[this.len];
    }
    return result;
};

Queue.prototype.size = function(){
  return this.len;
};


