// Variables:
    var temp;

    let temp1;     //ES6  -- lets us create local scopes in conditional statements also.
    const temp2;   // ES6 -- temp2 will always have same value or referenced memory address cannot be changed and can't be referenced again.

// -----------------------------------------------------------------------------

// DataTypes:

    var Int= 1 //Integer;

    var Str = "Vijit" //String;
        //template strings;
            const NewStr = `My name is ${Str}`

    var Bool1 = true ; //Bollean
    var Bool0 = false;

    var Und ; //When there is nothing to return undefined is returned.

    var N = null; //No value;

    var Obj = {  
        a:500,
        b:"Vijit",
        c:true,
        d:null
    };           // Object

        //Destructuring:
            const{a,b,c} = Obj;
        //Dynamic Aloocation of object keys:
            const name = "Vijit";
            obj={
                [name] : "Vijit",
                [1+2] : "3",
            };
        
        // this keyword - it represents the parent scope of whatever objects it is part of:
            const Obj1 ={
                a: () => console.log(this);
            }
            
            Obj1.a()  // >>> window       reason - Line 141

            const Obj1 ={
                a: function() {console.log(this)};
            }
            
            Obj1.a() // >>> {a:f} -- object
            

// -----------------------------------------------------------------------------

// Data Structures :

    const arr = [2,"Vijit",true,null];
    var arr1 ;

    // Array is a object but with keys as indices[0,len-1]

    // Looping over elements of array:
            arr.forEach((i) => {
                // any operation on i
            });
    // map,filter,reduce:
            arr1 = arr.map((i) => {                      // always has to return
                return(i**2)
            });


            arr1 = arr.filter( i => {
                return i>5                             // only those element are added to arr1 for which function returns true;          
            } );

            arr1 = arr.reduce((accumulator,i) => {
                return accumulator +i
            } , 0  )
            



// -----------------------------------------------------------------------------




// Compariisons:
    // ===
    // !==
    // >=
    // <=
    // >
    // <



// -----------------------------------------------------------------------------


// Conditions:
    if (condition) {
        
    } else {
        
    };
// Switch:

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    };

//Ternary:
    // <condi>? statementIfCondTrue : statementElse


// -----------------------------------------------------------------------------


// Functions:
    // Declaring Functions:
            function Func(a,b){
                return(a+b);                 
            }

            var Func2 = function(a,b){
                return(a+b)
            }
            // Arrow Functions ES6:
                const func3 = (a,b) => {
                    return(a+b)
                }
                // For only return:
                    const func4 = (a,b) => a+b;
                
                // For single parameter and just retrun:
                    const func5 = a => a**2;
                
                // When to use arrow function:
                    //Arrow functions don't have their own this or arguments binding. Instead, those identifiers are resolved in the lexical scope like any other variable. That means that inside an arrow function, this and arguments refer to the values of this and arguments in the environment the arrow function is defined in (i.e. "outside" the arrow function)
                    //  Arrow functions and function declarations / expressions are not equivalent and cannot be replaced blindly.If the function you want to replace does not use this, arguments and is not called with new, then arrow function can be used.




    // Default Parameters in ES6

    
    //  Closures :
        //  Function ran,executed ; Never going to run again but it is going to remember that there are refences to those variables so Child scope always ahs access to parent scope . 
        // It is never going to run as variable are const and const can not be referenced again.
            const parent = () =>{
                    const a=10;
                    const child = () => {
                        console.log(a);;
                    }
                return(func1());
            }
                
                const extern = parent();
                extern();
                //  >>> 10

    // Currying:
            const add = () => a+b;
            //  OR 

            const curriedAdd = (a) => (b) => a+b;

            //  Here curriedAdd is function which takes parameter a and returns another function with takes parameter b which retruns a+b

            // Evaluating 4+5;
            curriedAdd(4)(5);
            
            //  Advanteages -- Creating custom functions:
                curriedAdd4 = curriedAdd(4) // returns a function (b) => 4 + b;
                curriedAd4(5) -- // retruns 4+5
    
    // Compose :
            const compose = (f,g) => (a) => f(g(a));
                    
            const sum = (num) => num+1;
            const comp1 = compose(sum,sum);    // compose (sum,sum) returns a function (num) => (num+1)+1 
            comp1(5); // retruns (5+1)+1 = 7 


    // Avoid Side effects and have functional Purity.
    
 
// -----------------------------------------------------------------------------




// Loops:
    for (var i=0;i<5;i++){
        console.log("Yeah!!");

    }

    var i=0;
    while(i<6){
        console.log("Yeah!!");
        i++;
    }

    var arr = [1,2,3,4,5];
    arr.forEach(function(i){
        console.log(i);
    })

    // >>>
    // 1
    // 2
    // 3
    // 4
    // 5

