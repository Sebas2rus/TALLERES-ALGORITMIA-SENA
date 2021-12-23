let mayor,medio,menor
for (let i = 0; i < 50; i++) {
    let sueldo = prompt("Cual es su sueldo")
    
    if(sueldo>300000){
        mayor++
    }else if(sueldo<=300000 && sueldo>100000){
        medio++
    }else if (sueldo<=100000){
        menor++
    }
    document.write(`Las personas que ganas mas de 300.000 pesetas son: ${mayor}`)
    document.write(`Las personas que ganas mas de 100.000 y menos de 300.000 pesetas son: ${medio}`)
    document.write(`Las personas que ganas menos de 100.000 pesetas son: ${menor}`)

}