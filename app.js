// Escribe tu código aquí.
let word = document.getElementById("word");
let btn = document.getElementById("btn");
let lista = document.getElementById("lista")
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'animales', 'caracol','casa','bosque'];

btn.addEventListener("click", function (event) {
    event.preventDefault();
    let newArray = bigWords(word.value, myArray); //recuerda usar el .value porque es un input
    printArray(newArray);
});

//Funcion para saber que palabras son mas largas que la parabra ingresada
function bigWords(word, myArray) {
    myArray = myArray.filter((element) => element.length > word.length);
    return myArray;
}//bigWords

//funcion para insertar el array obtenido como una lista
function printArray(myArray) {
    myArray.forEach(element => {
        lista.insertAdjacentHTML("beforeend", `<li>${element}</li>`);
    }); // forEach
}; // printArray
