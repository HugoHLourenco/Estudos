var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var bt = document.getElementById("bt")

function gauss() {
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)

    var vetor = [num1]
    var numVet = 0
    var meio

    // Construtor do vetor
    for (let i = 1; numVet < num2; i++) {
        numVet = num1 + i
        vetor.push(numVet)
    }

    //Verificador
    if (vetor.length % 2 === 0) {      
        meio = vetor.length / 2
        let res = (num1 + num2) * meio
        console.log(res)  
    } else {
        meio = (vetor.length / 2) - 0.5
        let res = ((num1 + num2) * meio) + Math.floor(vetor.length / 2) + 1
        console.log(res)
    }
}

bt.addEventListener("click", gauss)

