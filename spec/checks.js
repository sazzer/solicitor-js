var expect = require('chai').expect,
    solicitor = require('..');

describe('The Solicitor Library', function() {
    describe('When checking a required value', function() {
        it('on a defined value, it should pass', function() {
            solicitor.arg(1).is.required;
        });
        it('on an undefined value, it should fail', function() {
            expect(function() {
                solicitor.arg(undefined).is.required;
            }).throws();
        });
    });
    describe('When checking for a string', function() {
        it('on a string, it should pass', function() {
            solicitor.arg('Hello').is.a.string;
        })
        it('on a number, it should fail', function() {
            expect(function() {
                solicitor.arg(1).is.a.string;
            }).throws();
        })
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.a.string;
        })
    });
    describe('When checking for a number in a range', function() {
        it('on a valid number, it should pass', function() {
            solicitor.arg(5).is.inRange(1, 10);
        });
        it('on a number thats too small, it should fail', function() {
            expect(function() {
                solicitor.arg(0).is.inRange(1, 10);
            }).throws();
        });
        it('on a number thats too big, it should fail', function() {
            expect(function() {
                solicitor.arg(20).is.inRange(1, 10);
            }).throws();
        });
        it('on a string, it should pass', function() {
            solicitor.arg('5').is.inRange(1, 10);
        });
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.inRange(1, 10);
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