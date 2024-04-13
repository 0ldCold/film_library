import {AppDataSource} from "src/database/data-source"
import {Request} from "express"
import {UserEntity} from "src/entities/User/User.entity"
import {NotFoundError} from "src/helpers/errors";

export class UserController {

  private userRepository = AppDataSource.getRepository(UserEntity)

  async all(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

  async one(request: Request): Promise<UserEntity> {
    const id = parseInt(request.params.id);

    const user = await this.userRepository.findOne({
      where: {id}
    })

    if (!user) {
      throw new NotFoundError("User")
    }
    return user;
  }

  async save(request: Request): Promise<void> {
    const {firstName, lastName, email} = request.body;

    const user = new UserEntity();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    await this.userRepository.save(user);
  }

  async remove(request: Request):Promise<void> {
    const id = parseInt(request.params.id)

    let userToRemove = await this.userRepository.findOneBy({id})

    if (!userToRemove) {
      throw new NotFoundError("User");
    }

    await this.userRepository.remove(userToRemove);
  }

}
