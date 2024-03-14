export class UsuarioModel {
    email: string;
    password: string;
    nombre: string;

    constructor() {
        this.email = ''; // Valor predeterminado como string vacío
        this.password = ''; // Valor predeterminado como string vacío
        this.nombre = ''; // Valor predeterminado como string vacío
    }
}
