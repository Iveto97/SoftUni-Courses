const expect = require('chai').expect;
const assert = require('chai').assert;
const onlineStore = require('./onlineStore.js');

describe("onlineStore", function() {
    describe("isProductAvailable", function() {

        it("should return a message when the input is right", function() {
            expect(onlineStore.isProductAvailable('apple', 2)).to.equal(`Great! apple is available for purchase.`);
        });
        it("should return an error when the one of the inputs is wrong", function() {
            expect(() => {onlineStore.isProductAvailable(['apple', 'kiwi'], 2)}).to.throw(`Invalid input.`);
            expect(() => {onlineStore.isProductAvailable('apple', '2')}).to.throw(`Invalid input.`);
        });
        it("should return a message for out of stock product", function() {
            expect(onlineStore.isProductAvailable('apple', 0)).to.equal(`Sorry, apple is currently out of stock.`);
            expect(onlineStore.isProductAvailable('apple', -5)).to.equal(`Sorry, apple is currently out of stock.`);
        });
     });

    describe("canAffordProduct", function() {

        it("should return a message for purchased product", function() {
            expect(onlineStore.canAffordProduct(25, 50)).to.equal(`Product purchased. Your remaining balance is $25.`);
        });
        it("should return a message - not enough funds on balance ", function() {
            expect(onlineStore.canAffordProduct(25, 12)).to.equal(`You don't have sufficient funds to buy this product.`);
        });
        it("should return an error when the one of the inputs is wrong", function() {
            expect(() => {onlineStore.canAffordProduct(['apple', 'kiwi'], 2)}).to.throw(`Invalid input.`);
            expect(() => {onlineStore.canAffordProduct('apple', 50)}).to.throw(`Invalid input.`);
            expect(() => {onlineStore.canAffordProduct(5, '50')}).to.throw(`Invalid input.`);
            expect(() => {onlineStore.canAffordProduct(5, [5, 6, 7])}).to.throw(`Invalid input.`);
            expect(() => {onlineStore.canAffordProduct(5, {name: 'Iva'})}).to.throw(`Invalid input.`);
        });
     });

    describe("getRecommendedProducts", function() {

        it("should should return a message for products and category when the input is right", function() {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], "Photography")).to.equal(`Recommended products in the Photography category: Camera`);
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "TV", category: "Television" }, { name: "Apple", category: "Fruits" }], "Fruits")).to.equal(`Recommended products in the Fruits category: Apple`);
        });
        it("should return a message - haven't recommended products in the category. ", function() {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "TV", category: "Television" }, { name: "Apple", category: "Fruits" }], "Water")).to.equal(`Sorry, we currently have no recommended products in the Water category.`);
        });
        it("should return an error when the one of the inputs is wrong", function() {
            expect(() => {onlineStore.getRecommendedProducts({name: "Camera", category: "Photography" }, "Photography")}).to.throw(`Invalid input.`);
            expect(() => {onlineStore.getRecommendedProducts("Camera", "Photography")}).to.throw(`Invalid input.`);
            expect(() => {onlineStore.getRecommendedProducts([{name: "Camera", category: "Photography" }], 5)}).to.throw(`Invalid input.`);
            expect(() => {onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], [{ name: "Camera", category: "Photography" }])}).to.throw(`Invalid input.`);
        });
     });

});
