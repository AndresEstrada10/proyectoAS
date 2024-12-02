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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarritoController = void 0;
const common_1 = require("@nestjs/common");
const carrito_service_1 = require("./carrito.service");
const agregar_carrito_dto_1 = require("./dto/agregar-carrito.dto");
let CarritoController = class CarritoController {
    constructor(carritoService) {
        this.carritoService = carritoService;
    }
    async obtenerCarrito() {
        try {
            const carrito = await this.carritoService.obtenerCarrito();
            return { carrito };
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener el carrito', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async agregarAlCarrito(agregarCarritoDto) {
        try {
            if (!agregarCarritoDto.id || !agregarCarritoDto.nombre || !agregarCarritoDto.precio) {
                throw new common_1.HttpException('Faltan datos del videojuego', common_1.HttpStatus.BAD_REQUEST);
            }
            const resultado = await this.carritoService.agregarAlCarrito(agregarCarritoDto);
            return { message: 'Juego agregado al carrito', data: resultado };
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            else {
                throw new common_1.HttpException('Error al agregar al carrito', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }
    async eliminarDelCarrito(id) {
        try {
            const resultado = await this.carritoService.eliminarDelCarrito(id);
            if (resultado) {
                return { message: 'Juego eliminado del carrito' };
            }
            else {
                throw new common_1.HttpException('Juego no encontrado en el carrito', common_1.HttpStatus.NOT_FOUND);
            }
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar del carrito', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.CarritoController = CarritoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "obtenerCarrito", null);
__decorate([
    (0, common_1.Post)('agregar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agregar_carrito_dto_1.AgregarCarritoDto]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "agregarAlCarrito", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarritoController.prototype, "eliminarDelCarrito", null);
exports.CarritoController = CarritoController = __decorate([
    (0, common_1.Controller)('carrito'),
    __metadata("design:paramtypes", [carrito_service_1.CarritoService])
], CarritoController);
//# sourceMappingURL=carrito.controller.js.map