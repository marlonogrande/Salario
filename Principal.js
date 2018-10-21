"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
var Professor_1 = require("./Professor");
var STA_1 = require("./STA");
var Terceirizado_1 = require("./Terceirizado");
var funcionarios = [];
console.log("\n");
console.log("sair - Sai do programa");
console.log("addprof - Adiciona um novo professor");
console.log("addsta - Adiciona um novo técnico administrativo");
console.log("addter - Adiciona um novo terceirizado");
console.log("descadastrar - Remove um funcionário da lista");
console.log("show - Mostra os dados do funcionário");
console.log("\n");
var comando = readline.question("Digite um comando: ");
while (comando != "sair") {
    if (comando == "addprof") {
        cadastrarProf();
    }
    else if (comando == "addsta") {
        cadastrarSta();
    }
    else if (comando == "addTer") {
        cadastrarTer();
    }
    else if (comando == "descadastrar") {
        descadastrar();
    }
    else if (comando == "show") {
        var mostra = readline.question("Digite o nome do funcionario: ");
        var achou = false;
        for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
            var i = funcionarios_1[_i];
            if (i.getNome() == mostra) {
                i.show();
                achou = true;
                break;
            }
        }
        if (!achou) {
            console.log("funcionario " + mostra + " nao existe");
        }
    }
    console.log("\n");
    console.log("sair - Sai do programa");
    console.log("addprof - Adiciona um novo professor");
    console.log("addsta - Adiciona um novo técnico administrativo");
    console.log("addter - Adiciona um novo terceirizado");
    console.log("descadastrar - Remove um funcionário da lista");
    console.log("show - Mostra os dados do funcionário");
    console.log("\n");
    comando = readline.question("Digite um comando: ");
}
function cadastrarProf() {
    var n = readline.question("Digite um nome: ");
    for (var _i = 0, funcionarios_2 = funcionarios; _i < funcionarios_2.length; _i++) {
        var i = funcionarios_2[_i];
        if (i.getNome() == n) {
            console.log("O funcionário já existe");
            return;
        }
    }
    var c = readline.question("Digite a classe: ");
    var prof = new Professor_1.Professor(n, c); // Objeto
    funcionarios.push(prof);
}
function cadastrarSta() {
    var n = readline.question("Digite um nome: ");
    for (var _i = 0, funcionarios_3 = funcionarios; _i < funcionarios_3.length; _i++) {
        var i = funcionarios_3[_i];
        if (i.getNome() == n) {
            console.log("O funcionário já existe");
            return;
        }
    }
    var nv = readline.question("Digite o nivel: ");
    var sta = new STA_1.STA(n, nv); //Objeto
    funcionarios.push(sta);
    0;
}
function cadastrarTer() {
    var n = readline.question("Digite um nome: ");
    for (var _i = 0, funcionarios_4 = funcionarios; _i < funcionarios_4.length; _i++) {
        var i = funcionarios_4[_i];
        if (i.getNome() == n) {
            console.log("O funcionário já existe");
            return;
        }
    }
    var horas = readline.question("Digite as horas: ");
    var insalubre = readline.question("O funcionário é insalubre?: ");
    var ter;
    if (insalubre == "nao") {
        ter = new Terceirizado_1.Terceirizado(n, horas, false);
    }
    else if (insalubre == "sim") {
        ter = new Terceirizado_1.Terceirizado(n, horas, true);
    }
    else {
        console.log("VIADO ESCREVE ESSE CARLAHO DIREITO");
    }
    funcionarios.push(ter);
}
function descadastrar() {
    var n = readline.question("Digite o nome a remover: ");
    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].getNome() == n) {
            funcionarios.splice(i);
            console.log("Funcionário descadastrado");
            return;
        }
    }
    console.log("O funcionário não está cadastrado");
}
