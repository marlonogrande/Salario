"use strict";
exports.__esModule = true;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, diaria) {
        this.nome = nome;
        this.diaria = diaria;
        this.bonus = 0;
    }
    Funcionario.prototype.setBonus = function (bonus) {
        this.bonus = bonus;
    };
    Funcionario.prototype.addDiaria = function () {
        this.diaria++;
    };
    Funcionario.prototype.getNome = function () {
        return this.nome;
    };
    Funcionario.prototype.show = function () {
        return;
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
