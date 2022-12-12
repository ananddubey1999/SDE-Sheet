// try to add some element with javaScript
// create an element
const divElement=document.createElement("div");

// write content in this divElement
divElement.innerText="this is content div";
// it only allows you towrite in the element

const paragraph = document.getElementById("content");
 paragraph.appendChild(divElement);


//  2. now m going to print the so many button using for loop
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


// `     `