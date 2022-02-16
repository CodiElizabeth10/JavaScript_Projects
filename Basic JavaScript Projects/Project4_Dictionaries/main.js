function my_Dictionary(){
    var Animal={                                //dictionary kvp example
        Species:"Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}

function Meow(){
    var Animal={                                    //undefined kvp example
    Species: "Cat",
    Color: "Silver",
    Breed: "Ragdoll",
    age: "1",
    sounds: "Meow" 
 };
 delete Animal.sounds;
 document.getElementById("Meow").innerHTML=Animal.sounds;
}

