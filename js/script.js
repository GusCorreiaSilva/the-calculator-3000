const numeros = document.querySelectorAll(".tecla.numero");
const valor = document.querySelector(".valor")

numeros.forEach((n) => {
  n.addEventListener("click", () => {
    valor.innerHTML += Number(n.dataset.valor)
    console.log(n.dataset.valor);
  });
});

console.log([...numeros]);