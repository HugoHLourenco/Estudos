var lado1 = document.getElementById("lado1")
var lado2 = document.getElementById("lado2")
var lado3 = document.getElementById("lado3")

function IdentificarTriangulo() {
    let TipoDoTriangulo = ""

    if (lado1 == lado2 && lado2 == lado3) {
        TipoDoTriangulo = "O Triângulo é EQULÁTERO."

    } else if (lado1 == lado2 && lado1 && lado2 != lado3 || lado1 == lado3 && lado1 && lado3 != lado2 || lado2 == lado3 && lado2 && lado3 != lado1) {
        TipoDoTriangulo = "O Triângulo é ESCALENO."

    } else {
        TipoDoTriangulo = "O Triângulo é ISÓCELES."
    }
}

document.getElementById("button").addEventListener("click", IdentificarTriangulo())