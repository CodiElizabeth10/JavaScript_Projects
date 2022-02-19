var tag = document.createElement("a");
var text = document.createTextNode("hello hello hello");
tag.appendChild(text);
var element = document.getElementById("new");
element.appendChild(tag);