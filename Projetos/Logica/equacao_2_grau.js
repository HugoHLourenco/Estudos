const calculoQuadratico = (a, b, c) => {
    var res = b * b
    res -= (4 * a * c)

    if (res >= 0) {
        let x1 = ((b * -1) + Math.sqrt(res)) / (2 * a)
        let x2 = ((b * -1) - Math.sqrt(res)) / (2 * a)

        console.log(`As raizes de ${a}X² ${b}X ${c} são: 
            x1 = ${x1} e x2 = ${x2}`)
    } else {
        console.log("Não há raizes para estas expressão")
    }
}

calculoQuadratico(0, -4, -6)