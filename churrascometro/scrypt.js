//Carne - 450g por pessoa - 6g- 650g
// Cerveja- 1200ml p/pessoas - 6h- 2000
//refrigerante + agua- 1000 p/pessoa - 6h 1500ml
// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

  
  
let resultado = document.getElementById("resultado");

function calcular(){
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value 
  let duracao = inputDuracao.value

  let qtdTotalCarne = () => (carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas))
  let qtdTotalCerveja = () => (cervejaPP(duracao) * adultos)
  let qtdTotalBebida= () => (bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas))
  let resultadoCarne = () => resultado.innerHTML = `<p>${qtdTotalCarne() / 1000}Kg de carne...</p>` // object literals
  let resultadoCerveja = () => resultado.innerHTML += `<p>${Math.ceil((qtdTotalCerveja()/360)/12)} engrado(s) de cerveja...</p>` 
  let resultadoBebida = () => resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida()/ 2000)} garrafa(s) de 2L de refrigerante</p>` 


resultado.innerHTML = `<p>Calculando...</p>`
  setTimeout(resultadoCarne, 1000)
  setTimeout(resultadoCerveja, 1200)
  setTimeout(resultadoBebida, 1500)
}
     
function carnePP(duracao){

    if(duracao >= 6){
        return 650
    }else{
        return 400
    }
}

function cervejaPP(duracao){


    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}

function bebidasPP(duracao){

    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}

