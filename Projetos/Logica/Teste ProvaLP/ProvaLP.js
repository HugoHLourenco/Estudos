function IdentificarTriangulo() {
    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);
    
    let TipoDoTriangulo = "";

    if (lado1 == lado2 && lado2 == lado3) {
        TipoDoTriangulo = "O Triângulo é EQULÁTERO.";

    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        TipoDoTriangulo = "O Triângulo é ISÓCELES.";

    } else {
        TipoDoTriangulo = "O Triângulo é ESCALENO.";

    }
    return TipoDoTriangulo;
}

const DeclararTriangulo = () => {
    let Triangulo = IdentificarTriangulo();
    document.getElementById("Triangulo").textContent = Triangulo;
    console.log(Triangulo);
};