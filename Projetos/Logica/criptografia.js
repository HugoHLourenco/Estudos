const criptogradiaAlfabeto = (string) => {
    
    let caracter = string.toLowerCase().split('')

    var stringCripto = []

    for(let i = 0; i <= caracter.length; i++) {
        switch(caracter[i]){
            case "a":
                stringCripto.push(1)
                break
            case "b":
                stringCripto.push(2)
                break
            case "c":
                stringCripto.push(3)
                break
            case "d":
                stringCripto.push(4)
                break
            case "e":
                stringCripto.push(5)
                break
            case "f":
                stringCripto.push(6)
                break
            case "g":
                stringCripto.push(7)
                break
            case "h":
                stringCripto.push(8)
                break
            case "i":
                stringCripto.push(9)
                break
            case "j":
                stringCripto.push(10)
                break
            case "k":
                stringCripto.push(11)
                break
            case "l":
                stringCripto.push(12)
                break
            case "m":
                stringCripto.push(13)
                break
            case "n":
                stringCripto.push(14)
                break
            case "o":
                stringCripto.push(15)
                break
            case "p":
                stringCripto.push(16)
                break
            case "q":
                stringCripto.push(17)
                break
            case "r":
                stringCripto.push(18)
                break
            case "s":
                stringCripto.push(19)
                break
            case "t":
                stringCripto.push(20)
                break
            case "u":
                stringCripto.push(21)
                break
            case "v":
                stringCripto.push(22)
                break
            case "w":
                stringCripto.push(23)
                break
            case "x":
                stringCripto.push(24)
                break
            case "y":
                stringCripto.push(25)
                break
            case "z":
                stringCripto.push(26)
                break
            default:
                stringCripto.push(caracter[i])
                break
            }
        }
        
        
    console.log(`'${string}' criptografado é: ${stringCripto}`)

}
criptogradiaAlfabeto("panqAAAAueca")
