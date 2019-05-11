// Variables:
    var temp;

    let temp1;     //ES6  -- lets us create local scopes in conditional statements also.
    const temp2;   // ES6 -- temp2 will always have same value or referenced memory address cannot be changed.

// DataTypes:

    var Int= 1 //Integer;

    var Str = "Vijit" //String;
        //template strings;
            const NewStr = `My name is ${Str}`

    var Bool1 = true ; //Bollean
    var Bool0 = flase;

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
        
// Data Structures :

    var arr = [2,"Vijit",true,null];

    // Array is a object but with keys as indices[0,len-1]




// Compariisons:
    // ===
    // !==
    // >=
    // <=
    // >
    // <


// Conditions:
    if (condition) {
        
    } else {
        
    };

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    };

    //Ternary:
        // <condi>? statementIfCondTrue : statementElse


// Functions:
    function Func(a,b){
        return(a+b);
    }

    var Func2 = function(a,b){
        return(a+b)
    }
    // Default Parameters in ES6

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

