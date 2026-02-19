//valores da operação
let a = "";
let b = "";
let operador = null;
//tclas operadores
const igual = document.querySelector(".tecla.igual");
const menos = document.querySelector(".tecla.subtracao");
const mais = document.querySelector(".tecla.soma");
const vezes = document.querySelector(".tecla.multiplicacao");
const div = document.querySelector(".tecla.divisao");
const del = document.querySelector(".tecla.del");
//Teclas numericas
const numeros = document.querySelectorAll(".tecla.numero");
const ponto = document.querySelector(".tecla.ponto")

//seleção do campo onde os valores vão ser mostrado
const valor = document.querySelector(".valor");
valor.dataset.valor = 0;

//eventListenner no ponto
ponto.addEventListener("click", () => {
  if (operador === null) {
    if (!a.includes(".")){
      a += ponto.dataset.valor
      valor.innerHTML = a
    }
  } else {
    if (!b.includes('.')) {
      b += ponto.dataset.valor
      valor.innerHTML = a + operador + b
    }
  } 
})
//eventListenner no delete
del.addEventListener("click", () => {
  if (operador === null) {
    //apaga A
    a = a.slice(0, -1);
    valor.innerHTML = a || "0";
  }
  else if (operador !== null && b === "") {
    //apaga o operador
    operador = null;
    valor.innerHTML = a;
  } else {
    b = b.slice(0,-1);
    valor.innerHTML = a + operador + b;
  }
});

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
[mais, menos, vezes].forEach((op) => {
  op.addEventListener("click", () => {
    if (operador === null && a !== "") {
      operador = op.dataset.valor === "x" ? "x" : op.dataset.valor;
      valor.innerHTML = a + operador;
    }
  });
});

//faz o calculo
igual.addEventListener("click", () => {
  let resultado = "";

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
