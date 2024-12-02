import { RegistroService } from './registro.service';
export declare class RegistroController {
    private readonly registroService;
    constructor(registroService: RegistroService);
    create(data: {
        juegos: number[];
        total: number;
    }): Promise<import("./entities/registro.entity").Registro>;
    findAll(): Promise<import("./entities/registro.entity").Registro[]>;
}
