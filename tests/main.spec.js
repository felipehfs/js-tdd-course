import { expect }  from 'chai';
import {
    sum,
    sub,
    mult,
    div
}  from '../src/app';

import { fizzbuzz } from '../src/fizzbuzz';
// Fizzbuzz - 
// 
//

describe('Calc', function(){

   describe('Smoke tests', function () {


       it("should exist the sum", function() {
        expect(sum).to.exist;
        expect(sum).to.be.an('function');
       });

       it("should exist the sub", function() {
        expect(sub).to.exist;
        expect(sub).to.be.an('function');
       });

       it("should exist the mult", function() {
        expect(mult).to.exist;
        expect(mult).to.be.an('function');
       });

       it("should exist the div", function() {
        expect(div).to.exist;
        expect(div).to.be.an('function');
       });

   });

    describe('Sum', function() {
        it("should return a sum of the numbers sum(2,2)", function() {
            expect(sum(2, 2)).to.be.equal(4);
        });
    });

    describe('Sub', function() {
        it("should return a sum of the numbers sub(2,2)", function() {
            expect(sub(2, 2)).to.be.equal(0);
        });
    });

    describe('Mult', function() {
        it("should return a sum of the numbers mult(2,2)", function() {
            expect(mult(2, 2)).to.be.equal(4);
        });
    });

    describe('Div', function() {
        it("should return a sum of the numbers div(2,2)", function() {
            expect(div(2, 2)).to.be.equal(1);
        });
    });
});

describe('fizzbuzz', function () {
    it("should return fizzbuzz(3) = Fizz", function(){
        expect(fizzbuzz(3)).to.equal("Fizz");
    });

    it("should return fizzbuzz(5) = Buzz", function() {
        expect(fizzbuzz(5)).to.equal("Buzz");
    });

    it("should return fizzbuzz(15) = Fizzbuzz", function() {
        expect(fizzbuzz(15)).to.equal("Fizzbuzz");
    });
});