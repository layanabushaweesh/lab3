var servicetype = prompt("what type of service do you want");
var noofservices =prompt("how many service do you want to order");

var rderdetalis;
if (noofservices>=1 && noofservices<3){
    orderdetalis="congrates you gain 20% discount";
}
else if (noofservices>3 &&  noofservices <=5){
    orderdetalis="congrates you gain extra free service";
}
else if (noofservices>5 && noofservices<=10){
    orderdetalis="congrates you gain 50% discount";
}
else if ( noofservices>10){
    orderdetalis="congrates you gain 50% discount with extra free service";
}
else {
    orderdetalis="no discount";
}
document.write(orderdetalis);
confirm("are you enjoying our services ");
alert ("thank you and see you soon");
document.getElementById("appointment").innerText=servicetype;
