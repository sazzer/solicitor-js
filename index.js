'use strict';

var Contract = require('./lib/contract'),
    fillers = require('./lib/fillers');

/**
 * Method to wrap the value of a method argument in a Contract so that it can be verified
 * @param value {Any} the value to wrap
 * @return {Contract} the contract
 */
function argument(value) {
    return new Contract(value);
}

module.exports = {
    argument: argument,
    arg: argument,
    parameter: argument,
    param: argument,
    
    fillers: {
        list: fillers.fillers,
        add: fillers.registerFiller
    }
}