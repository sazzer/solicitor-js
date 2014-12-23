var expect = require('chai').expect,
    solicitor = require('..');

describe('The Solicitor Library', function() {
    describe('When checking a required value', function() {
        it('on a defined value', function() {
            solicitor.arg(1).is.required;
        });
        it('on an undefined value', function() {
            expect(function() {
                solicitor.arg(undefined).is.required;
            }).throws();
        });
    });
    describe('When checking for a string', function() {
        it('on a string', function() {
            solicitor.arg('Hello').is.a.string;
        })
        it('on a number', function() {
            expect(function() {
                solicitor.arg(1).is.a.string;
            }).throws();
        })
        it('on undefined', function() {
            expect(function() {
                solicitor.arg(undefined).is.a.string;
            }).throws();
        })
    });
    describe('When checking for a number in a range', function() {
        it('on a valid number', function() {
            solicitor.arg(5).is.inRange(1, 10);
        });
        it('on a number thats too small', function() {
            expect(function() {
                solicitor.arg(0).is.inRange(1, 10);
            }).throws();
        });
        it('on a number thats too big', function() {
            expect(function() {
                solicitor.arg(20).is.inRange(1, 10);
            }).throws();
        });
    });
    describe('Chaining of checks', function() {
        it('Passes all checks if it should', function() {
            solicitor.arg(5).is.a.number.inRange(1, 10);
        });
        it('Fails the first check if it should', function() {
            expect(function() {
                solicitor.arg('5').is.a.number.inRange(1, 10);
            }).throws();
        });
        it('Fails the second check if it should', function() {
            expect(function() {
                solicitor.arg(50).is.a.number.inRange(1, 10);
            }).throws();
        });
    })
});