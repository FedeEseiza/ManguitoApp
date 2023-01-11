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
    twitter: string
    instagram: string
    facebook: string

    constructor(id: number,
        id_usuario: number,
        categorias: { id: number, nombre:string},
        donacion: {id:number, cantidadManguitos:number, contacto:string, mensaje:string, precioHistorico:number},
        nombre: string,
        descripcion: string,
        mostrarTopDonadores: boolean,
        mostrarManguitosRecibidos: boolean,
        precioPorManguito: number,
        twitter: string,
        instagram: string,
        facebook: string){
            this.id = id
            this.id_usuario = id
            this.categorias = categorias
            this.donacion = donacion
            this.nombre = nombre
            this.descripcion = descripcion
            this.mostrarTopDonadores = mostrarTopDonadores
            this.mostrarManguitosRecibidos = mostrarManguitosRecibidos
            this.precioPorManguito = precioPorManguito
            this.twitter = twitter
            this.instagram = instagram
            this.facebook = facebook
        }

}