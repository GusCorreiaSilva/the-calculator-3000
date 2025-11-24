//valores da operação
let a = null;
let b = null;

//Teclas numericas
const numeros = document.querySelectorAll(".tecla.numero");

//seleção do campo onde os valores vão ser mostrado 
const valor = document.querySelector(".valor");
valor.dataset.valor = 0;

//add evento de click em cada tecla 
[...numeros].forEach((n) => {
  n.addEventListener("click", () => {
    //add valores a variaveis A e B
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
