
      //  <-------- 1st concept to add div in given paragraph by the use of js ------->

// try to add some element with javaScript
// create an element
const divElement=document.createElement("div");

// write content in this divElement
divElement.innerText="this is content div";
// it only allows you towrite in the element

const paragraph = document.getElementById("content");
 paragraph.appendChild(divElement);



// <--------- 2. now m going to print the so many button in betwwen body using for loop ------->


function  showbutton(){
     for(let i=1;i<=10;i++){
        // creat a button tag
        const buttonElement = document.createElement("button");
        buttonElement.innerText=i;

        // to st Attribute to any element
        buttonElement.setAttribute("id","button"+i)

        // add this button to the body 
        const bodyElement=document.querySelector("body");
        bodyElement.appendChild(buttonElement);
     }
}
showbutton();


// <--------  when Button is Clicked I want to print Somthing  and count it in the cosonl ------->

const buttonElement =  document.getElementById("btn");
// whenever button is clicked do somthing
// first Argument is the name of the event 
// Second Argument is the fuction that should Execute once that event Happens

buttonElement.addEventListener("click",function(){
   //  this function will automatically be called when the button is clicked
   console.log("Button Clicked");
})