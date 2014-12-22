var expect = require('chai').expect,
    solicitor = require('..');

describe('The Solicitor Library', function() {
    var contract = solicitor.arg(1);
    describe('When using pre-defined fillers', function() {
        it('"is"', function() {
            expect(contract.is).to.equal(contract);
        });
        it('"a"', function() {
            expect(contract.a).to.equal(contract);
        });
        it('"an"', function() {
            expect(contract.an).to.equal(contract);
        });
    });
    describe('When chaining fillers', function() {
        it('Works as expected', function() {
            expect(contract.is.an).to.equal(contract);
        });
    });
    describe('When registering new fillers', function() {
        it('Lets us list the fillers', function() {
            var fillers = solicitor.fillers.list();
            expect(fillers).to.be.an('array');
            expect(fillers).to.contain('is');
            expect(fillers).to.contain('a');
            expect(fillers).to.contain('an');
        });
        it('Registers a new filler', function() {
            var fillers = solicitor.fillers.list();
            expect(fillers).not.to.contain('then');

            solicitor.fillers.add('then');
            fillers = solicitor.fillers.list();
            expect(fillers).to.contain('then');
        });
    });
});