function count_to_Ten(){                // while loop
    var digit = "";
    var x = 1;
    while (x<11){
        Digit += "<br>" + X;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   // for loop
var Content = "";
var Y;
function for_Loop (){
    for (Y = 0; Y< Instruments.length; Y++){
        Content += Instruments [Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics(){            //array
    var Cat_Picture = []
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById ("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + " .";
}

function constant_function(){       // constant function
    const Musicial_Instrument = { type:"guitar", brand: "Fender", color: "black"};
    Musicial_Instrument.color = "yellow";
    Musicial_Instrument.price = "$1200";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musicial_Instrument.type + " was " + Musicial_Instrument.price;
}

var X = 85;                 // let
document.write(X);
{
    let X = 39;
    document.write ("<br>" + X);
}
document.write("<br>" + X);

let car = {             // this function
    0: "Dodge ",
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function (){
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById ("Car_Object").innerHTML = car.description ();