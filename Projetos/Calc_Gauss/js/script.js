var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var bt = document.getElementById("bt")
var btLimpar = document.getElementById("btLimpar")

// Função de calcular
function gauss() {
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)

    var vetor = [num1]
    var numVet = 0
    var meio
    var res

    // Construtor do vetor
    for (let i = 1; numVet < num2; i++) {
        numVet = num1 + i
        vetor.push(numVet)
    }

    // Verificador par/impar
    if (num1 === num2) {
        document.getElementById("res").innerText = "Digite valores que sejam diferentes ._."
        return
    } else if (num1 > num2) {
        document.getElementById("res").innerText = "O 1º número é maior que o 2º, pateta."
        return
    } else if (vetor.length % 2 == 0) {
        meio = vetor.length / 2
        res = (num1 + num2) * meio
        console.log(res)
        document.getElementById("res").innerText = "A soma dos números de " + num1.toLocaleString("pt-BR") + " à " + num2.toLocaleString("pt-BR") + " é: " + res.toLocaleString("pt-BR")
    } else if (vetor.length % 2 == 1) {
        meio = vetor.length / 2
        res = ((num1 + num2) * meio)
        console.log(res)
        document.getElementById("res").innerText = "A soma dos números de " + num1.toLocaleString("pt-BR") + " à " + num2.toLocaleString("pt-BR") + " é: " + res.toLocaleString("pt-BR")
    } else if (num1 === num2 * -1){
        res = 0
        console.log(res)
        document.getElementById("res").innerText = "A soma dos números de " + num1.toLocaleString("pt-BR") + " à " + num2.toLocaleString("pt-BR") + " é: " + 0
        return
    }
}

    // Limpar campo
    function limpar() {
        document.getElementById("res").innerText = ""
        document.getElementById("n1").value = ""
        document.getElementById("n2").value = ""
    }

    bt.addEventListener("click", gauss)
    btLimpar.addEventListener("click", limpar)

