
export class Comentario {
    id: number;
    comentario: string;
    id_usuario: number;

    constructor(
        id: number,
        comentario: string,
        id_usuario: number

    ){
        this.id = id,
        this.comentario = comentario
        this.id_usuario = id_usuario
    }
}

export enum TipoComentario{
    Album = 'Album',
    Cancion = 'Cancion'
}