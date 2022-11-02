var menuListArray = ["Pizza Vegetariana",
                    "Pizza de Frango",
                    "Pizza Portuguesa",
                    "Pizza Quatro Queijos",
                    "Pizza de Calabresa",
                    "Pizza Extravagante"];

function getMenu(){
    var htmldata="";
    menuListArray.sort();
    for(var i=0; i<menuListArray.lenght; i++){
        htmldata = htmldata + menuListArray[i] + '<br>';
    }
    document.getElementById("verMenu").innerHTML = menuListArray;
}

function addItem(){
    var htmldata="";
    var imgtags = '<img id="im1" src="pizzaImg.png">';
    var item=document.getElementById("addItem").value;
    menuListArray.sort();
    for(var i = 0; i<menuListArray.lenght; i++){
        htmldata = htmldata + imgtags + menuListArray[i] + "<br>";
    }
    document.getElementById("menunovo").innerHTML = htmldata;
}

function addTop(){
    var itemnovo = document.getElementById("adicionar").value;
    menuListArray.push(itemnovo);
    addItem();
}