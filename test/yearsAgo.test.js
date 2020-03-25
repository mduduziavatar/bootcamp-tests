describe("The yearsAgo function" , function(){
    it("should show current year" , function(){
        assert.equal(2020, yearsAgo("0"));
    });
    it("should show no year" , function(){
        assert.equal(0, yearsAgo("2020"));
    });
    it("should show that year being subtracted from" , function(){
        assert.equal(1976, yearsAgo("44"));
    });
   
});
