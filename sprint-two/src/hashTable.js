var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var slot = this._storage.get(i);
  if (slot === null || slot === undefined){
  	this._storage.set(i,[[k,v]]);
  } else {
    for (var j = 0; j < slot.length; j++){
      if(slot[j][0] == k) {
        slot[j][1] =v;
        this._storage.set(i, slot);
        return; 
      }
    }
  	slot.push([k,v]);
  	this._storage.set(i, slot);
  }
  //this._storage.set(i, v);
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
  //return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var slot = this._storage.get(i);
	if (slot) {
		for(var index = 0; index < slot.length; index++){
			if(slot[index][0] === k){
				slot[index].splice(index);
			}
		}
	}
	//this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
