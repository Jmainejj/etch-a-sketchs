let mainDiv = document.createElement('div')

mainDiv.className = "main-div"
document.body.append(mainDiv)

function board(){
    for (let i = 1; i < 17; i++){
        // console.log(i)
        let col = document.createElement('div')
        col.className = 'col'
        col.textContent = i
        mainDiv.append(col)

        for (let j = 1; j < 17; j++){
            console.log(j)
            let row = document.createElement('div')
            row.className = 'row'
            col.append(row)
        }
    }
}
board()