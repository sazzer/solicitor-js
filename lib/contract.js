'use strict';

var fillers = require('./fillers'),
    checks = require('./checks'),
    util = require('util');
/**
 * The actual main wrapper around a contract to negotiate
 * @constructor
 * @param value {Any} The value to verify the contract of
 */
function Contract(value) {
    var properties = {},
        t = this,
        fillersToUse = fillers.fillers(),
        checksToUse = checks.checks();
    
    fillersToUse.forEach(function(f) {
        properties[f] = {
            configurable: false,
            enumerable: true,
            value: t,
            readOnly: true
        };
    });
    
    Object.keys(checksToUse).forEach(function(c) {
        var check = checksToUse[c];
        if (check.simple === true) {
            properties[c] = {
                configurable: false,
                enumerable: true,
                get: function() {
                    var result = check.check(value);
                    if (!result) {
                        throw new Error('Value "' + value + '" failed to meet contract "' + c + '"');
                    }
                    return this;
                }
            };
        } else {
            this[c] = function() {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(value);
                var result = check.check.apply(undefined, args);
                if (!result) {
                        throw new Error('Value "' + value + '" failed to meet contract "' + c + '" with parameters ' + util.inspect(Array.prototype.slice.call(arguments)));
                }
            };
        }
    }.bind(this));
    Object.defineProperties(this, properties);
}

module.exports = Contract;