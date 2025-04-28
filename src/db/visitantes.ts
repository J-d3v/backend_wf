// db/user.ts

export interface UserDB {
  id: number;
  usuario: string;
  contrasena: string;
  nombre: string;
  boleto: string;
}

const FAKE_USERS: UserDB[] = [
  { id: 0, usuario: 'alejandra.m', contrasena: 'verde123', nombre: 'Alejandra Morales', boleto: '00123' },
  { id: 1, usuario: 'david.p', contrasena: 'bosque456', nombre: 'David Perez', boleto: '00124' },
  { id: 2, usuario: 'lucia.r', contrasena: 'eco789', nombre: 'Lucia Ramirez', boleto: '00125' },
];

export class UserService { // Cambiado a UserService para consistencia con FakeService
  async getUserByCredentials(usuario: string, contrasena: string): Promise<UserDB | undefined> {
    return FAKE_USERS.find(
      (user) => user.usuario === usuario && user.contrasena === contrasena
    );
  }

  async getUserById(id: number): Promise<UserDB | undefined> {
    return FAKE_USERS[id];
  }
}