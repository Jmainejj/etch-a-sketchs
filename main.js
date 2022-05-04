let mainDiv = document.createElement('div')

mainDiv.className = "main-div"
document.body.append(mainDiv)

let buttonDiv = document.createElement('div')
buttonDiv.className = 'buttonDiv'
let erase = document.createElement('button')
erase.textContent = 'erase'
let black = document.createElement('button')
black.textContent = 'black'
let blue = document.createElement('button')
blue.textContent = 'blue'
let reset = document.createElement('button')
reset.textContent = 'reset'

erase.className = "erase"
black.className = "black-div"
blue.className = "blue-div"
reset.className = "reset-div"

let num = 16

function board(){
    for (let i = 0; i < num**2; i++){
        let block = document.createElement('div')
        block.className = 'block'
        // block.id = i
        mainDiv.append(block)

        block.addEventListener('mouseover', function(){
            block.style.backgroundColor ='blue';
        })
        let box = document.createElement('div')
        // box.className = 'black'
        erase.addEventListener('click', function(){
            block.addEventListener('mouseover', function(){
                block.style.backgroundColor='white'
            })
        })
        black.addEventListener('click', function(){
            block.addEventListener('mouseover', function(){
                block.style.backgroundColor='black'
            })
        })
        blue.addEventListener('click', function(){
            block.addEventListener('mouseover', function(){
                block.style.backgroundColor='blue'
            })
        })

        reset.addEventListener('click', function(){
            document.location.reload()
        })

    }
}
board()

document.body.append(buttonDiv)
buttonDiv.append(erase)
buttonDiv.append(black)
buttonDiv.append(blue)
buttonDiv.append(reset)
