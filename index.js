import { UserRepositoryMongoDb } from './database/repositories/userRepository.js';
import { CreateUserUseCase } from './services/usecases/createUser.js';
import { MongoDbConnection } from './database/mongo/connection/connect.js';
import { FindUserByIdUseCase } from './services/usecases/findUserById.js';
import { UpdateUserUseCase } from './services/usecases/updateUser.js';

const database = new MongoDbConnection();

await database.ConnectDb().catch((err) => {
  console.log(err);
});

const repository = new UserRepositoryMongoDb();
