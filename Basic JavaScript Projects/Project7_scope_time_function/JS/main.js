//global variable

var x = 10;
function Add_numbers_1() {
    document.write (20 + x + "<br>");
}
function Add_numbers_2(){
    document.write (x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>")

//Local Variable

function Add_numbers_1() {
var x= 10;
document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write (x + 100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>")

// IF statements

function get_Date() {
    if(new Date().getHours() > 12) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Time() {
    if(new Date().getHours() < 22) {
        document.getElementById("notice").innerHTML = "Good morning!";
    }
}

//IF Statements

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (age >=18) {
        Vote="You are old enough to vote!";
    }
    else {
        Vote= "You are not old enough to vote yet!";
    }
    document.getElementById("How_old_are_you?").innerHTML= "Vote";
}
console.log(Age_Function);

//IF/ELSE statements

function Time_Function() {
    var Time = new Date() .getHours();
    var Reply;
       if (Time < 12 == Time > 0) {
           Reply = "It is morning time!";
       }
       else if (Time >= 12 == Time < 18) {
           Reply = "It's afternoon.";
       }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}