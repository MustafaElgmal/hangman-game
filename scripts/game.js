const puzzleEl=document.querySelector('#puzzle')
const gussesEl=document.querySelector('#gusses')
let game1

window.addEventListener('keypress',(e)=>{
    const guess=String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.calculateStatus()
    render()
   
   

}) 

const render=()=>{
    puzzleEl.innerHTML=''

    game1.puzzle.split('').forEach((letter)=>{
        const letterEl=document.createElement('span')
        letterEl.textContent=letter
        document.querySelector('#puzzle').appendChild(letterEl)

    })
    gussesEl.textContent=game1.statusMassage

}


const startGame= async()=>{
    const puzzle=await getPuzzle('2')
    game1=new Hangman(puzzle,5)
    render()
    
    

}
startGame()

document.querySelector('#reset').addEventListener('click',startGame)






// getPuzzle('2').then((puzzle)=>{
//     console.log(puzzle)

// }).catch((e)=>{
//     console.log(e)

// })



