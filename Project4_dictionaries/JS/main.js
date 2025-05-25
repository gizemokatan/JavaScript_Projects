function my_Dictionary(){
    var Dior = {
        Name: "J'adore Eau de Parfum",
        Smell: "Solar and Floral Smell",
        Price: "215 CAD",
    }

    var Prada ={
        Name: "Paradoxe Intense",
        Smell: "Bergamot, Pear, Amber, Vanilla, and Musk",
        Price: "230 CAD",
    };

    delete Prada.Name; //Delete Operator
    document.getElementById("Dictionary").innerHTML = Prada.Name; //Dictionary
}


