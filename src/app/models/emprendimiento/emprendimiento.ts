export class Emprendimiento{
    id: number
    id_usuario: number
    categorias: { id: number, nombre:string}
    donacion: {id:number, cantidadManguitos:number, contacto:string, mensaje:string, precioHistorico:number}
    nombre: string
    descripcion: string
    mostrarTopDonadores: boolean
    mostrarManguitosRecibidos: boolean
    precioPorManguito: number

    constructor(id: number,
        id_usuario: number,
        categorias: { id: number, nombre:string},
        donacion: {id:number, cantidadManguitos:number, contacto:string, mensaje:string, precioHistorico:number},
        nombre: string,
        descripcion: string,
        mostrarTopDonadores: boolean,
        mostrarManguitosRecibidos: boolean,
        precioPorManguito: number){
            this.id = id
            this.id_usuario = id
            this.categorias = categorias
            this.donacion = donacion
            this.nombre = nombre
            this.descripcion = descripcion
            this.mostrarTopDonadores = mostrarTopDonadores
            this.mostrarManguitosRecibidos = mostrarManguitosRecibidos
            this.precioPorManguito = precioPorManguito
        }

}