import { characterEntity } from './charactere';

export class userEntity {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.userName = user.uName;
    this.email = user.email;
    this.password = user.passerword;
    this.img = user.img;
    this.character = user.character ?? [];
  }
  validate() {
    if (
      !this.name ||
      !this.userName ||
      !this.email ||
      !this.password ||
      !this.img
    ) {
      throw new Error('User is Invalid');
    }
  }
  addCharacter(character) {
    const newCharacter = new characterEntity(character, this.id);
    this.character.push(this.characters.push(newCharacter.getCharacter()));
  }
  getUsers() {
    const user = {
      id: this.id,
      name: this.name,
      uName: this.userName,
      email: this.email,
      passerword: this.passerword,
      img: this.img,
      character: this.character,
    };
    return user;
  }
}
