const expect = require('chai').expect;
const assert = require('chai').assert;
const lottery = require('./Lottery.js');

describe("lottery", function() {
    describe("buyLotteryTicket", function() {
        it("should return the right price and amount of tickets", function() {
            expect(lottery.buyLotteryTicket(25, 1, true)).to.equal('You bought 1 tickets for 25$.');
        });
        it("should throw an error at wrong input data", function() {
            expect(() => {lottery.buyLotteryTicket(5, 1, [])}).to.throw('Invalid input!');
            expect(() => {lottery.buyLotteryTicket(5, -5, true)}).to.throw('Invalid input!');
            expect(() => {lottery.buyLotteryTicket('5', 2, true)}).to.throw('Invalid input!');
            expect(() => {lottery.buyLotteryTicket(5, 2, false)}).to.throw('Unable to buy lottery ticket!');
        });
     });
    describe("checkTicket", function() {
        it("should return congratulations", function() {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
            expect(lottery.checkTicket([1, 2, 3, 4, 7, 8], [1, 2, 3, 4, 5, 6])).to.equal('Congratulations you win, check your reward!');
        });
        it("should throw an error", function() {
            expect(() => {lottery.checkTicket([1, 2, 3], [1, 2, 3, 4, 5, 6])}).to.throw('Invalid input!');
            expect(() => {lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])}).to.throw('Invalid input!');
            expect(() => {lottery.checkTicket([], [1, 2, 3, 4, 5])}).to.throw('Invalid input!');
            expect(() => {lottery.checkTicket(['5', '6', '7', '25', '63', '4'], [1, 2, 3, 4, 5])}).to.throw('Invalid input!');
            expect(() => {lottery.checkTicket(5, [1, 2, 3, 4, 5])}).to.throw('Invalid input!');
        });
        
     });
    describe("secondChance", function() {
        it("should return message with valid input", function() {
            expect(lottery.secondChance(5, [2, 5, 6])).to.be.equal('You win our second chance prize!');
            expect(lottery.secondChance(5, [2, 4, 6])).to.be.equal("Sorry, your ticket didn't win!");
        });

        it("should throw an error in case of submitted invalid parameters", function() {
            expect(() => {lottery.secondChance('5', [2, 5, 6])}).to.throw('Invalid input!');
            expect(() => {lottery.secondChance([5], [2, 5, 6])}).to.throw('Invalid input!');
            expect(() => {lottery.secondChance(5, 2)}).to.throw('Invalid input!');
            expect(() => {lottery.secondChance(5, '2')}).to.throw('Invalid input!');
        });
     });
});
