import {Injectable} from '@angular/core';
import {Usuario} from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[] = [
    new Usuario('Rafael Bonamigo', 'rafaelrbonamigo@gmail.com', new Date(), '12345678')
  ];

  constructor() {
  }

  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }
}
