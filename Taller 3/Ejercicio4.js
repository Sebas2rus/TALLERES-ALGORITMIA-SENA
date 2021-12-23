let año = prompt("Ingrese un año")

if (año%4==0 && año%100!=0) {
    console.log("Es un año Biciesto");
} else {
    console.log("No es un año biciesto")
}