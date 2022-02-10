class Hangman{
    constructor(word,remmingGuess){
        const leters=word.toLowerCase().split('')
        this.word=leters
        this.remmingGuess=remmingGuess
        this.guessedLetters=[]
        this.status='playing'
    

    }
    get puzzle(){
        let puzzle=''
        this.word.forEach((letter)=>{
            if(this.guessedLetters.includes(letter)||letter===' '){
                puzzle+=letter
            }else{
                puzzle+='*'
            }
        })
        return puzzle
    }
    makeGuess(guess){
        guess=guess.toLowerCase()
        const isUniq=!this.guessedLetters.includes(guess)
        const isBadGuess=!this.word.includes(guess)
        if(this.status!=='playing'){
            return
        }
        if(isUniq){
            this.guessedLetters.push(guess)
        }
        if(isBadGuess&&isUniq&&this.remmingGuess>0){
            this.remmingGuess-=1
    
        }

    }
    calculateStatus(){
        
    
        const finished=this.word.every((letter)=>this.guessedLetters.includes(letter)||letter===' ')
        if(this.remmingGuess===0){
            this.status='faild'
    
        }else if(finished){
            this.status='finished'
        }else{
            this.status='playing'
        }
    }
    get statusMassage(){
        if(this.status==='playing'){
            return `Guess left: ${this.remmingGuess}`
    
        }else if(this.status==='faild'){
            return `Nice try!The word was "${this.word.join('')}"`
    
    
        }else{
            return `Great work!`
    
        }
    }
}







