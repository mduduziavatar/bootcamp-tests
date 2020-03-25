describe('The greet function' , function(){
    it('should show get Name correctly' , function(){
        assert.equal('Hello, Name', greet('Name'));
    });
    it('should greet Kagiso correclty', function(){
        assert.equal('Hello, Kagiso', greet('Kagiso'));
    });

});
