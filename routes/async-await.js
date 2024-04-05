const express = require('express');
const router = express.Router();

require('dotenv').config()
const variableData = process.env.variableData || 'Async-await'

router.get('/', function (req, res, next) {
    res.send({
        name: 'Async-await',
        server: 'express',
        variableData: variableData
    });
});

router.get('/resolving-javaScript-promises', function (req, res, next) {
    let promise1 = Promise.resolve(5);
    let promise2 = 44;
    let promise3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then(function (values) {
        res.send({
            name: 'Resolving JavaScript Promises',
            server: 'express',
            result: values
        });
    });
});

router.get('/creating-async-function', function (req, res, next) {
    function helloWorld() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Hello World!');
            }, 2000);
        });
    }

    const msg = async function () { //Async Function Expression
        const msg = await helloWorld();
        //console.log('Message:', msg);
    }

    const msg1 = async () => { //Async Arrow Function
        const msg = await helloWorld();
        //console.log('Message:', msg);
    }

    msg();
    msg1();
    res.send({
        name: 'Resolving JavaScript Promises',
        server: 'express',
        result_1: msg(),
        result_2: msg1()
    });
});

router.get('/async-await-promises', function (req, res, next) {

    function helloWorld() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Hello World!');
            }, 2000);
        });
    }

    async function msg() {
        const msg = await helloWorld();
        console.log('Message:', msg);
    }

    msg();

    Promise.all([promise1, promise2, promise3]).then(function (values) {
        res.send({
            name: 'Async Await Promises',
            server: 'express',
            result: msg()
        });
    });
});

router.get('/async-function-error-handling', function (req, res, next) {
    let json = '{ "age": 30 }'; // incomplete data

    try {
        let user = JSON.parse(json); // <-- no errors
        alert(user.name); // no name!
    } catch (e) {
        alert("Invalid JSON data!");
    }
    Promise.all([promise1, promise2, promise3]).then(function (values) {
        res.send({
            name: 'Async Function Error Handling',
            server: 'express',
            result: values
        });
    });
});

router.get('/aysnc-and-await-keywords', function (req, res, next) {
    function helloWorld() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Hello World!');
            }, 2000);
        });
    }

    async function msg() {
        const msg = await helloWorld();
        console.log('Message:', msg);
    }

    msg();

    Promise.all([promise1, promise2, promise3]).then(function (values) {
        res.send({
            name: 'Resolving JavaScript Promises',
            server: 'express',
            result: msg()
        });
    });
});

module.exports = router;
