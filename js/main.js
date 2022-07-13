const gridDom = document.getElementById('grid');




for (let i = 0; i < 100; i++) {
    
    const currentElement = createGridSquare();

    

    

    currentElement.addEventListener('click', 
        function() {
            currentElement.classList.toggle('clicked');
            console.log('clicked'[i]);
        }
        
    );
          
        gridDom.append(currentElement);
}

function createGridSquare() {
    
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');

    return currentElement;
}
