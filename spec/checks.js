var expect = require('chai').expect,
    solicitor = require('..');

describe('The Solicitor Library', function() {
    describe('When using pre-defined checks', function() {
        it('"required" on a defined value', function() {
            solicitor.arg(1).is.required;
        });
        it('"required" on an undefined value', function() {
            expect(function() {
                solicitor.arg(undefined).is.required;
            }).throws();
        });
    });
});