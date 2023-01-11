export class Auth {
    public user_id: string;
    public email: string;
    public token: string;
    public rol: string;

  constructor (user_id: string, email: string, token: string, rol: string){
    this.user_id = user_id;
    this.email = email;
    this.token = token;
    this.rol = rol;
    }
}