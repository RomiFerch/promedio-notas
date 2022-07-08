// function imprimirNumero(numero){
//     for (let i = 1; i <=numero ; i++) {
//         if (i%2===0) {
//             console.log(`${i} es par`)        
//         }else{console.log(`${i} es impar`)


// let  filtrarNota = [68, 25, 90, 75, 90]
// function aprob(filtrarNota)
// {
//     let result = filtrarNota.filter( filtrarNota => filtrarNota >=70);
//     console.log(result);
// }

// aprob(filtrarNota) ])

// 
let nombre = "ROMINA"
console.log  (nombre)

//método convertir a mayusculas o minisculas

nombre = nombre.toLowerCase()
console.log (nombre)

//metodo includes
//los metodos se escribem con parentesis. 

console.log(nombre.includes("mi"))

//metodo remplazo
console.log(nombre.replace("rom", "morf"))


//*En el caso de Length es una propiedad
console.log(nombre.length)

//metodos o arrays empiezan de 0
//metodo para ver la posición de un caracter
console.log(nombre.charAt(4))

//concatenar Variables

let apellido = "fernandez"

let nombreCompleto = nombre + " " + apellido //no van con parentesis ni comillas
// console.log(nombreCompleto)

 //metodo concat

 console.log(nombre.concat(" ").concat(apellido))

 //metodo concatenación mas utilizado con back stick(``)

 let nombreCompleto2 = `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`
 console.log(nombreCompleto2)

