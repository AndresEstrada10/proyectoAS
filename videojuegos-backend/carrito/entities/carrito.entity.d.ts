import { Videojuego } from '../../videojuegos/entities/videojuego.entity';
export declare class Carrito {
    id: number;
    nombre: string;
    precio: number;
    plataforma: string;
    genero: string;
    videojuego: Videojuego;
    videojuegoId: number;
}
