"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var _11_herencia_1 = require("./11_herencia");
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camion.prototype.getCapacidadCarga = function () {
        console.log('Cargas pesadas');
    };
    return Camion;
}(_11_herencia_1.Vehiculo));
exports.Camion = Camion;
var miCamion = new Camion('Bulk', 'Cargamento');
console.log(miCamion.marca);
console.log(miCamion.tipo);
miCamion.moverse();
miCamion.getCapacidadCarga();
