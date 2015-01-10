var HashTable = function(){
  this._limit = 8;
  this._maxLimit = 0.75*this._limit;
  this._minLimit = 0.25*this._limit;
  this._storage = makeLimitedArray(this._limit);
  this._count = 0;

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

// Class code/////////////////
//retrieve a bucket
var bucket = this._storage.get(idx); // idx instead of i
// if not exists, create one
if (!bucket){ // [] is truthy
  bucket = [];
  this._storage.set(idx, bucket);
}

var found = false;
//iterate over bucket
for (var i = 0; i< bucket.length; i++){
  var tuple = bucket[i];
  //key exists?

  if (tuple[0] === k){
    // yes: update it
    tuple[1] = v;
    found = true;
    break;
  }
}
  // no: store new tuple
  if(!found){
    bucket.push([k,v]);
  }
// ////////////////
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
/////////////////////
//retrieve a bucket
var bucket = this._storage.get(idx); // idx instead of i
// if not exists, return
if (!bucket){ // 
  return;
}

for (var i = 0; i< bucket.length; i++){
  var tuple = bucket[i];
  if(tuple[0] === k){}
    return tuple[1];
  }
}
/////////////////////
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
///////////////////////////////
//retrieve a bucket
var bucket = this._storage.get(idx); // idx instead of i
// if not exists, return
if (!bucket){ // 
  return;
}

for(var i = 0; i < bucket.length; i++){
  var tuple = bucket[i];
if (tuple[0] === k){
  bucket.splice(i, 1);
  return tuple[1];
}
}


/////////////////////
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
    this._reHash();

  }
  else if (this._count <= 2 && this._limit > 8){
    this._limit = Math.max(this._limit/2, 8);
    //this._limit = 8;
    this._reHash(); // this._resize()
  }

}

HashTable.prototype._reHash = function(){
  var newStorage = makeLimitedArray(this._limit);
  var limit = this._limit;
  this._storage.each(function(slot){
    if (slot !== undefined){
      for (var i = 0; i < slot.length; i++){
        // var tubple = slot[i];
        // this.insert(tuple[0], tuple[1]);
        // this.insert.apply(this, tuple);
        var newIndex = getIndexBelowMaxForKey(slot[i][0], limit);
        // call insert
        if (newStorage.get(newIndex) === undefined){
          newStorage.set(newIndex, [slot[i]]);
        } else{
          newStorage.get(newIndex).push(slot[i]);
        }
      }
    } else {
      return;
    }
  });      //each(function(){}.bind(this)); instead of storing the this in a separate variable.
  this._storage = newStorage;
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
