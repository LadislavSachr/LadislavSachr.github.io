import { keyboard } from "./keys.js"
const root = document.querySelector('#keyboard')
const text = document.querySelector('#text') 
const tiles = []
const hello = 'Hello, World!'

// Loop to create keyboard
for(let i = 0; i < keyboard.length; i++){
    // Create row div and give it a class 'row'
    let row = document.createElement('div')
    row.classList.add('row')
    for(let j = 0; j < keyboard[i].length; j++){
        // Create key div and give it a class 'tile' + set it's innerHTML
        let element = document.createElement('div')
        element.classList.add('tile')
        element.style.flex = keyboard[i][j].flex
        element.innerHTML = keyboard[i][j].value
        if(['W', 'A', 'S', 'D'].includes(keyboard[i][j].value)){
            element.classList.add('wasd')
        }
        // If the key is part of our text we push it inside tiles array to use later
        if(hello.toUpperCase().includes(keyboard[i][j].value)){
            tiles.push(element)
        }
        row.appendChild(element)
    }
    root.appendChild(row)
}

// Index variable
let i = 0;
const interval = setInterval(()=>{
    // Clear interval after we are through our text
    if(i >= hello.length){
        clearInterval(interval);
        return
    }
    // Loop through saved tiles and attach a class 'hello' that lights up the key
    for(let j = 0; j < tiles.length; j++){
        if(hello[i].toUpperCase() === tiles[j].innerHTML){
            tiles[j].classList.add('hello')
            text.innerHTML = text.innerHTML + hello[i]
            // After 100ms we remove the class 'hello'
            setTimeout(()=>{
                tiles[j].classList.remove('hello')
            }, 100)
        }
    }
    i++
}, 300)