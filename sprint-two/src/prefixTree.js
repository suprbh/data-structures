
var makeBaseTree = function(value){
  var baseTree = {};

  baseTree.value = value;
  baseTree.children = {};
  baseTree.numChildren = 0;

  _.extend(baseTree, baseTreeMethods);

  return baseTree;
};

var baseTreeMethods = {};

baseTreeMethods.addChild = function(value){
  var child = makeBaseTree(value);
  this.children[value] = child;
  this.numChildren++;
};

var T9PrefixTree = function(){
  var prefixTree = {};
  prefixTree._baseTree = makeBaseTree();
  _.extend(prefixTree, T9PrefixTreeMethods);
  return prefixTree;
};

var T9PrefixTreeMethods = {};

T9PrefixTreeMethods.insert = function(word){
  // first check if the word is already in the tree
  var mappedChars = this._mapT9(word);
  if (mappedChars.length === 0){
    return;
  }
 // var characters = word.split('');
  var currentNode = this._baseTree;
  for (var i = 0; i < mappedChars.length; i++){
    if (currentNode.children[mappedChars[i]] === undefined){
      currentNode.addChild(mappedChars[i]);
    }
    currentNode = currentNode.children[mappedChars[i]];
  }
  currentNode.addChild(word);
};

T9PrefixTreeMethods.lookup = function(value){
  var results = [];
  if (typeof value === 'number'){
    value = value.toString();
  }

  var splitChar = value.split('');
  var currentNode = this._baseTree;
  for (var i=0; i < splitChar.length; i++){
    if (currentNode.children[splitChar[i]] === undefined){
      return [];
    } else {
      currentNode = currentNode.children[splitChar[i]];
    }
  }

  for (var key in currentNode.children){
    if (isNaN(currentNode.children[key].value)){
      results.push(currentNode.children[key].value);
    }
  }
  return results;
};

T9PrefixTreeMethods._mapT9 = function(word){
  var result = [];
  var splitWord = word.split('');
  for (var i = 0; i < splitWord.length; i++){
    var index = splitWord[i].toLowerCase().charCodeAt(0) - 97;
    if (index >= 0 && index <= 25){
      if (index < 3){
        result.push(2);
      } else if (index < 6){
        result.push(3);
      } else if (index < 9){
        result.push(4);
      } else if (index < 12){
        result.push(5);
      } else if (index < 15){
        result.push(6);
      } else if (index < 19){
        result.push(7);
      } else if (index < 22){
        result.push(8);
      } else {
        result.push(9);
      }
    } else {
      return [];
    }
  }
  return result;
};

