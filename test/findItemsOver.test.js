describe("The findItemsOver function", function (itemList, threshold) {
    it("should find items with quantity over", function () {
        var threshold = 30;
        var itemList = [
        { name: "apples", qty: 10 },
        { name: "pears", qty: 37 },
        { name: "bananas", qty: 27 },
        { name: "apples", qty: 3 }
        ];
        assert.deepEqual([{ name: "pears", qty: 37 }], findItemsOver(itemList, threshold));

    });
});