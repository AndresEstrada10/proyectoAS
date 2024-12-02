import { VideojuegosService } from './videojuegos.service';
import { Videojuego } from './entities/videojuego.entity';
export declare class VideojuegosController {
    private readonly videojuegosService;
    constructor(videojuegosService: VideojuegosService);
    findAll(): Promise<Videojuego[]>;
    findOne(id: number): Promise<Videojuego>;
    create(videojuego: Videojuego): Promise<Videojuego>;
    update(id: number, videojuego: Videojuego): Promise<Videojuego>;
    delete(id: number): Promise<void>;
}
