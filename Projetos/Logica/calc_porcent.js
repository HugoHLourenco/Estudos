const calcPorcent = (a, b) => {
    let valorDividido = a / b
    let res = 100 * valorDividido

    console.log(`${a} é ${Math.round(res * 100) / 100}% de ${b}`)
}

// a é primeiro número e b é o valor total
calcPorcent(122, 66)