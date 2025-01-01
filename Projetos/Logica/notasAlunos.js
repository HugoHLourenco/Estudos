const mediaNota = (nome, n1, n2, n3) => {
    let media = Number((n1 + n2 + n3) / 3).toFixed(2)
    let status = ""

    if (media >= 7) {
        status = "APROVADO(A)"
    } else {
        status = "REPROVADO(A)"
    }

    console.log(`O aluno(a) ${nome} tirou nota total ${media}, ele(a) está ${status}`)
}

const alunos = [
    { nome: "Gabriel", nota1: 5, nota2: 7, nota3: 8 },
    { nome: "Maria", nota1: 9, nota2: 7, nota3: 8 },
    { nome: "Joaquim", nota1: 5, nota2: 4, nota3: 4 },
    { nome: "Cirilo", nota1: 5, nota2: 5, nota3: 9 }
]

function calculaDicio() {
    for (let i = 0; i < alunos.length; i++) {
      let aluno = alunos[i]

      mediaNota(aluno.nome, aluno.nota1, aluno.nota2, aluno.nota3)
    }
}

calculaDicio()