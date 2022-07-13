const gridDom = document.getElementById('grid');




for (let i = 1; i <=100; i++) {
    
    const currentElement = createGridSquare();

    

    

    currentElement.addEventListener('click', 
        function() {
            currentElement.classList.toggle('clicked');
            
            console.log(i);
        }
        
    );
          
        gridDom.append(currentElement);
}

function createGridSquare() {
    
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

    return currentElement;
}
/* numerazione progressiva da 1 a 100 */
function getNumber (num) {
    for (let i = 1; i <= 100; i++) {
        const currentElement = createGridSquare();
        gridDom.append(currentElement);
    }
    console.log(i);
}









/*
const gridDom = document.getElementById('grid');

const numUsati = [];


for (let i = 1; i <=100; i++) {
    
    const numeroProgressivo = getUniqueNumber(numUsati,1,100);
    numUsati.push(numeroProgressivo);

    const currentElement = createGridSquare(numeroProgressivo);

    

    

    currentElement.addEventListener('click', 
        function() {
            currentElement.classList.toggle('clicked');
            
            
        }
        
    );
          
        gridDom.append(currentElement);
}



function getNumeroProgressivo (min, max) {
    for (let i = 1; i <= 100; i++) {
        
        if (i >= min && i <= max) {
            return i;
        }
    }
    //return numeroProgressivo;
}

function getUniqueNumber(array, min, max) {
    let numeroValido = false;
    let numeroCreato;
    while ( numeroValido === false) {
        numeroCreato = getNumeroProgressivo(min, max);
        if (array.includes(numeroCreato) === false) {
            numeroValido = true;
        }
    }

    return numeroCreato;
}

function createGridSquare(numero) {
    
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

    const numberSquare = document.createElement('div');
    numberSquare.classList.add('square-number');
    numberSquare.innerHTML = numero;
    currentElement.append(numberSquare);

    return currentElement;
}

non risponde in browser..gira all'infinito
dopo aver corretto gli errori
*/ 