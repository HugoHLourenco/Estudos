const calculoQuadratico = (a, b, c) => {
    var res = b * b
    res -= (4 * a * c)

    if (res >= 0) {
        let x1 = ((b * -1) + Math.sqrt(res)) / (2 * a)
        let x2 = ((b * -1) - Math.sqrt(res)) / (2 * a)

        console.log(`As raizes de ${a}X² ${b}X ${c} são: 
            x1 = ${Math.round(x1 * 100) / 100} e x2 = ${Math.round(x2 * 100) / 100}`)
    } else {
        console.log("Não há raizes para esta expressão")
    }
}
calculoQuadratico(10, 0, 10)