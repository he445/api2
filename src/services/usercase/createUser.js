import { userEntity } from '../../entities/user';

export class createUser {
  constructor(userRepository) {
    this.repository = userRepository;
  }
  async execut(user) {
    const newUser = new userEntity(user);
    newUser.validate();
    return await this.repository.create(newUser.getUsers);
  }
}
