
function Ride_Function (){      //ternary operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short" : " You are tall enough";
    document.getElementById ("ride").innerHTML = Can_ride + " to ride";
}

function Vehicle(Make, Model, Year, Color){     // constructor function
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");     // creating new objects
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");

function myFunction (){   // function to display vehicle information
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_color + " -colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year.Vehicle_Year;
}

function count_Function(){  // nested function
    document.getElementById ("Counting").innerHTML = Count ();
    function Count (){
        var Starting_point = 9;
        function Plus_one (){ Starting_point += 1;}
        Plus_one();
        return Starting_point
    }
}

