//BREAK AND CONTINUE
let text = "";
for (let f = 7; f < 12; f++) {
  if (f === 6) { break; }
  text += "The number is " + f + "<br>";
}

document.getElementById("break").innerHTML = text;


let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;


