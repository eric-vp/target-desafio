// 1)
console.log(`Exercicio 1`);

function calcularFibonacci(n) {
    if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
        console.log(`O valor inserido não é válido, pois precisa ser um número inteiro!`);
        return;        
    }

    let primeiroNumero = 0;
    let segundoNumero = 1;
    let resultado = 0;
    let sequencia = [primeiroNumero, segundoNumero];

    while (resultado < n) {
        resultado = primeiroNumero + segundoNumero;
        sequencia.push(resultado);
        primeiroNumero = segundoNumero;
        segundoNumero = resultado;
    }

    console.log(sequencia);

    sequencia.find(e => e == n) ?
        console.log(`Sim, o número ${n} pertence à sequencia de Fibonacci.`) :
        console.log(`Não, o número ${n} não pertence à sequencia de Fibonacci.`);
}

calcularFibonacci(8);
calcularFibonacci(10);

// 2)
console.log(`\nExercicio 2`);

function verificarString(s) {
    if(typeof s !== "string") {
        console.log(`O valor inserido não é válido, pois precisa ser do tipo "string"!`);
        return;
    }

    const letraA = s.toLowerCase().split('a').length - 1;
    
    letraA > 0 ? 
    console.log(`A letra "a" aparece ${letraA} vez(es) na string ${s}.`) :
    console.log(`A letra "a" não aparece na string ${s}.`);    
}

verificarString("abacaxi");
verificarString("morango");
verificarString("figo");

// 3)
console.log(`\nExercicio 3`);

function exercicio3() {
    let indice = 12;
    let soma = 0;
    let k = 1;

    do {
        k = k + 1;
        soma = soma + k;
    } while (k < indice);

    console.log(`Ao final do processamento o valor da variável SOMA será: ${soma}`);
}

exercicio3();

// 4)
console.log(`\nExercicio 4`);

console.log(`\na) 1, 3, 5, 7, 9`);
console.log(`b) 2, 4, 8, 16, 32, 64, 128`);
console.log(`c) 0, 1, 4, 9, 16, 25, 36, 49`);
console.log(`d) 4, 16, 36, 64, 100`);
console.log(`e) 1, 1, 2, 3, 5, 8, 13`);
console.log(`f) 2, 10, 12, 16, 17, 18, 19, 20`);

// 5)
console.log(`\nExercicio 5`);

console.log(`\nResposta:`);
console.log(`Precisamos apenas ligar 2 interruptores`);
console.log(`1 caso - Ir até a primeira sala e a lâmpada estiver apagada:`);
console.log(`É possível voltar até os interruptores, desligar 1 e ir para a segunda sala, se a segunda sala estiver com a lâmpada acesa, descobrimos qual é o interruptor das 3, pois o que controla a primeira sala é o que não ligamos primeiro, o que controla a segunda é o último que ficou ligado, e o que desligamos será o que controla a 3 sala.`);
console.log(`2 caso: Ir até a primeira sala e a lâmpada estiver acesa:`);
console.log(`É possível voltar até os interruptores, desligar 1 e ir para a segunda sala, se estiver com a lâmpada acesa, o interruptor que deixamos ligado é o que controla ela, o que desligamos é o que estava controlando a primeira sala, e o que sobrou controla a 3 sala.`);
