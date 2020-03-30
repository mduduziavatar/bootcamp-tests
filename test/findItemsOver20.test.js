describe("The findItemsOver20 function", function (list) {
    it("should find items with quantity over 20", function () {
        var list = [
            { name: "apples", qty: 10 },
            { name: "pears", qty: 37 },
            { name: "bananas", qty: 27 },
            { name: "apples", qty: 3 }
        ];
        assert.deepEqual([{ name: "pears", qty: 37 }, { name: "bananas", qty: 27 }], findItemsOver20(list));
    });
});
