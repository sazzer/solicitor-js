'use strict';

var fillers = require('./fillers');
/**
 * The actual main wrapper around a contract to negotiate
 * @constructor
 * @param value {Any} The value to verify the contract of
 */
function Contract(value) {
    var properties = {},
        t = this;
    fillers.fillers().forEach(function(f) {
        properties[f] = {
            configurable: false,
            enumerable: true,
            value: t,
            readOnly: true
        }
    });
    Object.defineProperties(this, properties);
}

module.exports = Contract;