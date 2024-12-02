import { Repository } from 'typeorm';
import { Registro } from './entities/registro.entity';
export declare class RegistroService {
    private readonly registroRepository;
    constructor(registroRepository: Repository<Registro>);
    create(data: {
        juegos: number[];
        total: number;
    }): Promise<Registro>;
    findAll(): Promise<Registro[]>;
}
