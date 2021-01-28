
var servicetype=prompt ("how many service do you want to order");

var order = prompt("what type of service do you want skin or nail");

while ( order !== "skin" && order !== "nail"){

    order = prompt("what type  of service do you want skin or nail");
}

var ordertype = "" ;
if ( order === "skin") {

    ordertype= '<img src ="skin.jpg" />' ;


}else if (order === "nail"){

    ordertype=  '<img src ="nails.jpg"/>' ;
}
var result = "";
for (var i = 0 ; i < servicetype ; i++){
    result=result+ordertype;
}


confirm("are you enjoying our services ");
alert ("thank you and see you soon");
document.write(result);
document.getElementById("appointment").innerText=servicetype;
