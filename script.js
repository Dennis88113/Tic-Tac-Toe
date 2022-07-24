
const container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container)

const title = document.createElement('h1');
title.textContent = ('Cross&Nulls');
title.classList.add('title');
container.append(title);
container.setAttribute


    let m = prompt('Введите "3" или "4" для старта игры', )
    let n = m



const gameContainer = document.createElement('section');
gameContainer.classList.add('gameContainer')
gameContainer.style.cssText= ` display: grid;
width: 80vh;
min-height: 85vh;
grid-template-columns: repeat(${m}, 1fr);
grid-template-rows: repeat(${n}, 1fr);
`

container.append(gameContainer)

let boxes = [[]];
for (let i = 0; i < n; i++){
    boxes[i] = []
    let row  = document.createElement('div')
    for (let j = 0; j < m; j++){
    let column  = document.createElement('div')
    boxes[i].push(column)   
    }  
}
for (const box of boxes) {
    box.forEach(element => {
        gameContainer.append(element)
        element.classList.add('cell')

    });
}
let popUpContainer = document.querySelector('.pop-up-container') 
let winContent = document.querySelector('.content')
let close = document.querySelector('.close')
let popUpWindow = document.querySelector('.pop-up') 


let counter = 0;

const win = function checkWinner() {
    if ( m<4, n<4 ){
        counter++

            if (counter<9 &&
                boxes[m-m][n-n].textContent =='X' && boxes[m-m][n-2].textContent =='X' && boxes[m-m][n-1].textContent =='X' ||
                boxes[m-2][n-n].textContent =='X' && boxes[m-2][n-2].textContent =='X' && boxes[m-2][n-1].textContent =='X' ||
                boxes[m-1][n-n].textContent =='X' && boxes[m-1][n-2].textContent =='X' && boxes[m-1][n-1].textContent =='X' ||

                boxes[m-m][n-1].textContent =='X' && boxes[m-2][n-1].textContent =='X' && boxes[m-1][n-1].textContent =='X' ||
                boxes[m-m][n-2].textContent =='X' && boxes[m-2][n-2].textContent =='X' && boxes[m-1][n-2].textContent =='X' ||
                boxes[m-m][n-n].textContent =='X' && boxes[m-2][n-n].textContent =='X' && boxes[m-1][n-n].textContent =='X' ||

                boxes[m-m][n-n].textContent =='X' && boxes[m-2][n-2].textContent =='X' && boxes[m-1][n-1].textContent =='X' ||
                boxes[m-m][n-1].textContent =='X' && boxes[m-2][n-2].textContent =='X' && boxes[m-1][n-n].textContent =='X' ) 
                {   
                    winContent.innerHTML = `<p> победили Крестики </p>`  
                    popUpWindow.classList.add('display')
                    counter = 0
            }
            
        else  
            if (counter<9 &&
                boxes[m-m][n-n].textContent =='O' && boxes[m-m][n-2].textContent =='O' && boxes[m-m][n-1].textContent =='O' ||
                boxes[m-2][n-n].textContent =='O' && boxes[m-2][n-2].textContent =='O' && boxes[m-2][n-1].textContent =='O' ||
                boxes[m-1][n-n].textContent =='O' && boxes[m-1][n-2].textContent =='O' && boxes[m-1][n-1].textContent =='O' ||
                
                boxes[m-m][n-1].textContent =='O' && boxes[m-2][n-1].textContent =='O' && boxes[m-1][n-1].textContent =='O' ||
                boxes[m-m][n-2].textContent =='O' && boxes[m-2][n-2].textContent =='O' && boxes[m-1][n-2].textContent =='O' ||
                boxes[m-m][n-n].textContent =='O' && boxes[m-2][n-n].textContent =='O' && boxes[m-1][n-n].textContent =='O' ||
                
                boxes[m-m][n-n].textContent =='O' && boxes[m-2][n-2].textContent =='O' && boxes[m-1][n-1].textContent =='O' ||
                boxes[m-m][n-1].textContent =='O' && boxes[m-2][n-2].textContent =='O' && boxes[m-1][n-n].textContent =='O' ) {
                
                    winContent.innerHTML =`<p> победили Hолики </p>`
                    popUpWindow.classList.add('display')
                    counter = 0      
            }
        else if (m<4, n<4, counter==9) {
            winContent.innerHTML =`<p> Ничья </p>`
            popUpWindow.classList.add('display')      
        }
       
    }

     else  if ( m=4, n=4) {
        counter++
        if (counter<16 &&
            boxes[m-m][n-n].textContent =='X' && boxes[m-3][n-n].textContent =='X' && boxes[m-2][n-n].textContent =='X' ||
            boxes[m-3][n-n].textContent =='X' && boxes[m-2][n-n].textContent =='X' && boxes[m-1][n-n].textContent =='X' ||

            boxes[m-m][n-3].textContent =='X' && boxes[m-3][n-3].textContent =='X' && boxes[m-2][n-3].textContent =='X' ||
            boxes[m-3][n-3].textContent =='X' && boxes[m-2][n-3].textContent =='X' && boxes[m-1][n-3].textContent =='X' ||

            boxes[m-m][n-2].textContent =='X' && boxes[m-3][n-2].textContent =='X' && boxes[m-2][n-2].textContent =='X' ||
            boxes[m-3][n-2].textContent =='X' && boxes[m-2][n-2].textContent =='X' && boxes[m-1][n-2].textContent =='X' ||

            boxes[m-m][n-1].textContent =='X' && boxes[m-3][n-1].textContent =='X' && boxes[m-2][n-1].textContent =='X' ||
            boxes[m-3][n-1].textContent =='X' && boxes[m-2][n-1].textContent =='X' && boxes[m-1][n-1].textContent =='X' ||

            boxes[m-m][n-n].textContent =='X' && boxes[m-m][n-3].textContent =='X' && boxes[m-m][n-2].textContent =='X' ||
            boxes[m-m][n-3].textContent =='X' && boxes[m-m][n-2].textContent =='X' && boxes[m-m][n-1].textContent =='X' ||

            boxes[m-3][n-n].textContent =='X' && boxes[m-3][n-3].textContent =='X' && boxes[m-3][n-2].textContent =='X' ||
            boxes[m-3][n-3].textContent =='X' && boxes[m-3][n-2].textContent =='X' && boxes[m-3][n-1].textContent =='X' ||

            boxes[m-2][n-n].textContent =='X' && boxes[m-2][n-3].textContent =='X' && boxes[m-2][n-2].textContent =='X' ||
            boxes[m-2][n-3].textContent =='X' && boxes[m-2][n-2].textContent =='X' && boxes[m-2][n-1].textContent =='X' ||

            boxes[m-1][n-n].textContent =='X' && boxes[m-1][n-3].textContent =='X' && boxes[m-1][n-2].textContent =='X' ||
            boxes[m-1][n-3].textContent =='X' && boxes[m-1][n-2].textContent =='X' && boxes[m-1][n-1].textContent =='X' ||

            boxes[m-m][n-n].textContent =='X' && boxes[m-3][n-3].textContent =='X' && boxes[m-2][n-2].textContent =='X' ||
            boxes[m-3][n-3].textContent =='X' && boxes[m-2][n-2].textContent =='X' && boxes[m-1][n-1].textContent =='X' ||
            boxes[m-3][n-n].textContent =='X' && boxes[m-2][n-3].textContent =='X' && boxes[m-1][n-2].textContent =='X' ||
            boxes[m-m][n-3].textContent =='X' && boxes[m-3][n-2].textContent =='X' && boxes[m-2][n-1].textContent =='X' ||

            boxes[m-1][n-n].textContent =='X' && boxes[m-2][n-3].textContent =='X' && boxes[m-3][n-2].textContent =='X' ||
            boxes[m-2][n-3].textContent =='X' && boxes[m-3][n-2].textContent =='X' && boxes[m-m][n-1].textContent =='X' ||
            boxes[m-m][n-2].textContent =='X' && boxes[m-3][n-3].textContent =='X' && boxes[m-2][n-n].textContent =='X' ||
            boxes[m-1][n-3].textContent =='X' && boxes[m-2][n-2].textContent =='X' && boxes[m-3][n-1].textContent =='X' )    

            {
            winContent.innerHTML = `<p> победили Крестики </p>`  
            popUpWindow.classList.add('display')
            counter = 0
        }
        else 
        if (counter<16 &&
            boxes[m-m][n-n].textContent =='O' && boxes[m-3][n-n].textContent =='O' && boxes[m-2][n-n].textContent =='O' ||
            boxes[m-3][n-n].textContent =='O' && boxes[m-2][n-n].textContent =='O' && boxes[m-1][n-n].textContent =='O' ||
            
            boxes[m-m][n-3].textContent =='O' && boxes[m-3][n-3].textContent =='O' && boxes[m-2][n-3].textContent =='O' ||
            boxes[m-3][n-3].textContent =='O' && boxes[m-2][n-3].textContent =='O' && boxes[m-1][n-3].textContent =='O' ||
            
            boxes[m-m][n-2].textContent =='O' && boxes[m-3][n-2].textContent =='O' && boxes[m-2][n-2].textContent =='O' ||
            boxes[m-3][n-2].textContent =='O' && boxes[m-2][n-2].textContent =='O' && boxes[m-1][n-2].textContent =='O' ||
            
            boxes[m-m][n-1].textContent =='O' && boxes[m-3][n-1].textContent =='O' && boxes[m-2][n-1].textContent =='O' ||
            boxes[m-3][n-1].textContent =='O' && boxes[m-2][n-1].textContent =='O' && boxes[m-1][n-1].textContent =='O' ||
            
            boxes[m-m][n-n].textContent =='O' && boxes[m-m][n-3].textContent =='O' && boxes[m-m][n-2].textContent =='O' ||
            boxes[m-m][n-3].textContent =='O' && boxes[m-m][n-2].textContent =='O' && boxes[m-m][n-1].textContent =='O' ||
            
            boxes[m-3][n-n].textContent =='O' && boxes[m-3][n-3].textContent =='O' && boxes[m-3][n-2].textContent =='O' ||
            boxes[m-3][n-3].textContent =='O' && boxes[m-3][n-2].textContent =='O' && boxes[m-3][n-1].textContent =='O' ||
            
            boxes[m-2][n-n].textContent =='O' && boxes[m-2][n-3].textContent =='O' && boxes[m-2][n-2].textContent =='O' ||
            boxes[m-2][n-3].textContent =='O' && boxes[m-2][n-2].textContent =='O' && boxes[m-2][n-1].textContent =='O' ||
            
            boxes[m-1][n-n].textContent =='O' && boxes[m-1][n-3].textContent =='O' && boxes[m-1][n-2].textContent =='O' ||
            boxes[m-1][n-3].textContent =='O' && boxes[m-1][n-2].textContent =='O' && boxes[m-1][n-1].textContent =='O' ||

            boxes[m-m][n-n].textContent =='O' && boxes[m-3][n-3].textContent =='O' && boxes[m-2][n-2].textContent =='O' ||
            boxes[m-3][n-3].textContent =='O' && boxes[m-2][n-2].textContent =='O' && boxes[m-1][n-1].textContent =='O' ||
            boxes[m-3][n-n].textContent =='O' && boxes[m-2][n-3].textContent =='O' && boxes[m-1][n-2].textContent =='O' ||
            boxes[m-m][n-3].textContent =='O' && boxes[m-3][n-2].textContent =='O' && boxes[m-2][n-1].textContent =='O' ||

            boxes[m-1][n-n].textContent =='O' && boxes[m-2][n-3].textContent =='O' && boxes[m-3][n-2].textContent =='O' ||
            boxes[m-2][n-3].textContent =='O' && boxes[m-3][n-2].textContent =='O' && boxes[m-m][n-1].textContent =='O' ||
            boxes[m-m][n-2].textContent =='O' && boxes[m-3][n-3].textContent =='O' && boxes[m-2][n-n].textContent =='O' ||
            boxes[m-1][n-3].textContent =='O' && boxes[m-2][n-2].textContent =='O' && boxes[m-3][n-1].textContent =='O' )    {
                
                winContent.innerHTML = `<p> победили Hолики </p>`
               popUpWindow.classList.add('display')
               counter = 0

        }
        else if (m=4, n=4, counter==16) {
            winContent.innerHTML =`<p> Ничья </p>`
            popUpWindow.classList.add('display')
            counter = 0

        }
    }
}


let stepValue = !'X';
document.addEventListener('click', (event)=> {
if (event.target.innerHTML !=='') {
    return } 
    stepValue = (stepValue=='X') ? 'O' : 'X';
event.target.innerHTML = (stepValue);

}
)

document.addEventListener('click', win)

close.addEventListener('click', ()=> {
        popUpContainer.classList.add('pop-up')
    })

