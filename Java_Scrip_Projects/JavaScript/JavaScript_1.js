function Color_Function (){
    var Color_Output;
    var Colors = document.getElementById ("Coor_Input").value;
    var color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list."
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function(){            // getelementsByClassName() Method
    var A = document.getElementsByClassName ("Click");
    A[0].innerHTML="The text has changed!";
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"gray");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0,0,250,500);