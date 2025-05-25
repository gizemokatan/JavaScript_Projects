function full_Sentence(){           // concat() Method
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat (part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){            // slice() Method
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice (27.33);
    document.getElementById ("Slice").innerHTML = Section;
}

function string_Method(){        // Numbers (toString) Method
    var X= 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method(){        // toPrecision() Method
    var X = 12938.30129873752642135;
    document.getElementById("Precision").innerHTML = X.toPrecision(15)
}