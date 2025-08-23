const calcPorcent = (a, b) => {
    let valorDividido = a/b
    let res = 100 * valorDividido

    console.log(`${a} é ${res.toFixed(2)}% de ${b}`)
}

// a é primeiro número e b é o valor total
calcPorcent(10, 37)