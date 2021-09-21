import { Comentario } from "../comentario/comentario";

export class Cancion {
    id: number;
    titulo: string;
    minutos: number;
    segundos: number;
    interprete: string;
    albumes: Array<any>;
    comentarios:Array<Comentario>

    constructor(
        id: number,
        titulo: string,
        minutos: number,
        segundos: number,
        interprete: string,
        albumes: Array<any>,
        comentarios:Array<Comentario>
    ){
        this.id = id,
        this.titulo = titulo,
        this.minutos = minutos,
        this.segundos = segundos,
        this.interprete = interprete
        this.albumes = albumes
        this.comentarios=comentarios
    }
}
