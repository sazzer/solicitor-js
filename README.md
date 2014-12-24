solicitor-js
============

Design By Contract for your Javascript code

What is Design By Contract?
---------------------------
Design By Contract is a programming pattern whereby you don't trust the values you are provided with, but instead you ensure that they are correct. The Contract that we talk about is literally the specification of what the input values to the function must be for the function to be called correctly. 

Why would I want that?
----------------------
In staticly typed languages, there is less need for Design By Contract because the type system does a lot of work for you. More and more languages are making heavy use of this to avoid problems at runtime that the compiler can catch instead. 

In dynamically typed languages this is harder, since it is possible to pass any value in to any function call, regardless of what it actually expects. Even worse, Javascript lets you pass in any number of arguments without caring about the number of arguments that the function expects to take. 

Design By Contract in Javascript means that you can write some very clear, self documenting code right at the top of your function definition that will ensure that the input values you were provided meet the contract that the function expects to maintain, and if they don't then an error will be thrown before the main body of the function is even called. 

This is done by some simple inline statements, which means that there is no magic going on with proxying the function and intercepting the arguments behind the scenes. Everything is very clear and obvious, and it is simple to use as much or as little of the functionality as you want.

How readable is it?
-------------------
Very. The idea behind this is that you simply add some lines right at the top of your methods that will guarantee that the inputs into the method are valid.

This means that this:

    function sendEmail(to, from, subject, mail) {
        ........
    }

becomes this

    function sendEmail(to, from, subject, mail) {
        solicitor.argument(to).is.a.required.string.that.matches(/^[^@]+@.+$/);
        solicitor.argument(from).is.a.required.string.that.matches(/^[^@]+@.+$/);
        solicitor.argument(subject).is.a.required.string
        solicitor.argument(mail).is.a.string
        ........
    }

How does it work?
-----------------
There are three concepts that need to be understood to use this. Firstly you need to actually create a contract for a particular value. The Solicitor will do this for you. In order to do this you simply call one of the methods on the Solicitor to create a contract. The options are:
* argument
* arg
* parameter
* param

Don't worry about which to use - they are all identical. There are multiple choices purely to suit how you want your contracts to read.

Once you've created your contract you need to fill it out. This is done with a combination of Filler Words and Check Words. Filler Words do absolutely nothing, and simply exist to make the language more readable. Check Words are the actual bits of the Contract that are important, and that really enforce things.

### Filler Words
There is a standard set of Filler Words that can be used, but more can be added if you so desire. These words do nothing at all apart from make the language easier for a human to read. It is literally the difference between

    solicitor.argument(to).required.string.matches(/^[^@]+@.+$/)
    
and

    solicitor.argument(to).is.a.required.string.that.matches(/^[^@]+@.+$/);
    
Both have the exact same effect, but the second one reads much better

The current list of Filler Words that can be used are:
* a
* an
* and
* is
* that
* with

#### What if I want more words?
It's more than reasonable to think that people will want more filler words for their contracts. As such, it is possible to register your own words for the project you are working on. These words are global so you only need to register them once, and they will be usable in all contracts defined from that point on.It

In order to do this you simply call

    solicitor.fillers.add(word);
    
for each word that you want to support.

Alternatively, add the words to lib/fillers.js and submit a pull request ;)

### Check Words
There are a standard set of Check Words that can be used, but more can be added if you so desire. These words implement the actual functionality in the contract, and so are the important parts.

Check Words come in one of two varieties - Simple or Advanced. Simple Checks take no parameters and do a very simple check against the value in question - for example, the "required" check will ensure that the value is not undefined.

Advanced Checks take parameters, and do something a bit more specific. For example, the "matches" check will take a regular expression and will ensure that the value matches this regex. 

The current list of Check Words that can be used are:
* Simple Checks
 * required - Ensures that the value is not undefined
 * string - Ensures that the type of the value is "string"
 * number - Ensures that the type of the value is "number"
 * boolean - Ensures that the type of the value is "boolean"
 * function - Ensures that the type of the value is "function"
 * object - Ensures that the type of the value is "object"
 * array - Ensures that the type of the value is "array"
* Advanced Checks
 * minimumValue - Ensures that the number is no less than the provided minimum value
 * maximumValue - Ensures that the number is no greater than the provided maximum value
 * inRange - Ensures that the number is between the provided minimum and maximum values
 * minimumLength - Ensures that the length of the string or array is no less than the provided minimum value
 * maximumLength - Ensures that the length of the string or array is no less than the provided maximum value
 * matches - Ensures that the string matches the provided regular expression
 
#### What if I want more words?
As with Filler Words, if you want more Check Words you can register your own by calling

    solicitor.checks.add(word, check, simple)
    
In this case, you need to provide a function that will be used to check the value. The function will always be provided the value to check as the first parameter, and if it is an advanced check then the values passed in to the function will come after this. Note that it's technically possible to register an advanced check that takes no parameters. It will work exactly the same as a simple check then, but you will need to append the () in your contract definition, which breaks the flow when reading it.

Alternatively, add the words to lib/checks.js and submit a pull request ;)