"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PerfilComponent = void 0;
var core_1 = require("@angular/core");
var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(_clienteService) {
        var _this = this;
        this._clienteService = _clienteService;
        this.cliente = {};
        this.id = localStorage.getItem('_id');
        this.token = localStorage.getItem('token');
        if (this.id) {
            this._clienteService.obtener_cliente_guest(this.id, this.token).subscribe(function (response) {
                console.log();
                _this.cliente = response.data;
            });
        }
    }
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent.prototype.actualizar = function (actualizarForm) {
        if (actualizarForm.valid) {
            this.cliente.pais = 'España';
            this.cliente.password = $('#input_password').val();
            this._clienteService.actualizar_perfil_cliente_guest(this.id, this.cliente, this.token).subscribe(function (response) {
                iziToast.show({
                    title: 'SUCCESS',
                    titleColor: '#1DC74C',
                    "class": 'text-success',
                    position: 'topCenter',
                    message: 'Perfil del cliente actualizado correctamente'
                });
            });
        }
        else {
            iziToast.show({
                title: 'ERROR',
                titleColor: '#FF0000',
                position: 'topCenter',
                message: 'Datos incorrectos'
            });
        }
    };
    PerfilComponent = __decorate([
        core_1.Component({
            selector: 'app-perfil',
            templateUrl: './perfil.component.html',
            styleUrls: ['./perfil.component.css']
        })
    ], PerfilComponent);
    return PerfilComponent;
}());
exports.PerfilComponent = PerfilComponent;
