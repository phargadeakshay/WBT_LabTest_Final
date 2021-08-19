var fib = function(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var arr = fib(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
};  
   console.log(fib(8));


// var http = require('http');  
// http.createServer(function (req, res) {  
//     res.write(fib(8));  
//     res.end();  
// }).listen(5000);  
  
// console.log('Server running at 5000'); 