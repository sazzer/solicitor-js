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
            return v !== undefined ? typeof v === 'string' : true;
        }
    },
    number: {
        simple: true,
        check: function(v) {
            return v !== undefined ? typeof v === 'number' : true;
        }
    },
    boolean: {
        simple: true,
        check: function(v) {
            return v !== undefined ? typeof v === 'boolean' : true;
        }
    },
    function: {
        simple: true,
        check: function(v) {
            return v !== undefined ? typeof v === 'function' : true;
        }
    },
    object: {
        simple: true,
        check: function(v) {
            return v !== undefined ? typeof v === 'object' : true;
        }
    },
    array: {
        simple: true,
        check: function(v) {
            return v !== undefined ? typeof v === 'array' : true;
        }
    },
    minimumValue: {
        simple: false,
        check: function(v, min) {
            return typeof v === 'number' ? v >= min : true;
        }
    },
    maximimValue: {
        simple: false,
        check: function(v, max) {
            return typeof v === 'number' ? v <= max : true;
        }
    },
    inRange: {
        simple: false,
        check: function(v, min, max) {
            return typeof v === 'number' ? v >= min && v <= max : true;
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