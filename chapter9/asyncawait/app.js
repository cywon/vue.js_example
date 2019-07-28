function func(){
  return 7;
}

async function asyncFunc(){
  return 7;
}

console.log(func())
console.log(asyncFunc())

// asyncFunc().then(result => {
//   console.log(result);
// })



// async function asyncFunc() {
//   let promise = new Promise( (resolve, reject) => {
//     setTimeout( () => { resolve(7) }, 3000);
//   });

//   let result = await promise;
//   console.log(result);
// }

// asyncFunc();


// //Uncaught SyntaxError: await is only valid in async function
//  function asyncFunc() {
//   let promise = new Promise( (resolve, reject) => {
//     setTimeout( () => { resolve(7) }, 3000);
//   });

//   let result = await promise;
//   console.log(result);
// }

// asyncFunc();


// //Uncaught (in promise) Error
// async function asyncFunc() {
//   let promise = new Promise( (resolve, reject) => {
//     setTimeout( () => { reject("Error") }, 3000);
//   });

//   let result = await promise;
//   console.log(result);
// }

// asyncFunc();

// //Uncaught (in promise) Error 처리
// async function asyncFunc() {
//   let promise = new Promise( (resolve, reject) => {
//     setTimeout( () => { reject("Error") }, 3000);
//   });

//   let result = await promise.catch(err => { console.error(err); });
//   console.log(result);
// }

// asyncFunc();


// //
// async function asyncFunc() {
//   let promise = new Promise( (resolve, reject) => {
//     setTimeout( () => { reject("Error") }, 3000);
//   });

//   let result = await promise.catch(err => {
//     console.error(err);
//     return err;
//   });
  
//   console.log(result);
// }

// asyncFunc();








