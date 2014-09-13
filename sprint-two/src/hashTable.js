var HashTable = function(){
  this._limit = 8;
  this._maxLimit = Math.floor((3*this._limit)/4);
  this._minLimit = Math.floor(this._limit/4);
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);
  if (slot === undefined){
  	this._storage.set(i,[[k,v]]);
  } else {
    for (var j = 0; j < slot.length; j++){
      if(slot[j][0] == k) {
        slot[j][1] =v;
        return;
      }
    }
  	slot.push([k,v]);
  }
  this._count++;
  this._checkSize();
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);
  if (slot) {
  	for (var index = 0; index < slot.length; index++){
  		if (slot[index][0] === k){
  			return slot[index][1];
  		}
  	}
  }
  return null;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var slot = this._storage.get(i);
	if (slot) {
		for(var index = 0; index < slot.length; index++){
			if(slot[index][0] === k){
				slot.splice(index);
        this._count--;
        this._checkSize();
			}
		}
	}
};

HashTable.prototype._checkSize = function(){

  if (this._count > 6 && this._limit === 8){
    this._limit = Math.min(this._limit*2, 64);
    //this._limit = 16;
    this._reHash();

  }
  else if (this._count <= 2 && this._limit > 8){
    this._limit = Math.max(this._limit/2, 8);
    //this._limit = 8;
    this._reHash();
  }

}

HashTable.prototype._reHash = function(){
  var newStorage = makeLimitedArray(this._limit);
  var limit = this._limit;
  this._storage.each(function(slot){
    if (slot !== undefined){
      for (var i = 0; i < slot.length; i++){
        var newIndex = getIndexBelowMaxForKey(slot[i][0], limit);
        if (newStorage.get(newIndex) === undefined){
          newStorage.set(newIndex, [slot[i]]);
        } else {
          newStorage.get(newIndex, slot[i]).push(slot[i]);
        }
      }
    }
  });
  this._storage = newStorage;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
