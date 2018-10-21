"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Funcionario_1 = require("./Funcionario");
var Terceirizado = /** @class */ (function (_super) {
    __extends(Terceirizado, _super);
    function Terceirizado(nome, horas, insalubre) {
        var _this = _super.call(this, nome, 0) || this;
        _this.horas_trab = horas;
        _this.insalubre = insalubre;
        return _this;
    }
    Terceirizado.prototype.calcSalario = function () {
        if (this.insalubre) {
            return (4 * this.horas_trab) + 500;
        }
        return (4 * this.horas_trab);
    };
    Terceirizado.prototype.show = function () {
        if (this.insalubre) {
            console.log("Ter " + this.nome + this.horas_trab + "h insalubre" + "\n" + "salario " + this.calcSalario());
        }
        else {
            console.log("Ter " + this.nome + " " + this.horas_trab + "h" + "\n" + "salario " + this.calcSalario());
        }
    };
    return Terceirizado;
}(Funcionario_1.Funcionario));
exports.Terceirizado = Terceirizado;
