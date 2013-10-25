describe("Calculator", function(){
  beforeEach(function(){
    Calculator.current = 0;
  });

  it("should store the current value at all time", function(){
    expect(Calculator.current).toBeDefined();
  });

  describe("when add number", function(){
    it("should add number", function(){
      expect(Calculator.add(5)).toEqual(5);
      expect(Calculator.add(5)).toEqual(10);
    });

    it("should add any number of numbers", function() {
      expect(Calculator.add(1,2,3)).toEqual(6);
    });


  });
});