it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
});

//

describe("Возводит x в степень n", function() {
    it("5 в степени 1 будет 5", function() {
        let x = 5;
      
        let result = x;
        assert.equal(pow(x, 1), result);
    });
    
    it("5 в степени 2 будет 25", function() {
        let x = 5;
      
        result = x * x;
        assert.equal(pow(x, 2), result);
    });
    
    it("5 в степени 3 будет 125", function() {
        let x = 5;
      
        result = x * x * x;
        assert.equal(pow(x, 3), result);
    });
});