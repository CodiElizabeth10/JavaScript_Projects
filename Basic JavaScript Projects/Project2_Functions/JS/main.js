function my_First_Function() {
      var str = "I am making the button text!";
document.getElementById("Button_Text").innerHTML=str;
}

function changeColor(newColor) {
    var elem = document.getElementById('para', 'Button_Text');
    elem.style.color = newColor;
  }


    
  function myFunction() {
    var sentence="I am learning<br>";
    sentence += "a lot from this program";
    document.getElementById("concatenate").innerHTML=sentence;
}


function changeStyle() {
    var element = document.getElementById("myElement");
    element.style.fontFamily = "monospace";
}