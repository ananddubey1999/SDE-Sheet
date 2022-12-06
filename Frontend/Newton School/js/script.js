console.log("city");

// first way of taking function when we use consol.log
function add(a,b){
    const sum=a+b;
    // return sum;
    console.log(sum);
}
add(3,4);

// secont way of taking function when we use to return somthing
function printAdd(a,b){
    const sum=a+b;
      return sum;
}
 const add2 = printAdd(8,4);
 console.log(add2);

//  const fooNum=Number(foo)
//  console.log("fooNum is",fooNum)
//  console.log("Typeof",typeof fooNum,typeof foo)
 
// concatination of two argument 
console.log(3+4);
console.log(3+"hello");
console.log(3+6+"8");
console.log("3"+"4");

// use if , else in fuction
var color="red";
judgeColor(color);
function judgeColor(color){
  if(color==="red"){
    console.log("this is a good color");
  }
  else{
    console.log("i prefer some other color");
  }
}

// use to throw the Erorr in given fuction
// throwErorr();
// function throwErorr(){
//     throw new Error("this is my custom Erorr");
// }

  
// give exercies question by sir
  const result = substract(7,6);
  console.log(result);
function substract(a,b){
    if(typeof a!="number"|| typeof b!="number"){
        throw new Error("both argument need to be a number");
    }
    else{
        if(b>a){
            return b-a;
        }
        else
        return  a-b;
        
    }
}

//  one more exercies question 
function ternaryDemo(){
    var num =8;
    num>10? console.log("num is greater then 10"):console.log("num is less then 10");
}
ternaryDemo();

// use while loop in given function
function whileDemo(){
    var num=10;
    while(num>0){
        console.log("Number is"+num);
        num--;
    }
}
whileDemo();
