function my_Dictionary(){
    var Animal={
        Species:"Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}

function Meow(){
    var Animal={
    Species: "Cat",
    Color: "Silver",
    Breed: "Ragdoll",
    age: "1",
    sounds: "Meow" 
 };
 delete Animal.sounds;
 document.getElementById("Meow").innerHTML=Animal.sounds;
}