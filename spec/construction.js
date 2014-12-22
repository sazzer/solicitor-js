var expect = require('chai').expect,
    solicitor = require('..');

describe('The Solicitor Library', function() {
    describe("When wrapping values", function() {
        it('supports wrapping a string', function() {
            expect(solicitor.argument('hello')).to.be.defined;
        });
        it('supports wrapping a number', function() {
            expect(solicitor.argument(1)).to.be.defined;
        });
        it('supports wrapping an array', function() {
            expect(solicitor.argument([1, 2, 3])).to.be.defined;
        });
        it('supports wrapping an object', function() {
            expect(solicitor.argument({a: 1, b: 2})).to.be.defined;
        });
        it('supports wrapping a function', function() {
            expect(solicitor.argument(function() {})).to.be.defined;
        });
        it('supports wrapping undefined', function() {
            expect(solicitor.argument(undefined)).to.be.defined;
        });
    });
    describe('When using different functions to wrap the value', function() {
        it('Supports "argument"', function() {
           expect(solicitor.argument(1)).to.be.defined;
        });
        it('Supports "arg"', function() {
           expect(solicitor.arg(1)).to.be.defined;
        });
        it('Supports "parameter"', function() {
           expect(solicitor.parameter(1)).to.be.defined;
        });
        it('Supports "param"', function() {
           expect(solicitor.param(1)).to.be.defined;
        });
    });
});