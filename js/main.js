const playDom = document.getElementById('play');
playDom.addEventListener('click', inizioGioco );

function inizioGioco() {
    const difficult=parseInt(document.getElementById('difficult').value);

    let cellTotal;
    let cellPerSide;

    switch (difficult) {
        case 1:
            default:
                cellTotal = 100;
                cellPerSide = 10;
                break;
        case 2:
            cellTotal = 81;
            cellPerSide = 9;
            break;
        case 3:
            cellTotal = 49;
            cellPerSide = 7;
            break;
}

generatePlayground();

    function generatePlayground() {
        const gridDom = document.getElementById('grid');

        gridDom.innerHTML = ''; // svuota il playground

        for (let i = 1; i <= cellTotal; i++) {  //parto da 1

            const currentElement = createGridSquare(i, cellPerSide);
            currentElement.addEventListener('click',
                function () {
                    console.log(this.innerText);
                    this.classList.toggle('clicked');
                }
            );

            gridDom.appendChild(currentElement);
        }
    }

    function createGridSquare(numero, cellPerSide) {
        
        const currentElement = document.createElement('div');
        currentElement.classList.add('square');
        currentElement.append(numero);
        currentElement.style.width = `${100 / cellPerSide}%`;
        currentElement.style.height = `${100 / cellPerSide}%`;
        
        return currentElement;
    }
}