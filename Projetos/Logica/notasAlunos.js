const mediaNota = (nome, n1, n2, n3) => {
    aluno = {nome:nome , 
            nota1: n1,
            nota2: n2,
            nota3: n3}

    let media = Number((n1 + n2 + n3) / 3)
    let status = ""

    if(media >= 7) {
        status = "APROVADO(A)"
    } else {
         status = "REPROVADO(A)"
    }

    console.log(`O aluno(a) ${nome} tirou nota total ${media}, ele(a) está ${status}`)
}











mediaNota("gabriel", 7, 8, 9)