/**
 * List of all of the words that we should consider as filler words, meaning that they don't actually do anything
 * except exist to make the language of our contract easier to read
 */
var fillers = {
    is: true,
    a: true,
    an: true,
    with: true
};

module.exports = {
    /**
     * Register a new filler word
     * @param word {String} The word to register
     */
    registerFiller: function(word) {
        fillers[word] = true;
    },
    /**
     * Get the current list of filler words
     * @return {Array} The list of filler words
     */
    fillers: function() {
        return Object.keys(fillers);
    }
}