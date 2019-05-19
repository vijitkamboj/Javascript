//  Promises - It is an object that may produce an single value some time in future Either a resolved value or a reason that it is not resolved.
// Promises are generally used to make asynchromous requests so it donot block the execution of our code.
//The executor receives two arguments: resolve and reject — these functions are pre-defined by the JavaScript engine. So we don’t need to
//create them. Instead, we should write the executor to call them when ready.

const promise = new Promise((resolve, reject) => {                 
    if (condition) {                                                     
        resolve('Worked');
    } else {
        reject('broked');
    }
})

// ----------------------------------------------------------------------------------------------------------------------------------------

// the executor may have only one result or an error
// resolve/reject expect only one argument (or none) and will ignore additional arguments.
let promise = new Promise(function(resolve, reject) {
    resolve("done");  //-executed
    
    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
    });


    promise.then(result => console.log(result))

//------------------------------------------------------------------------------------------------------------------------------------------


// .then() defines what to do with the result that promise resolve or rejects.

// We can add as many chain links of then() as we want 

    promise.then(result => result + '!').then( result1 => result1+'@');


promise.then(
    function(result) { /* handle a successful result */ },         // runs when Promise is resolved -recieves result
    function(error) { /* handle an error */ }                      // runs in case of rejection - recieves error argument
    );

// .catch() is equivalent to .then(null, errorHandlingFunction)
// .finally() is ewuivalent to .then(f, f) in the sense that it always runs when the promise is settled: be it resolve or reject.

//------------------------------------------------------------------------------------------------------------------------------------------

// .catch()

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
      });
      
      // reject runs the second function in .then
      promise.then(
        result => alert(result), // doesn't run
        error => alert(error) // shows "Error: Whoops!" after 1 second
      );
        // NOTE- In case something goes wrong, we can call reject with any type of argument (just like resolve). But it is recommended to use Error objects (or objects that inherit from Error)

// OR OR OR OR OR OR  USING .catch()

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    });
    
    // .catch(f) is the same as promise.then(null, f)
    promise.catch(alert); // shows "Error: Whoops!" after 1 second

// catch executes whenever there occurs an error in .then() chains above it

//----------------------------------------------------------------------------------------------------------------------------------------

// using  .finally() 
new Promise((resolve, reject) => {
    /* do something that takes time, and then call resolve/reject */
  })
    // runs when the promise is settled, doesn't matter successfully or not
    .finally(() => stop_loading_indicator)
    .then(result => show_result, err => show_error)

//---------------------------------------------------------------------------------------------------------------------------------------
// using promises to make API requests :
//rather than creating a objects of Promise class for fetch(), we can simply use fetch() beacuse fetch() returns a promise object.
    fetch('https://jsonplaceholder.typicode.com/users')  
            .then( response => response.json())           
            .then( users => console.log(users) )

        // it is similar to :
        const promise = new Promise((resolve, reject) => {
            
            resolve(fetch("https://jsonplaceholder.typicode.com/users"))
        });

        promise.then(resp => resp.json()).then(data => console.log(data))
        .catch( e => 'yo yo' + e)

//----------------------------------------------------------------------------------------------------------------------------------------

// Using promises with setTimeOut() :
    const prom1 = new Promise ( (res , rej) => {
        setTimeout( res ,100 , 'prom1res' ) 
    })
    const prom2 = new Promise ( (res , rej) => {
        setTimeout( res ,1000 , 'prom2res' ) 
    })
    const prom3 = new Promise ( (res , rej) => {
        setTimeout( res ,2000 , 'prom3res' ) 
    })
    const prom4 = new Promise ( (res , rej) => {
        setTimeout( res ,4000 , 'prom4res' ) 
    })

//---------------------------------------------------------------------------------------------------------------------------------------

// Promise.all()   -  returns the resolved value in form of an array in the order their promises were mentioned in array

    Promise.all([prom1,prom4,prom2,prom3])
    .then( valuearray => console.log(valuearray))   

    // valuearray =[ 'prom1res', 'prom4res', 'prom2res', 'prom3res' ]
    // Promise.all() only return array when all promises returns a value wheather resolved or rejected.

//----------------------------------------------------------------------------------------------------------------------------------------

// Making AJAX calls for multiple APIs using Promise.all() :
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]

Promise.all( urls.map( url => {
    return fetch(url).then( resp => resp.json())
})).then( results => console.log(results))

//------------------------------------------------------------------------------------------------------------------------------------------