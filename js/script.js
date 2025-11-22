//valores da operação
let a = null;
let b = null;

const numeros = document.querySelectorAll(".tecla.numero");
const valor = document.querySelector(".valor");
valor.dataset.valor = 0;

[...numeros].forEach((n) => {
  n.addEventListener("click", () => {
    if (a === null) {
      a = n.dataset.valor;
    } else {
      b = n.dataset.valor;
    }
    console.log("A:", a);
    console.log("B:", b);
  });
});

console.log([...numeros]);
