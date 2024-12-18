function teoremaPitagoras(a, b) {
    let c = a*a + b*b
    let hipotenusa = Math.sqrt(c).toFixed(1)

    console.log(`A hipotenusa de um triângulo com lado A(${a}), e lado B(${b}) é = ${hipotenusa}`)
}

teoremaPitagoras(40 , 30)