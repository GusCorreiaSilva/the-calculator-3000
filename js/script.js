//valores da operação
let a = null;
let b = null;
let resultado = null;

const igual = document.querySelector(".tecla.igual");
const menos = document.querySelector(".tecla.subtracao");
const mais = document.querySelector(".tecla.soma");

//Teclas numericas
const numeros = document.querySelectorAll(".tecla.numero");

//seleção do campo onde os valores vão ser mostrado
const valor = document.querySelector(".valor");
valor.dataset.valor = 0;

//add evento de click em cada tecla
[...numeros].forEach((n) => {
  n.addEventListener("click", () => {
    
    //add valores numericos a variaveis A e B
    //valor.innerHTML= null serve para apagar valor do calculo anterior
    a === null ? (valor.innerHTML = null, a = Number(n.dataset.valor)) : (b = Number(n.dataset.valor));
    valor.innerHTML += n.dataset.valor;

    console.log("A:", a);
    console.log("B:", b);
  });
});
//vai adicionar o valor de adição
mais.addEventListener("click", () => {
  if (!valor.innerHTML.includes(mais.dataset.valor)) {
    valor.innerHTML += mais.dataset.valor;
  }
});
//vai adicionar o valor de subtração
menos.addEventListener("click", () => {
  if (!valor.innerHTML.includes(menos.dataset.valor)) {
    valor.innerHTML += menos.dataset.valor;
  }
});
//faz o calculo
igual.addEventListener("click", () => {
  if (valor.innerHTML.includes(mais.dataset.valor)) {
    resultado = a + b;
    valor.innerHTML = resultado;
  } else if (valor.innerHTML.includes(menos.dataset.valor)) {
    resultado = a - b;
    valor.innerHTML = resultado;
  }
  //reseta os valores de A e B
  a = null
  b = null
});

console.log([...numeros]);
console.log(mais.dataset.valor);
