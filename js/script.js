const numeros = document.querySelectorAll(".tecla.numero");

numeros.forEach((n) => {
  n.addEventListener("click", () => {
    console.log(n.dataset.valor);
  });
});

console.log([...numeros]);
