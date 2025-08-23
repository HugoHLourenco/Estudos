const calcPorcent = (a, b) => {
    let valorDividido = b/100
    let res = a * valorDividido

    console.log(`${a} é ${res}% de ${b}`)
}

// a é primeiro número e b é o valor total
calcPorcent(10, 100)