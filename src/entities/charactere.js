export class characterEntity {
  constructor(character, userId) {
    this.id = character.id;
    this.name = character.name;
    this.image = character.image;
    this.userId = userId;
  }
  validate() {
    if (!this.name || !this.img) {
      throw new Error('character is Invalid');
    }
  }

  getCharacter() {
    const character = {
      id: this.id,
      name: this.name,
      image: this.image,
      userId: this.userId,
    };
    return character;
  }
}
