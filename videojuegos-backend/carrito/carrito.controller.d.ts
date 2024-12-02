import { CarritoService } from './carrito.service';
import { AgregarCarritoDto } from './dto/agregar-carrito.dto';
export declare class CarritoController {
    private readonly carritoService;
    constructor(carritoService: CarritoService);
    obtenerCarrito(): Promise<{
        carrito: import("./entities/carrito.entity").Carrito[];
    }>;
    agregarAlCarrito(agregarCarritoDto: AgregarCarritoDto): Promise<{
        message: string;
        data: import("./entities/carrito.entity").Carrito;
    }>;
    eliminarDelCarrito(id: string): Promise<{
        message: string;
    }>;
}
