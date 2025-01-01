const alfabetoNumero = (num) => {
    var stringAlf = ""
    let alfabeto = "0abcdefghijklmnopqrstuvwxyz"

    for(let i = 1; i <= num; i++) {
        stringAlf += alfabeto.charAt(i)
    }
    console.log(stringAlf)
}

alfabetoNumero(9)