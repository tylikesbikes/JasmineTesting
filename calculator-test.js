describe('calculator tests', function() {
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount : 137000,
      rate : 3.6/1200,
      termYears : 30*12 
    };
    expect(calculateMonthlyPayment(values)).toBe('622.86');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount : 137000,
      rate : 3.6/1200,
      termYears : 30*12 
    };
  
    let result = calculateMonthlyPayment(values)
    expect(result[result.length-3]).toBe('.');
  });
});


/// etc
