"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrito = void 0;
const typeorm_1 = require("typeorm");
const videojuego_entity_1 = require("../../videojuegos/entities/videojuego.entity");
let Carrito = class Carrito {
};
exports.Carrito = Carrito;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Carrito.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrito.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Carrito.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrito.prototype, "plataforma", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Carrito.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => videojuego_entity_1.Videojuego),
    (0, typeorm_1.JoinColumn)({ name: 'videojuegoId' }),
    __metadata("design:type", videojuego_entity_1.Videojuego)
], Carrito.prototype, "videojuego", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Carrito.prototype, "videojuegoId", void 0);
exports.Carrito = Carrito = __decorate([
    (0, typeorm_1.Entity)()
], Carrito);
//# sourceMappingURL=carrito.entity.js.map