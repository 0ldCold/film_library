import {AppDataSource} from "src/database/data-source"
import {NextFunction, Request, Response} from "express"
import {UserEntity} from "src/entities/User/User.entity"
import {NotFoundError} from "src/helpers/errors";

export class UserController {

  private userRepository = AppDataSource.getRepository(UserEntity)

  async all(request: Request, response: Response, next: NextFunction): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

  async one(request: Request, response: Response, next: NextFunction): Promise<UserEntity> {
    const id = parseInt(request.params.id);

    const user = await this.userRepository.findOne({
      where: {id}
    })

    if (!user) {
      throw new NotFoundError("User")
    }
    return user;
  }

  async save(request: Request, response: Response, next: NextFunction): Promise<void> {
    const {firstName, lastName, email} = request.body;

    const user = new UserEntity();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    await this.userRepository.save(user);
  }

  async remove(request: Request, response: Response, next: NextFunction):Promise<void> {
    const id = parseInt(request.params.id)

    let userToRemove = await this.userRepository.findOneBy({id})

    if (!userToRemove) {
      throw new NotFoundError("User");
    }

    await this.userRepository.remove(userToRemove);
  }

}
