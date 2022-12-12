//Functions In Js

// Functions are first class members in JS. Explain.

function foo(name){
    console.log("I am in Function Foo",name);
}

function baz(name){
    console.log("I am in Function Baz",name);
}

// We have a number. If Number gretaer than 4 then call foo Else Call Baz;

//Function as a parameter. Same Like Variables
function makeACall(functionToBeExecuted){
    functionToBeExecuted("Vanshu");
}


function determineNumber(num){
    if(num>4){
        //foo()
        //Function Reference
        //When Functions are passed as arguments, we need to pass the reference
        makeACall(foo)
    }
    else{
        makeACall(baz)
    }
}

determineNumber(5);

// ye hai easy tarikaaaa

function usecallback(callback){  // now hello is here in place of callback  jo ki wo fuction hai but veriable ki tarah step 2
    callback("hello")     // callback is a fuction having hello  step 1
}
usecallback(print)     // ye usecallback fuction ne print fuction ko bulata hai aur kehta hai mai tujhe value de raha 
                        // aur fir ye callback se hello lekr isse deta hai  step 3

function print(value){      // ab print ko value mila aue wo ab value == hello print kr dega step 4
    console.log(value);
}


                      // <------  scope chain and lexical Scoping  ----->
         
        /*    
        
        *The Scope chain is used to resolve the each value of variable name in JS.
          
        scope cahin is lexically defned which means that if the given fuction we know then we can easly see scope chain exits*6
        

        Lexical scoping :inner fuction can get access to their parent fuctions variable But not vice-versa.
        
        */ 
        
         var a="hello guys..";

         function first(){
            var b ="how are you?....";
            second();
            function second(){
                var c = "Myself Anand";
                console.log(a+b+c);
                three();
            }
         }

         function three(){
            var d=" this shows error";
            console.log(a+b+c);
         }
         first();

