var checks = {
    required: {
        simple: true,
        check: function(v) {
            return v !== undefined;
        }
    },
    string: {
        simple: true,
        check: function(v) {
            return typeof v === 'string'
        }
    },
    number: {
        simple: true,
        check: function(v) {
            return typeof v === 'number'
        }
    },
    boolean: {
        simple: true,
        check: function(v) {
            return typeof v === 'boolean'
        }
    },
    function: {
        simple: true,
        check: function(v) {
            return typeof v === 'function'
        }
    },
    object: {
        simple: true,
        check: function(v) {
            return typeof v === 'object'
        }
    },
    array: {
        simple: true,
        check: function(v) {
            return typeof v === 'array'
        }
    },
    minimumValue: {
        simple: false,
        check: function(v, min) {
            return v >= min;
        }
    },
    maximimValue: {
        simple: false,
        check: function(v, max) {
            return v <= max;
        }
    },
    inRange: {
        simple: false,
        check: function(v, min, max) {
            return v >= min && v <= max;
        }
    },
    minimumLength: {
        simple: false,
        check: function(v, min) {
            return v.length >= min;
        }
    },
    maximumLength: {
        simple: false,
        check: function(v, max) {
            return v.length <= max;
        }
    },
    matches: {
        simple: false,
        check: function(v, r) {
            return r.text(v);
        }
    }
};


module.exports = {
    /**
     * Register a new check word.
     * For Simple checks, the function should take a single value which is the value to check.
     * For Advanced checks, the function should take the value to check as the first parameter, and all others following.
     * In all cases, the function should return true if the value is valid, and false if not.
     * @param word {String} The word to register
     * @param check {Function} The function to use to check the values with. 
     * @param simple {Boolean} True if this is a simple check - i.e. it takes no parameters. False if it is a more complicated check
     */
    registerCheck: function(word, check, simple) {
        checks[word] = {
            simple: simple,
            check: check
        };
    },
    /**
     * Get the current list of checks
     * @return {Object} The collection of checks
     */
    checks: function() {
        return checks;
    }
}