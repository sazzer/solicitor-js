var checks = {
    required: {
        simple: true,
        check: function(v) {
            return v !== undefined;
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