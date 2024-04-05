const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'Fundamentals'

router.get('/', function (req, res, next) {
    res.send({
        name: 'Fundamentals',
        server: 'express',
        variableData: variableData
    });
});

router.get('/sum-two-number', function (req, res, next) {
    res.send({
        name: 'Sum',
        server: 'express',
        sum: sumTwoNumbers(1, 2)
    });
});

function sumTwoNumbers(a, b) {
    return a + b;
}

router.get('/comparison-operators', function (req, res, next) {
    res.send({
        name: 'Comparison operators',
        server: 'express',
        compare: comparisonOperators(2, 2)
    });
});

function comparisonOperators(a, b) {
    return a === b;
}

router.get('/get-typeof-value', function (req, res, next) {
    res.send({
        name: 'Get type of value',
        server: 'express',
        typeofValue: getTypeofValue('Test')
    });
});

function getTypeofValue(a) {
    return typeof a;
}

router.get('/get-nth-character', function (req, res, next) {
    res.send({
        name: 'Get nth character',
        server: 'express',
        character: getNthCharacter('abcd', 3)
    });
});

function getNthCharacter(a, n) {
    return a[n - 1];
}

router.get('/remove-first-n-characters', function (req, res, next) {
    res.send({
        name: 'Remove first n characters',
        server: 'express',
        afterRemove: RemoveFirstNcharacters('abcdefg')
    });
});

function RemoveFirstNcharacters(a) {
    return a.slice(3);
}

router.get('/get-last-n-characters', function (req, res, next) {
    res.send({
        name: 'Get last n characters',
        server: 'express',
        nCharacters: getLastNcharacters('abcdefg')
    });
});

function getLastNcharacters(str) {
    return str.slice(-3);
}

router.get('/find-position-of-string-in-another', function (req, res, next) {
    res.send({
        name: 'Find the position of one string in another',
        server: 'express',
        position: findIs('praise')
    });
});

function findIs(a) {
    return a.indexOf('is');
}

router.get('/extract-first-half', function (req, res, next) {
    res.send({
        name: 'Extract first half of string',
        server: 'express',
        position: extractFirstHalf('12345678')
    });
});

function extractFirstHalf(a) {
    return a.slice(0, a.length / 2);
}

router.get('/remove-last-n-characters', function (req, res, next) {
    res.send({
        name: 'Remove last n characters',
        server: 'express',
        afterRemove: RemoveLastNcharacters('abcdefg')
    });
});

function RemoveLastNcharacters(a) {
    return a.slice(0, -3);
}

router.get('/percentage-of-number', function (req, res, next) {
    res.send({
        name: 'Return the percentage of a number',
        server: 'express',
        percentage: percentageOfNumber(500, 25)
    });
});

function percentageOfNumber(a, b) {
    return b / 100 * a;
}

router.get('/basic-js-math-operators', function (req, res, next) {
    res.send({
        name: 'Basic JavaScript math operators',
        server: 'express',
        result: basicMathOperators(6, 5, 4, 3, 2, 1)
    });
});

function basicMathOperators(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
}

router.get('/check-contain-string', function (req, res, next) {
    res.send({
        name: 'Check whether a string contains another string and concatenate',
        server: 'express',
        characters: checkContainString('lips', 's')
    });
});

function checkContainString(a, b) {
    return a.indexOf(b) === -1 ? a + b : b + a;
}

router.get('/check-even', function (req, res, next) {
    res.send({
        name: 'Check if a number is even',
        server: 'express',
        result: checkEven(4)
    });
});

function checkEven(a) {
    return a % 2 === 0;
}

router.get('/occurrence-times', function (req, res, next) {
    res.send({
        name: 'How many times does a character occur?',
        server: 'express',
        result: occurrenceTimes('h', 'how many times does the character occur in this sentence?')
    });
});

function occurrenceTimes(a, b) {
    return b.split(a).length - 1;
}

router.get('/check-whole-number', function (req, res, next) {
    res.send({
        name: 'Check if a number is a whole number',
        server: 'express',
        result: checkWholeNumber(4.2)
    });
});

function checkWholeNumber(a) {
    return a - Math.floor(a) === 0;
}

router.get('/multi-div-compr', function (req, res, next) {
    res.send({
        name: 'Multiplication, division, and comparison operators',
        server: 'express',
        result: multiDivCompr(90, 45)
    });
});

function multiDivCompr(a, b) {
    return a < b ? a / b : a * b;
}


router.get('/round-to-two-decimal', function (req, res, next) {
    res.send({
        name: 'Round a number to 2 decimal places',
        server: 'express',
        result: roundToTwoDecimal(2.12397)
    });
});

function roundToTwoDecimal(a) {
    return Number(a.toFixed(2));
}

router.get('/split-number', function (req, res, next) {
    res.send({
        name: 'Split a number into its digits',
        server: 'express',
        result: splitNumber(193278)
    });
});

function splitNumber(a) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
}

module.exports = router;
