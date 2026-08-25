var lado1 = document.getElementById("lado1")
var lado2 = document.getElementById("lado2")
var lado3 = document.getElementById("lado3")

function IdentificarTriangulo() {
    let res = ""

    if(lado1 == lado2 && lado2 == lado3 ) { // Se todos os lados são iguais, ele é equilátero.
        res = "O Triângulo é EQULÁTERO."
    } else if(lado1 == lado2 && lado1 && lado2 != lado3 || lado1 == lado3 && lado1 && lado3 != lado2 || lado2 == lado3 && lado2 && lado3 != lado1) { // Se pelo menos 2 lados são iguais, ele é ESCALENO.
        res = "O Triângulo é ESCALENO."
    } else { //Se não, é ISÓCELES.
        res = "O Triângulo é ISÓCELES."
    }
}

document.getElementById("button").addEventListener("click", IdentificarTriangulo())