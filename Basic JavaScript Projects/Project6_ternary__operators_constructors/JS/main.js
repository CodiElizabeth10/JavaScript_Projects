//true/false conditions


function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}





function Vote_Function() {
    var Age, Can_vote;
    Age= document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}


//OOP and constructors examples


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
 var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
 var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
 var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard"); 
 function myFunction() {
     document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
 }




 function Game(Name, Console, Developers) {
    this.Game_Name=Name;
    this.Game_Console=Console;
    this.Game_Developers=Developers;

}
 var Jared = new Game("Black Desert Online", "PS4, PS5, Xbox One, PC, iOS, Android", "Pearl Abyss");
 var Mia = new Game ("Fortnite", "PS 4, PS 5, Xbox One, PC, Nintendo Switch, iOS, Android", "Epic Games");
 var Hailey = new Game ("Nefarious", "Nintendo Switch, PC, and  iOS", "Josh Hano and Digerati"); 
 function gamerFunction() {
     document.getElementById("New_and_This").innerHTML="Haileys new favorite game is " + Hailey.Game_Name + " played on, <br> " + Hailey.Game_Console + " and developed by " + Hailey.Game_Developers;
 }

//Nested functions/Identifiers and literals

 function count_Function() {
     document.getElementById("counting").innerHTML=count();
     function count() {
         var starting_point=9;
         function Plus_one() {starting_point += 1;}
         Plus_one ();
         return starting_point;
     }
 }