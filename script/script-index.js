const titulos = ["Site Developer", "Graphic Designer"];
let indiceAtual = 0;

setInterval(() => {
    indiceAtual = (indiceAtual + 1) % titulos.length;
    document.getElementById('titulo').textContent = titulos[indiceAtual];
}, 2000); // troca a cada 2000 milissegundos (2 segundos)