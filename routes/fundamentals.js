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

function sum2number(a, b) {
    return a + b;
}
router.get('/sum2number', function (req, res, next) {
    res.send({
        name: 'sum2number',
        sum: sum2number(1, 2)
    });
});

function f2(a, b) {
    return a === b;
}
router.get('/f2', function (req, res, next) {
    res.send({
        name: 'f2',
        sum: f2(5, 5)
    });
});

function f3(a) {
    return typeof a;
}
router.get('/f3', function (req, res, next) {
    res.send({
        name: 'f3',
        sum: f3(9)
    });
});

function f4(a, n) {
    return a[n - 1];
}
router.get('/f4', function (req, res, next) {
    res.send({
        name: 'f4',
        sum: f4("abcd", 1)
    });
});

function f5(a) {
    return a.slice(3);
}
router.get('/f5', function (req, res, next) {
    res.send({
        name: 'f5',
        sum: f5("abcdefg")
    });
});

function f6(str) {
    return str.slice(-3);
}
router.get('/f6', function (req, res, next) {
    res.send({
        name: 'f6',
        sum: f6("abcdefg")
    });
});

function f7(a) {
    return a.slice(0, 3);
}
router.get('/f7', function (req, res, next) {
    res.send({
        name: 'f7',
        sum: f7("abcdefg")
    });
});

function f8(a) {
    var index = a.indexOf('is');
    return index;
}
router.get('/f8', function (req, res, next) {
    res.send({
        name: 'f8',
        sum: f8("risky")
    });
});

function f9(a) {
    return a.slice(0, a.length / 2);
  }
router.get('/f9', function (req, res, next) {
    res.send({
        name: 'f9',
        sum: f9("1234")
    });
});
function f10(a) {
    return a.slice(0, -3);
  }
router.get('/f10', function (req, res, next) {
    res.send({
        name: 'f10',
        sum: f10("1234")
    });
});

function f11(a, b) {
    return (b / 100) * a;
  }
router.get('/f11', function (req, res, next) {
    res.send({
        name: 'f11',
        sum: f11(100, 50)
    });
});

function f12(a, b, c, d, e, f) {
    return Math.pow(((a + b - c) * d) / e, f);
  }
router.get('/f12', function (req, res, next) {
    res.send({
        name: 'f12',
        sum: f12(6, 5, 4, 3, 2, 1)
    });
});

function f13(a, b) {
    return a.includes(b) ? `${b}${a}` : `${a}${b}`;
  }
router.get('/f13', function (req, res, next) {
    res.send({
        name: 'f13',
        sum: f13("lips", "s")
    });
});

function f14(a) {
    return a % 2 === 0;
  }
router.get('/f14', function (req, res, next) {
    res.send({
        name: 'f14',
        sum: f14(10)
    });
});
function f15(a, b) {
    let characterCount = 0;
    for (let counter = 0; counter < b.length; counter++) {
      if (b[counter] === a) {
        characterCount++;
      }
    }
    return characterCount;
  }
router.get('/f15', function (req, res, next) {
    res.send({
        name: 'f15',
        sum: f15("m", "how many times does the character occur in this sentence?")
    });
});

function f16(a) {
    return Number.isInteger(a);
  }
router.get('/f16', function (req, res, next) {
    res.send({
        name: 'f16',
        sum: f16(4)
    });
});

function f17(a, b) {
    return a < b ? a / b : a * b;
  }
router.get('/f17', function (req, res, next) {
    res.send({
        name: 'f17',
        sum: f17(10, 100)
    });
});

function f18(a) {
    return Number(a.toFixed(2));
  }
router.get('/f18', function (req, res, next) {
    res.send({
        name: 'f18',
        sum: f18(2.12397)
    });
});

function f19(a) {
    return String(a)
      .split("")
      .map((number) => Number(number));
  }
router.get('/f19', function (req, res, next) {
    res.send({
        name: 'f19',
        sum: f19(931)
    });
});
module.exports = router;
