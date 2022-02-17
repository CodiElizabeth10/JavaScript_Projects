document.write(typeof 5);                   //returning typeof string example
document.write("<br>");
document.write("<br>");

document.write("12" + 6);                   //script element example
document.write("<br>");
document.write("<br>");

document.write(2E310);                      //infinity output example
document.write("<br>");
document.write("<br>");

document.write(-3E310);                     //negative infinity output example
document.write("<br>");
document.write("<br>");

document.write(8<20);                      //boolean true example
document.write("<br>");
document.write("<br>");

document.write(5>50);                      //boolean false example
document.write("<br>");
document.write("<br>");

console.log(2 + 6);
document.write("<br>");                      //console log example
document.write("<br>");

console.log(8>10);
document.write("<br>");                     //console log false example
document.write("<br>");

document.write(5==5);                      //boolean true console log example
document.write("<br>");
document.write("<br>");

document.write(10==15);                    //boolean false console log example
document.write("<br>");
document.write("<br>");

F=30;
G=30;
document.write(F===G);                      //triple equal return true by ensuring to match the data type and value example
document.write("<br>");                     
document.write("<br>");

H=50;
I=61;
document.write(H===I);                      //triple equal return false by writing a different data type and different value example
document.write("<br>");                     
document.write("<br>");

J=75;
K="75";
document.write(J===K);                      //triple equal return false by same value but different but different data type example
document.write("<br>");
document.write("<br>");

L="August";
M="August";
document.write(L===M);                      //triple equal example for same data type and value
document.write("<br>");
document.write("<br>");

N="August";
O="September";
document.write(N===O);                      //triple equal return false by writing the same data type but a different value for both example
document.write("<br>");
document.write("<br>");

document.write(6 > 7 && 7 > 5);
document.write("<br>");                 //&& (and) operator false example
document.write("<br>");

document.write(7 > 6 && 8 > 7);            //&&  (and) operator true example
document.write("<br>");
document.write("<br>");

document.write(10 > 15 || 10 > 9);        // || (or) operator true example
document.write("<br>");
document.write("<br>");

document.write(5 > 9 || 9 > 15);           //|| (or operator false example)
document.write("<br>");
document.write("<br>");



function my_Example(){
    document.getElementById("demo").innerHTML=0/0            //NaN example
}

function my_False(){
document.getElementById("false").innerHTML=isNaN('sunday monday tuesday');          //true nan string example
}

function my_True(){
document.getElementById("true").innerHTML=isNaN('183');                           //fal se nan example
} 


function not_Function(){
document.getElementById("Not").innerHTML=!(30>5);                                       //NOT operator false example
}

function demo_Function(){
    document.getElementById("Not2").innerHTML=!(5>10);                                  //NOT operator true example
}