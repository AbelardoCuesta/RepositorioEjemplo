import { Comentario } from "../comentario/comentario";

export class Album {

    id: number;
    titulo: string;
    anio: number;
    descripcion: string;
    medio: Medio;
    usuario: number;
    interpretes: Array<string>;
    canciones: Array<Cancion>
    comentarios:Array<Comentario>
    variosComentarios:Array<string>

    constructor(
        id: number,
        titulo: string,
        anio: number,
        descripcion: string,
        medio: Medio,
        usuario: number,
        interpretes: Array<string>,
        canciones: Array<Cancion>,
        comentarios:Array<Comentario>,
        variosComentarios:Array<string>

    ){
        this.id = id,
        this.titulo = titulo,
        this.anio = anio,
        this.descripcion = descripcion,
        this.medio = medio,
        this.usuario = usuario,
        this.interpretes = interpretes,
        this.canciones = canciones,
        this.comentarios=comentarios,
        this.variosComentarios=variosComentarios
    }
}

export class Medio{
    llave: string;
    valor: number

    constructor(
        llave: string,
        valor:number
    ){
        this.llave = llave,
        this.valor = valor
    }
}

export class Cancion{
    id: number;
    titulo: string;
    minutos: number;
    segundos: number;
    interprete: string;

    constructor(
        id: number,
        titulo: string,
        minutos: number,
        segundos: number,
        interprete: string
    ){
        this.id = id,
        this.titulo = titulo,
        this.minutos = minutos,
        this.segundos = segundos,
        this.interprete = interprete
    }
}

export class AlbumCompartido {
  album: Album;
  cancion: Cancion;
  fecha: Date;

  constructor(
    album: Album,
    cancion: Cancion,
    fecha: Date
  ){
    this.album = album,
    this.cancion = cancion,
    this.fecha = fecha
  }
}
