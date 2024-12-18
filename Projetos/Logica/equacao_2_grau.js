const calculoQuadratico = (a, b, c) => {
    var res = b * b
    res -= (4 * a * c)

    if (res >= 0) {
        let x1 = ((b * -1) + Math.sqrt(res)) / (2 * a)
        let x2 = ((b * -1) - Math.sqrt(res)) / (2 * a)

        console.log(``)
    }

    console.log(res)
}

calculoQuadratico(2, -4, -6)