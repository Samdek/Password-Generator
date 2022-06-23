const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-",
                    "+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]
const firstGenerate = document.getElementById('generate-one')
const secondGenerate = document.getElementById('generate-two')
const generateBtn = document.getElementById('generate-btn')


function generateRandom() {
    let text =''
    password = ''
    const length = 15
    for(let i = 0; i < characters.length; ++i){
        text += characters[i] 
    }

    for(let i = 0, n = text.length; i < length; ++i) {
        password += text.charAt(Math.floor(Math.random() * n))
    }
    return password
}


generateBtn.addEventListener('click', function(){
        firstGenerate.innerHTML = generateRandom()
        secondGenerate.innerHTML = generateRandom()
})

