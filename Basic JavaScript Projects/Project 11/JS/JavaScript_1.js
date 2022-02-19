function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
            case "Yellow":
                Color_Output = "Yellow" + Color_String;
        break;
                case "Green":
                Color_Output = "Green" + Color_String;
        break;
                case "Blue":
                    Color_Output = "Blue" + Color_String;
        break;
                case "Pink":
                    Color_Output = "Pink" + Color_String;
        break;
                case "Purple":
                    Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//GET ELEMENT BY CLASS NAME METHOD
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//CANVAS ELEMENT AND BACKGROUND
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 300, 0);
grd.addColorStop(0, "pink");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);