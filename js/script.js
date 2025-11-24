//valores da operação
let a = null;
let b = null;

const resultado = document.querySelector(".tecla.igual")
const menos = document.querySelector(".tecla.subtracao")
const mais = document.querySelector(".tecla.soma")

//Teclas numericas
const numeros = document.querySelectorAll(".tecla.numero");

//seleção do campo onde os valores vão ser mostrado 
const valor = document.querySelector(".valor");
valor.dataset.valor = 0;


//add evento de click em cada tecla 
[...numeros].forEach((n) => {
  n.addEventListener("click", () => {
    //add valores numericos a variaveis A e B
    (a === null) ? a = Number(n.dataset.valor) : b = Number(n.dataset.valor);
    valor.innerHTML += n.dataset.valor

    console.log("A:", a);
    console.log("B:", b);
  });
});
mais.addEventListener('click', () => {
  if (!valor.innerHTML.includes(mais.dataset.valor))
    {
      valor.innerHTML += mais.dataset.valor
    }
})
menos.addEventListener('click', () => {
   if (!valor.innerHTML.includes(menos.dataset.valor))
    {
      valor.innerHTML += menos.dataset.valor
    }
})
resultado.addEventListener('click', () => {
  if (valor.innerHTML.includes(mais.dataset.valor)) {
    a + b
    valor.innerHTML = a + b    
  } else if(valor.innerHTML.includes(menos.dataset.valor)) {
    a - b
  }
})

console.log([...numeros]);
console.log(mais.dataset.valor);
