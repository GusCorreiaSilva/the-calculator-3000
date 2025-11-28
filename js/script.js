//valores da operação
let a = "";
let b = "";
let operador = null;

const igual = document.querySelector(".tecla.igual");
const menos = document.querySelector(".tecla.subtracao");
const mais = document.querySelector(".tecla.soma");
const vezes = document.querySelector(".tecla.multiplicacao");
//Teclas numericas
const numeros = document.querySelectorAll(".tecla.numero");
//seleção do campo onde os valores vão ser mostrado
const valor = document.querySelector(".valor");
valor.dataset.valor = 0;

//add evento de click em cada tecla
[...numeros].forEach((n) => {
  n.addEventListener("click", () => {

      if (operador === null) {
     
      a += n.dataset.valor;
      valor.innerHTML = a;
    } else {
  
      b += n.dataset.valor;
      valor.innerHTML = a + operador + b;
    }

    console.log("A:", a);
    console.log("B:", b);
  });
});
[mais, menos, vezes].forEach(op => {
  op.addEventListener('click', () => {
    if (operador === null && a !== "") {
      operador = op.dataset.valor === "x" ? "x" : op.dataset.valor;
      valor.innerHTML = a + operador;
    }
  })
})

//faz o calculo
igual.addEventListener("click", () => {
   let resultado = 0;
// const com A e B em numero
  const numA = Number(a);
  const numB = Number(b);
// fazendo o calculo
  if (operador === "+") resultado = numA + numB;
  if (operador === "-") resultado = numA - numB;
  if (operador === "x") resultado = numA * numB;

  valor.innerHTML = resultado;

  // reseta
  a = resultado.toString();
  b = "";
  operador = null;
});
