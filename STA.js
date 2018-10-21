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
var STA = /** @class */ (function (_super) {
    __extends(STA, _super);
    function STA(nome, nivel) {
        var _this = _super.call(this, nome, 0) || this;
        _this.nivel = nivel;
        return _this;
    }
    STA.prototype.calcSalario = function () {
        return 3000 + (300 * this.nivel);
    };
    STA.prototype.show = function () {
        console.log("STA " + this.nome + "nivel " + this.nivel + "\n" + "salario " + this.calcSalario());
    };
    return STA;
}(Funcionario_1.Funcionario));
exports.STA = STA;
