const fatorial = (n) => {
    var res = 1

    for(let i = n; i > 0; i--) {
        res *= i
    }
    console.log(`${n}! é: ${res}`)
}

fatorial(28)