//what are the different DOM's we will need to consider
//what are the HTML DOM Tree objects?
//element <input>
//element <button>
//element <li> (list item)
//element <ul>

// what are ways to find HTML elements
// document.getElementbyId()
//document.getElementsbyTag() (example <p> or <header> or <body>)
//document.getElementsbyClass()
//document.querySelectorAll() 
//document.body
//document.images
//document.forms
//document.links

// button clicked
var button = document.getElementById("button").addEventListener('click', getText);

// this grabs the value/entered text in the input
function getText(event){
var inputText = document.getElementById("myText").value;

//this creates a <li> element in HTML: by creating the li, grab the input text and associate it with <li> and then attaching <li> to HTML
    var itemList = document.createElement('li');
// create a class name for li
itemList.className="list-group-item";

// add text node with input text
itemList.appendChild(document.createTextNode(inputText));
//append the li to ul
var toDoList=document.getElementById('items');
toDoList.appendChild(itemList);
//this empties the input field and set input field value to null;
document.getElementById("myText").value="";

itemList.onclick=function(){

    itemList.style.textDecoration='line-through';

    setTimeout(function () {
toDoList.removeChild(itemList)}, 1000);
}
}

// select the text on the to do list to remove

// itemList.onclick=function(){
//     itemList.style.textDecoration='line-through';}


// itemList.onclick=timeOut;{
// toDoList.removeChild(itemList);}


// }
// }

// }
