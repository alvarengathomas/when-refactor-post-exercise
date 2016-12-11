import readline from 'readline';

let vt;
let vp;
let troco;
let trocoMsg;
let rest;

let c100;
let c50;
let c20;
let c10;
let c5;
let c2;

let m1;
let m50;
let m25;
let m10;
let m5;
let m01;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual o valor total da compra? ', function (resp1) {
    vt = parseFloat(resp1);

    rl.question('\nQual o valor pago pelo cliente? ', function (resp2) {
        vp = parseFloat(resp2);

        if (vt > vp){
            console.log('\n Falta R$ ' + (vt - vp).toFixed(2) + ' para completar o valor total da compra');
        }

        console.log(calc(vt, vp));
        rl.close();
    });
});

const calc = function(total, pgto) {
    troco = pgto - total;

    trocoMsg = '\n Troco total: R$ ' + troco.toFixed(2) + '\n'; // toFixed(2) serve para formatar o valor com 2 casas decimais

    /* ----- Cálculo da cédula de R$ 100,00 ----- */

    c100 = Math.floor(troco / 100); // Math.floor pega apenas a parte inteira da divisão.

    if (c100 > 0) {
        trocoMsg = trocoMsg + '- ' + c100 + ' nota(s) de R$ 100.00\n'
    }

    rest = troco % 100; // % (simbolo de porcentagem) pega o resto da divisão

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da cédula de R$ 50,00 ----- */

    c50 = Math.floor(rest / 50);

    if (c50 > 0) {
        trocoMsg = trocoMsg + '- ' + c50 + ' nota(s) de R$ 50.00\n'
    }

    rest = rest % 50;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da cédula de R$ 20,00 ----- */

    c20 = Math.floor(rest / 20);

    if (c20 > 0) {
        trocoMsg = trocoMsg + '- ' + c20 + ' nota(s) de R$ 20.00\n'
    }

    rest = rest % 20;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da cédula de R$ 10,00 ----- */

    c10 = Math.floor(rest / 10);

    if (c10 > 0) {
        trocoMsg = trocoMsg + '- ' + c10 + ' nota(s) de R$ 10.00\n'
    }

    rest = rest % 10;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da cédula de R$ 5,00 ----- */

    c5 = Math.floor(rest / 5);

    if (c5 > 0) {
        trocoMsg = trocoMsg + '- ' + c5 + ' nota(s) de R$ 5.00\n'
    }

    rest = rest % 5;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da cédula de R$ 2,00 ----- */

    c2 = Math.floor(rest / 2);

    if (c2 > 0) {
        trocoMsg = trocoMsg + '- ' + c2 + ' nota(s) de R$ 2.00\n'
    }

    rest = rest % 2;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da moeda de R$ 1,00 ----- */

    m1 = Math.floor(rest / 1);

    if (m1 > 0) {
        trocoMsg = trocoMsg + '- ' + m1 + ' moeda(s) de R$ 1.00\n'
    }

    rest = rest % 1;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da moeda de R$ 0,50 ----- */

    m50 = Math.floor(rest / 0.5);

    if (m50 > 0) {
        trocoMsg = trocoMsg + '- ' + m50 + ' moeda(s) de R$ 0.50\n'
    }

    rest = rest % 0.5;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da moeda de R$ 0,25 ----- */

    m25 = Math.floor(rest / 0.25);

    if (m25 > 0) {
        trocoMsg = trocoMsg + '- ' + m25 + ' moeda(s) de R$ 0.25\n'
    }

    rest = rest % 0.25;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da moeda de R$ 0,10 ----- */

    m10 = Math.floor(rest / 0.10);

    if (m10 > 0) {
        trocoMsg = trocoMsg + '- ' + m10 + ' moeda(s) de R$ 0.10\n'
    }

    rest = rest % 0.10;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da moeda de R$ 0,05 ----- */

    m5 = Math.floor(rest / 0.05);

    if (m5 > 0) {
        trocoMsg = trocoMsg + '- ' + m5 + ' moeda(s) de R$ 0.05\n'
    }

    rest = rest % 0.05;

    if (rest === 0) {
        return trocoMsg;
    }

    /* ----- Cálculo da moeda de R$ 0,01 ----- */

    m01 = Math.floor(rest / 0.01);

    if (m01 > 0) {
        trocoMsg = trocoMsg + '- ' + m01 + ' moeda(s) de R$ 0.01\n'
    }

    rest = rest % 0.01;

    if (rest === 0) {
        return trocoMsg;
    }

    return trocoMsg;    
}



