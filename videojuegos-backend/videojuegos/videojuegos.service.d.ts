import { Repository } from 'typeorm';
import { Videojuego } from './entities/videojuego.entity';
export declare class VideojuegosService {
    private readonly videojuegosRepository;
    constructor(videojuegosRepository: Repository<Videojuego>);
    findAll(): Promise<Videojuego[]>;
    findOne(id: number): Promise<Videojuego>;
    create(videojuego: Videojuego): Promise<Videojuego>;
    update(id: number, videojuego: Videojuego): Promise<Videojuego>;
    delete(id: number): Promise<void>;
}
