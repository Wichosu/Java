export class Contact {
  name = '';
  surname = '';
  number = '';
  email = '';
  connected = false;

  constructor(name, surname, number, email, connected) {
    this.name = name;
    this.surname = surname;
    this.number = number;
    this.email = email;
    this.connected = connected;
  }
}