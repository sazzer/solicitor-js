var expect = require('chai').expect,
    solicitor = require('..');

describe('The Solicitor Library', function() {
    describe('When checking a required value', function() {
        it('on a defined value, it should pass', function() {
            solicitor.arg(1).is.required;
        });
        it('on an undefined value, it should fail', function() {
            expect(function() {
                solicitor.arg(undefined).is.required;
            }).throws();
        });
    });
    describe('When checking for a string', function() {
        it('on a string, it should pass', function() {
            solicitor.arg('Hello').is.a.string;
        })
        it('on a number, it should fail', function() {
            expect(function() {
                solicitor.arg(1).is.a.string;
            }).throws();
        })
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.a.string;
        })
    });
    describe('When checking for a number', function() {
        it('on a number, it should pass', function() {
            solicitor.arg(42).is.a.number;
        })
        it('on a string, it should fail', function() {
            expect(function() {
                solicitor.arg('one').is.a.number;
            }).throws();
        })
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.a.number;
        })
    });
    describe('When checking for a boolean', function() {
        it('on a boolean, it should pass', function() {
            solicitor.arg(true).is.a.boolean;
        })
        it('on a number, it should fail', function() {
            expect(function() {
                solicitor.arg(1).is.a.boolean;
            }).throws();
        })
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.a.boolean;
        })
    });
    describe('When checking for an array', function() {
        it('on an array, it should pass', function() {
            solicitor.arg([1, 2]).is.an.array;
        })
        it('on a number, it should fail', function() {
            expect(function() {
                solicitor.arg(1).is.an.array;
            }).throws();
        })
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.an.array;
        })
    });
    describe('When checking for an object', function() {
        it('on an object, it should pass', function() {
            solicitor.arg({a: 1}).is.an.object;
        })
        it('on a number, it should fail', function() {
            expect(function() {
                solicitor.arg(1).is.an.object;
            }).throws();
        })
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.an.object;
        })
    });
    describe('When checking for a function', function() {
        it('on a function, it should pass', function() {
            solicitor.arg(function() {}).is.a.function;
        })
        it('on a number, it should fail', function() {
            expect(function() {
                solicitor.arg(1).is.a.function;
            }).throws();
        })
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.a.function;
        })
    });
    describe('When checking for a number with a minimum value', function() {
        it('on a valid number, it should pass', function() {
            solicitor.arg(5).is.minimumValue(1);
        });
        it('on a number thats too small, it should fail', function() {
            expect(function() {
                solicitor.arg(0).is.minimumValue(1);
            }).throws();
        });
        it('on a string, it should pass', function() {
            solicitor.arg('5').is.minimumValue(1);
        });
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.minimumValue(1);
        });
    });
    describe('When checking for a number with a maximum value', function() {
        it('on a valid number, it should pass', function() {
            solicitor.arg(5).is.maximumValue(10);
        });
        it('on a number thats too big, it should fail', function() {
            expect(function() {
                solicitor.arg(20).is.maximumValue(10);
            }).throws();
        });
        it('on a string, it should pass', function() {
            solicitor.arg('5').is.maximumValue(10);
        });
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.maximumValue(10);
        });
    });
    describe('When checking for a number in a range', function() {
        it('on a valid number, it should pass', function() {
            solicitor.arg(5).is.inRange(1, 10);
        });
        it('on a number thats too small, it should fail', function() {
            expect(function() {
                solicitor.arg(0).is.inRange(1, 10);
            }).throws();
        });
        it('on a number thats too big, it should fail', function() {
            expect(function() {
                solicitor.arg(20).is.inRange(1, 10);
            }).throws();
        });
        it('on a string, it should pass', function() {
            solicitor.arg('5').is.inRange(1, 10);
        });
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.inRange(1, 10);
        });
    });
    describe('When checking for a minimum length', function() {
        it('on a valid string, it should pass', function() {
            solicitor.arg('Hello').is.minimumLength(4);
        });
        it('on a valid array, it should pass', function() {
            solicitor.arg([1, 2, 3, 4, 5]).is.minimumLength(4);
        });
        it('on a string thats too small, it should fail', function() {
            expect(function() {
                solicitor.arg('Hi').is.minimumLength(5);
            }).throws();
        });
        it('on an array thats too small, it should fail', function() {
            expect(function() {
                solicitor.arg([1, 2]).is.minimumLength(5);
            }).throws();
        });
        it('on a number, it should pass', function() {
            solicitor.arg(5).is.minimumLength(5);
        });
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.minimumLength(5);
        });
    });
    describe('When checking for a maximum length', function() {
        it('on a valid string, it should pass', function() {
            solicitor.arg('Hello').is.maximumLength(6);
        });
        it('on a valid array, it should pass', function() {
            solicitor.arg([1, 2, 3, 4, 5]).is.maximumLength(6);
        });
        it('on a string thats too large, it should fail', function() {
            expect(function() {
                solicitor.arg('Hi there').is.maximumLength(6);
            }).throws();
        });
        it('on an array thats too large, it should fail', function() {
            expect(function() {
                solicitor.arg([1, 2, 3, 4, 5, 6, 7]).is.maximumLength(6);
            }).throws();
        });
        it('on a number, it should pass', function() {
            solicitor.arg(5).is.maximumLength(6);
        });
        it('on undefined, it should pass', function() {
            solicitor.arg(undefined).is.maximumLength(6);
        });
    });
    describe('Chaining of checks', function() {
        it('Passes all checks if it should', function() {
            solicitor.arg(5).is.a.number.inRange(1, 10);
        });
        it('Fails the first check if it should', function() {
            expect(function() {
                solicitor.arg('5').is.a.number.inRange(1, 10);
            }).throws();
        });
        it('Fails the second check if it should', function() {
            expect(function() {
                solicitor.arg(50).is.a.number.inRange(1, 10);
            }).throws();
        });
    })
});