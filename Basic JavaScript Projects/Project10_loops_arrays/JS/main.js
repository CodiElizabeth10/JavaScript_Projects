
//CALL LOOPS
function Call_Loop() {
    var Digit= "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}


//FOR LOOPS
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
}
document.getElementById("List_of_Instruments").innerHTML = Content;
}

//CONST KEYWORDS
function constant_function() {
    const Musical_Instrument = {type:"piano", brand:"Fender", color:"white"};
    Musical_Instrument.color = "Orange";
    Musical_Instrument.price = "$100";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//ARRAYS AND OBJECTS
function cat_pics () {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//LET KEYWORD
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);


//RETURN FUNCTION
var V = myFunction(6, 6);
document.getElementById("test").innerHTML = V;
function myFunction(c, d) {
  return c + d;
}


//OBJECTS DATA STRUCTURE LET FUNCTION
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

