import { Repository } from 'typeorm';
import { Carrito } from './entities/carrito.entity';
import { AgregarCarritoDto } from './dto/agregar-carrito.dto';
export declare class CarritoService {
    private readonly carritoRepository;
    constructor(carritoRepository: Repository<Carrito>);
    obtenerCarrito(): Promise<Carrito[]>;
    agregarAlCarrito(agregarCarritoDto: AgregarCarritoDto): Promise<Carrito>;
    eliminarDelCarrito(id: string): Promise<boolean>;
}
