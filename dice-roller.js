function roll(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function rolando() {
  for (let i = 0; i < 1000; i++) {
    let dice1 = roll(1, 6);
    let dice2 = roll(1, 6);
    rollOfDice = dice1 + dice2;

    count[rollOfDice] = count[rollOfDice] + 1;
  }
}
const resultado = document.getElementById("resultado");
const barras = document.getElementById("barras");

function mostrarResultado() {
  for (let i = 0; i < count.length; i++) {
    if (i > 1) {
      const mostrarNumeros = document.createElement("div");
      mostrarNumeros.innerText = i + " : " + count[i];
      resultado.appendChild(mostrarNumeros);
    }
  }
}

function mostrarBarras() {
  for (let i = 0; i < count.length; i++) {
    if (i > 1) {
      const barra = document.createElement("div");
      barra.className = "bar";
      barra.style.width = `${count[i]}px`;

      const texto = document.createTextNode(i);
      barra.appendChild(texto);

      const barras = document.getElementById("barras");
      barras.appendChild(barra);
    }
  }
}

const rolarDados = document.getElementById("rolarDados");
rolarDados.addEventListener("click", rolando);
rolarDados.addEventListener("click", mostrarResultado);
rolarDados.addEventListener("click", mostrarBarras);
