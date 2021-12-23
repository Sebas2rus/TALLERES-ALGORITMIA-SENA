function division(num1,num2) {
    let aux = 0,division =0

    
    while (aux<num1) {                                      
        if (aux<num1) {
            division++
        }
        aux+=num2  
    }    
    document.write(`El numero exacto de la division es: ${division} El residuo es: ${num1-aux}`)
}

let numero1 = prompt("Ingrese el dividendo")
numero1 = Number(numero1)

let numero2 = prompt("Ingrese el divisor")
numero2 = Number(numero2)

division(numero1,numero2)