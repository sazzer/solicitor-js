solicitor-js
============

Design By Contract for your Javascript code

What is Design By Contract?
---------------------------

Why would I want that?
----------------------

How readable is it?
-------------------
Very. The idea behind this is that you simply add some lines right at the top of your methods that will guarantee that the inputs into the method are valid.

This means that this:

    function sendEmail(to, from, subject, mail) {
        ........
    }

becomes this

    function sendEmail(to, from, subject, mail) {
        solicitor.argument(to).is.a.required.string.matching(/^[^@]+@.+/);
        solicitor.argument(from).is.a.required.string.matching(/^[^@]+@.+/);
        solicitor.argument(subject).is.a.required.string
        solicitor.argument(mail).is.an.optional.string
        ........
    }
