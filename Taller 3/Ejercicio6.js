let cantidad = prompt("Cuantas personas quiere registar");
let categoria1=0, categoria2=0, categoria3=0, categoria4=0, categoria5=0
const entrada = 100;

for (let i = 0; i < cantidad; i++) {
    let edad = prompt("Cual es su edad")    

    if (edad >= 5 && edad < 14) {
categoria1++
    } else if (edad >= 14 && edad < 19) {
        categoria2++
    } else if (edad >= 19 && edad < 45) {
        categoria3++
    } else if (edad >= 45 && edad < 65) {
        categoria4++
    } else if (edad > 65) {
        categoria5++
    } else {
        console.log("No puede entrar al teatro");
    }
}
console.log(`Los descuentos totales ascienden a ${categoria1*0.35*entrada} pesos `);
console.log(`Los descuentos totales ascienden a ${categoria2*0.25*entrada} pesos`);
console.log(`Los descuentos totales ascienden a ${categoria3*0.1*entrada} pesos`);
console.log(`Los descuentos totales ascienden a ${categoria4*0.25*entrada} pesos`);
console.log(`Los descuentos totales ascienden a ${categoria5*0.35*entrada} pesos`);