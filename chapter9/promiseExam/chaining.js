var fs = require("fs")
var data = ["김창수", "01077859923", 25000 ];
console.log("시작");
new Promise(function(resolve, reject) {
  resolve(data[0]);
})
.then(function(result) { 
  console.log(result); //김창수
  return result + "," + data[1];
})
.then(function(result) { 
  console.log(result); //김창수,01077859923
  return result + "," + data[2];
})
.then(function(result) {
  console.log(result); //김창수,01077859923,25000
  fs.writeFile('paylist.csv', result, function(error){ if(error) console.error(error); })
})
.catch(function(error){ console.log(error); })
console.log("종료");



// var fs = require("fs");
// var data = ["김창수", "01077859923", 25000 ];

// function makeCsv(value){
//   return new Promise(function(resolve, reject){
//       resolve(value)
//   });
// }

// console.log("시작");
// makeCsv(data[0]).then(function(result) { 
//   console.log(result); //김창수
//   return result + "," + data[1];
// })
// .then(function(result) { 
//   console.log(result); //김창수,01077859923
//   return result + "," + data[2];
// })
// .then(function(result) {
//   console.log(result); //김창수,01077859923,25000
//   fs.writeFile('paylist.csv', result, function(error){ if(error) console.error(error); })
// })
// .catch(function(error){
//   console.log(error);
// })
// console.log("종료");



