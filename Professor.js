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
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor(nome, classe) {
        var _this = _super.call(this, nome, 0) || this;
        _this.classe = classe;
        return _this;
    }
    Professor.prototype.calcSalario = function () {
        switch (this.classe) {
            case "A":
                return 3000 + this.bonus;
                break;
            case "B":
                return 5000 + this.bonus;
                break;
            case "C":
                return 7000 + this.bonus;
                break;
            case "D":
                return 9000 + this.bonus;
                break;
            case "E":
                return 11000 + this.bonus;
                break;
            default:
                break;
        }
    };
    Professor.prototype.show = function () {
        console.log("Prof " + this.nome + " classse " + this.classe + "\n" + "salario " + this.calcSalario());
    };
    return Professor;
}(Funcionario_1.Funcionario));
exports.Professor = Professor;
