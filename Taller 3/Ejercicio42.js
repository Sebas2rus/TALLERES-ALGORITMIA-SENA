let personas = prompt("Cuantas personas desean ingresar ")
let categoria1=0,categoria2=0,categoria3=0
const entrada = 100

for (let i = 0; i < personas; i++) {
    
    let edad = prompt("Ingrese la edad")
    if(edad < 5){
        categoria1++
    }else if(edad >5 && edad<40){
        categoria2++
    }else if(edad > 40){
        categoria3++
    }
}
document.write(`El dinero no recibido por menores de 5 años es: ${categoria1*entrada}`)
document.write(`Las personas de la categoria 1 son: ${categoria1} Las personas de la categoria2 son: ${categoria2} Las personas de la categoria3 son: ${categoria3}`)