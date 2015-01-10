describe('prefixTree', function() {
  var tree;

  beforeEach(function() {
    tree = T9PrefixTree();
  });

  it('should have methods named "insert" and "lookup"', function() {
    expect(tree.insert).to.be.a("function");
    expect(tree.lookup).to.be.a("function");
  });

  it('should insert a word', function(){
    tree.insert('hack');
    expect(tree._baseTree.children[4].children[2].children[2].children[5].numChildren).to.equal(1);
  });

  it('should retrieve a word', function(){
    tree.insert('hack');
    expect(tree.lookup('4225')).to.deep.equal(['hack']);
    expect(tree.lookup(4225)).to.deep.equal(['hack']);
  });

  it('should retrieve multiple words', function(){
    tree.insert('hack');
    tree.insert('reactor');
    expect(tree.lookup(4225)).to.deep.equal(['hack']);
    expect(tree.lookup(7322867)).to.deep.equal(['reactor']);
  });
  it('should retrieve multiple words with same mapping', function(){
    tree.insert('kite');
    tree.insert('lite');
    expect(tree.lookup(5483)).to.deep.equal(['kite', 'lite']);
  });
});
