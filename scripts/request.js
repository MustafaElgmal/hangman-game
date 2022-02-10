
const getPuzzle=async (wordCount)=>{
    try{
        const respose=await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        if(respose.status===200){
            const data=await respose.json()
            return data.puzzle

        }else{
            throw new Error('Unable to fetch this puzzle')
            
        }
 
    }catch(e){
        console.log(e.message)
 
    }
 }