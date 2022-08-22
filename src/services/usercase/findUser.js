export class findUsers {
  constructor() {
    this.repositorY = userRepository;
  }
  async execute(user) {
    if (!user) {
      throw new Error('Any user has been created');
    }
    const allUsers = await characters.findAll();
    return allUsers;
  }
}
