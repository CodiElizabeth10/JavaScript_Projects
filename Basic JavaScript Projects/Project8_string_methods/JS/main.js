//CONTACT METHOD EXAMPLE

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence!";
    var whole_sentence = part_1. concat(part_2, part_3, part_4);
       document.getElementById("concatenate").innerHTML=whole_sentence;
}

//SLICE METHOD EXAMPLE

function slice_Method() {
    var Sentence = "all work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice (27,33);
     document.getElementById("Slice").innerHTML=Section;
}

//toUpperCase EXAMPLE

const str = 'I am using toUpperCase in this example<br> <br>';
document.write(str.toUpperCase());

//NUMBERS METHOD

function string_Method() {
    var X = 182;
document.getElementById("Numbers_to_string").innerHTML=X.toString();
}

//TOPRECISION METHOD

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//TOFIXED EXAMPLE
var a=38.7777;
document.writeln(a.toFixed(2));

//TEXT SEARCH DEMO
function text_Search() {
let text = "I want to go to the beach"
let position = text.search("beach");
document.getElementById("demo").innerHTML = position;
}

function value_Example() {
let text = "Valentine's Day is over, next we have Mardi Gras, and then Easter.";
let result = text.valueOf();
document.getElementById("valuedemo").innerHTML = result;
}