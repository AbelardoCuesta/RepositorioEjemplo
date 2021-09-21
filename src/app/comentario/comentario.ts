
export class Comentario {
    id: number;
    comentario: string;
    id_usuario: number;
    fecha:string;

    constructor(
        id: number,
        comentario: string,
        id_usuario: number,
        fecha:string

    ){
        this.id = id,
        this.comentario = comentario
        this.id_usuario = id_usuario
        this.fecha = fecha
    }
}

export enum TipoComentario{
    Album = 'Album',
    Cancion = 'Cancion'
}
