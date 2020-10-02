'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
//listening for homepage, lets a response
router.get('/', function (req, res) {
   
    //calculate function take 3 parameteres
    function calculate(method, x, y) {
        //Declaration variables and req =request
        var method = req.query.method;
        // request and parse String to Float of x and Y
        var x = parseFloat(req.query.x);
        var y = parseFloat(req.query.y);
        var result = 0.0;
        //check the type of method
        switch (method) {
            case "add":
                result = x + y;
                console.log(x + ' + ' + y + ' = ' + result);
                break;
            case "subtract":
                result = x - y;
                console.log(x + ' - ' + y + ' = ' + result);
                break;
            case "multiply":
                result = x * y;
                console.log(x + ' * ' + y + ' = ' + result);
                break;
            case "divide":
                if (y != 0) {
                    result = x / y;
                    console.log(x + ' / ' + y + ' = ' + result);
                    break;
                }
                else {
                    console.log('Error! Division by zero')
                    break;
                }
            default:
                console.log('Error! Wrong operation')
                break;
        }
       
    }
  // funtion call
  calculate();
       
    //res = response
    //send response

    res.render('index', { title: 'Geidy' });
});

module.exports = router;
