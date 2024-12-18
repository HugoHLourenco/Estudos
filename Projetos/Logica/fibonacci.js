const fibonacci = (n) => {
    let num1 = 0
    let num2 = 1
    let numAtual = 0
    let seq = []

    for(let i = 0; i < n; i++) {
        numAtual = num1 + num2
        num1 = num2
        num2 = numAtual

        seq += `${numAtual}; `
    }
    console.log(`A sequência de Fibonacci até o ${n}º número é: \n
    ${seq}`)
}

fibonacci(50)