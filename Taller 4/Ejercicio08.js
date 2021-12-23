function sueldo(sueldo_hora,horas) {
    let sueldo=0;
    if (horas > 40) {
       return sueldo=(40*sueldo_hora)+(sueldo_hora*1.5*(horas-40))
    } else {
        return sueldo=(horas*sueldo_hora)
    }    
}

let sueldo_hora=prompt("Ingrese el precio por hora trabajada")
sueldo_hora=Number(sueldo_hora)
let horas = prompt("Cuantas horas a trabajado")
horas = Number(horas)

document.write(`Su sueldo final es: ${sueldo(sueldo_hora,horas)}`)