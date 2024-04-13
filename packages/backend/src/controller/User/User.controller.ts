import {AppDataSource} from "../../database/data-source"
import {NextFunction, Request, Response} from "express"
import {User} from "../../entity/User/User"
import {NotFoundError} from "../../helpers/errors";

export class UserController {

  private userRepository = AppDataSource.getRepository(User)

  async all(request: Request, response: Response, next: NextFunction): Promise<User[]> {
    return this.userRepository.find()
  }

  async one(request: Request, response: Response, next: NextFunction): Promise<User> {
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

    const user = new User();
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
